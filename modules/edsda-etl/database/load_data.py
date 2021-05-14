import psycopg2
from edsda_db import *
from dotenv import load_dotenv
import os
load_dotenv()

DBNAME = os.environ.get("dbname")
USER = os.environ.get("user")
PASSWORD = os.environ.get("password")

def create_database():
    
    #connect to default database
    try:
        conn.close()
    except:
        pass

    conn = psycopg2.connect("host=127.0.0.1 dbname={} user={} password={}".format(DBNAME, USER, PASSWORD))
    cur = conn.cursor()

    return cur, conn



def load_table_queries(cur, conn):
    for query in dimensions_insert_queries:
        cur.execute(query)
        conn.commit()

def main():
    try:
        conn.close()
    except:
        pass
    
    
    cur, conn = create_database()
    
    load_table_queries(cur, conn)

    cur.close()
    conn.close()
    print('Loaded data successfully')

if __name__ == "__main__":
    main()





