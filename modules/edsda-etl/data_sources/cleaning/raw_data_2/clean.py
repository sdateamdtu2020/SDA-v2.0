import sys
import os
import time





def get_files_data():
    path = "./data/"
    files = os.listdir(path)
    files.sort()

    return files


def run_clean_engine(data_source):
    return os.system('python3 clean_engine.py {}'.format(data_source))


def run_command():
    data_sources = get_files_data()
    for i in range(len(data_sources)):
        os.system('clear')
        print("Transforming... ",data_sources[i])
        time.sleep(1.5)
        run_clean_engine(data_sources[i])
        time.sleep(1.0)
        

run_command()

os.system('clear')
print("Clean done")






