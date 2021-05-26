import time
import pandas as pd
import math
import numpy
import csv
import os , shutil
import bonobo
import requests
import sys


DATA_STORE = []
try:
    DATA_SOURCE = str(sys.argv[1])
except:
    DATA_SOURCE = "source_dieyoundunder5age.xlsx"


def get_files_data():
    path = "./data/"
    files = os.listdir(path)
    files.sort()

    return files

def xlxs_data(file_path):
    df = pd.read_excel(r'data/{}'.format(file_path), skiprows=1)
    #get row year
    year_row_data = df.loc[0]
    #get column name
    data_column_name = list(df.columns.values)
    #get year column start at index 0 of data_column_name[0]
    city_column_data = df[data_column_name[0]]

    city_data = []
    year_data = []
    files_data = []
    
    #year_data
    transformed_data = 0
    for i in range(1,len(year_row_data)):
        if type(year_row_data[i]) is str:
            transformed_data = int((year_row_data[i])[:-5:-1][::-1])
        else:
            transformed_data = int(year_row_data[i])
        year_data.append(transformed_data)
    #city_data
    for i in range(1, len(city_column_data)):
        city_data.append(city_column_data[i])
    #file_data
    for i in range(1, len(city_data)+1):
        temp = df.loc[i]
        file_data = []
        for j in range(1, len(year_data)+1):
            file_data.append(temp[j])
        files_data.append(file_data)


    return city_data, year_data, files_data


def transfer_to_structured_data(fileName, *args):
    storeData = []
    for arg in args:
        storeData.append(arg)
    with open('{}'.format(fileName), 'w', newline='') as csv_file:
        fileName = fileName[:-5]
        writer = csv.writer(csv_file)
        writer.writerow(["city", "year", fileName[7:]])
        city = storeData[0]
        year = storeData[1]
        data = storeData[2]
        for i in range(len(city)):
            dataIndex = data[i]
            for j in range(len(dataIndex)):
                writer.writerow([city[i], year[j], dataIndex[j]])
    os.system('python3 move_files.py')

def extract_data_from_xlxs():
    city_data, year_data, file_data = xlxs_data("{}".format(DATA_SOURCE))
    yield city_data
    yield year_data
    yield file_data


def transform_data(args: list):
    DATA_STORE.append(args)
    yield DATA_STORE
    


def load_into_new_xlsx_file(args: list):
    city_data, year_data, file_data = DATA_STORE
    transfer_to_structured_data("{}".format(DATA_SOURCE), city_data, year_data, file_data)

    

def main():
    
    graph = bonobo.Graph(
        extract_data_from_xlxs,
        transform_data,
        load_into_new_xlsx_file
    )
    bonobo.run(graph)

    
if __name__ == "__main__":
    main()