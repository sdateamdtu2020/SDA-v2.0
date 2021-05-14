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
load_dotenv()

DBNAME = os.environ.get("dbname")
USER = os.environ.get("user")
PASSWORD = os.environ.get("password")

try:
    dim, mea, filePath = str(sys.argv[1]), str(sys.argv[2]), str(sys.argv[3])
    if dim == 'undefined':
        dim = ""
    if mea == 'undefined':
        mea = ""

except:
    raise Exception("error while loading argument")

AVAIL_DIM = ['area', 'city', 'district', 'year']

def table_name_FileType(filePath):
    result = ""
    fileType = filePath.split('.')[1]
    if fileType == 'csv':
        result = filePath[:-4].split('-')[1]
    elif fileType == 'xlsx':
        result = filePath[:-5].split('-')[1]

    return result

dimensions = dim.split(',') if dim != "" else []
measures = mea.split(',') if mea != "" else []
tableName = table_name_FileType(filePath)
fileLocation = filePath.split('/')[1]



def table_columns(dims, meas):
    columns = dims+meas

    result = ""
    for column in columns:
        if column in AVAIL_DIM:
            if column == 'year':
                result += "{}ID int NULL, {} int NULL,".format(column, column)
            else:
                result += "{}ID VARCHAR NULL, {} VARCHAR NULL,".format(column, column)
        else:
            result += "{} VARCHAR NULL,".format(column)

    return result[:-1]



def table_constraints(dims, tableName):
    result = ""
    for dim in dims:
        if dim in AVAIL_DIM:
            result += " ALTER TABLE {} ADD CONSTRAINT fk_{}id_{} FOREIGN KEY ({}ID) REFERENCES Dim{}({}ID);".format(tableName, dim, tableName, dim, dim, dim)
    return result


table = Table()
import_table = table.gather_Elements(table.createTable("{}".format(tableName)),
            table.addTableMeasures(
            "ImportTableID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL",
            table_columns(dimensions, measures)
            ),
            table.createMultipleAlter(
                table_constraints(dimensions, tableName)
            ))


def csv_data(file_path) :
    data = []
    with open('./files/{}'.format(file_path), newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',')
        for row in spamreader:
            data.append(row)
            
    column_names = data[0]
    return column_names, data[1:]


def connections():
    conn = psycopg2.connect("host=127.0.0.1 dbname={} user={} password={}".format(DBNAME, USER, PASSWORD))
    cur = conn.cursor()

    return cur, conn

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



def run_import_engine():
    cur, conn = connections()
    cur.execute(import_table)
    conn.commit()
    column_names, data = csv_data(fileLocation)
    load_to_dw(table, column_names, data, cur, conn)

    try:
        conn.close()
        cur.close()
    except:
        pass


run_import_engine()





column_names, data = csv_data(fileLocation)

file = open("testfile.txt","w")
file.write("1:   "+filePath+"\n")
file.write("2:   "+"".join(dimensions)+"\n")
file.write("3:   "+"".join(measures)+"\n")
file.write("4:   "+tableName+"\n")
file.write("5:   "+fileLocation+"\n")
file.write("6:   "+DBNAME+"\n")
file.write("7:   "+USER+"\n")
file.write("8:   "+PASSWORD+"\n")
file.write("9:   "+import_table+"\n")
file.write("\n")
file.write("10:   "+' '.join(column_names)+"\n")

file.close() 