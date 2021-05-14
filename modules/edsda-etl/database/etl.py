import csv
import math
import os
import random
import shutil
import sys
import time
import bonobo
import psycopg2
import requests
import unidecode
from dotenv import load_dotenv
from DW.Database import *
from DW.dimension_tables import *
from DW.fact_tables import *
from DW.outerQuery import *
from DW.stagingarea_tables import *
from edsda_db import *
load_dotenv()


DBNAME = os.environ.get("dbname")
USER = os.environ.get("user")
PASSWORD = os.environ.get("password")

DATA_STORE = []
try:
    DATA_SOURCE = str(sys.argv[1])
except:
    DATA_SOURCE = "source_afforestation.csv"



def connections():
    
    #connect to default database
    try:
        conn.close()
    except:
        pass

    conn = psycopg2.connect("host=127.0.0.1 dbname={} user={} password={}".format(DBNAME, USER, PASSWORD))
    cur = conn.cursor()

    return cur, conn

def namestr(obj, namespace):
    return [name for name in namespace if namespace[name] is obj]


def csv_data(file_path) :
    data = []
    with open('../data_sources/cleaning/structured_data_d/{}'.format(file_path), newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',')
        for row in spamreader:
            data.append(row)
            
    column_names = data[0]
    return column_names, data[1:]


def load_to_dw(TABLE, column_names, data, cur, conn):
    query = TABLE
    insert = 0
    update = 0
    rowcount = None
    # print(len(data))
    for i in range(len(data)):
        temp = query.insert(column_names, data[i])
        update = query.update(column_names, data[i])
        # print(i,' ',temp)
        try:
            cur.execute(query.insert(column_names, data[i]))
            rowcount = cur.rowcount
            conn.commit()
            print(i,' ',rowcount, " ","INSERT: ", len(temp))
            if rowcount == 0:
                cur.execute(query.update(column_names, data[i]))
                rowcount = cur.rowcount
                conn.commit()
                print(i,' ',rowcount, "  ","UPDATE: ", len(update))
            else:
                pass
        except psycopg2.Error as e:
            print(e)

def data_table_object(csv_name):
    FOREST, CLIMATE, POPULATION, INDUSTRY = stagingAreaObjects

    forest = ['source_afforestation.csv', 'source_forestcover.csv']   
    climate = ['source_humidity.csv','source_rainfall.csv','source_temperature.csv']
    population = ['source_population.csv']
    industry = ['source_industry.csv']

    data_csv_files = [forest, climate, population, industry]

    for i in range(len(data_csv_files)):
        for data in data_csv_files[i]:
            var_name = namestr(data_csv_files[i], locals())[0]
            if data == csv_name and var_name == 'forest':
                return FOREST
            elif data == csv_name and var_name == 'climate':
                return CLIMATE
            elif data == csv_name and var_name == 'population':
                return POPULATION
            elif data == csv_name and var_name == 'industry':
                return INDUSTRY
            


def extract_data_from_csv():
    column_names,  data= csv_data("{}".format(DATA_SOURCE))
    yield column_names
    yield data


def transform_data(args: list):
    DATA_STORE.append(args)
    yield DATA_STORE
    

def load_data_to_dw(args: list):
    cur, conn = connections()
    column_names, data= DATA_STORE
    OBJECT = data_table_object(DATA_SOURCE)

    load_to_dw(OBJECT, column_names, data, cur, conn)

    try:
        cur.close()
        conn.close()
    except:
        pass

    
def main():
    graph = bonobo.Graph(
        extract_data_from_csv,
        transform_data,
        load_data_to_dw
    )
    bonobo.run(graph)
    
    
if __name__ == "__main__":
    main()


# # print(data_table_object(DATA_SOURCE))

# forest = ['source_afforestation.csv']   
# climate = ['source_humidity.csv','source_rainfall.csv','source_temperature.csv']
# population = ['source_population.csv']
# industry = ['source_industry.csv']

# data_csv_files = [forest, climate, population, industry]

# # for i in range(len(data_csv_files)):
# #     for data in data_csv_files[i]:
# #         var_name = (namestr(data_csv_files[i], globals())[0])
# #         print(var_name)


# print(data_table_object(DATA_SOURCE))