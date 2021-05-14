import psycopg2
from edsda_db import *
from dotenv import load_dotenv
import os
load_dotenv()


#Add .env file in "/database" folder directory and define these variables below
# dbname = ""
# user = ""
# password = ""

DBNAME = os.environ.get("dbname")
USER = os.environ.get("user")
PASSWORD = os.environ.get("password")

def create_database():
    
    #connect to default database
    try:
        conn.close()
    except:
        pass


    conn = psycopg2.connect("host=127.0.0.1 user={} password={}".format(USER, PASSWORD))
    conn.set_session(autocommit=True)
    cur = conn.cursor()
    try:
        # cur.execute("REVOKE CONNECT ON DATABASE {} FROM public".format(dbname))
        # cur.execute("SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pg_stat_activity.datname = {}".format(dbname))
        cur.execute("DROP DATABASE IF EXISTS {}".format(DBNAME)) 
        cur.execute("CREATE DATABASE {} WITH ENCODING 'utf8' TEMPLATE template0".format(DBNAME))
    except psycopg2.Error as e:
        print("The database is already exists please drop your database and start again!")
        print(e)


    conn.close()

    conn = psycopg2.connect("host=127.0.0.1 dbname={} user={} password={}".format(DBNAME, USER, PASSWORD))
    cur = conn.cursor()

    return cur, conn

def drop_database(cur, conn, dbname):
    query = "DROP DATABASE {};".format(dbname)
    cur.execute(query)
    conn.commit()

def create_tables(cur, conn):
    for query in create_table_queries:
        cur.execute(query)
        conn.commit()

def main():
    try:
        conn.close()
    except:
        pass
    
    
    cur, conn = create_database()
    
    create_tables(cur, conn)

    cur.close()
    conn.close()
    print('Create Database Successfully')

if __name__ == "__main__":
    main()





