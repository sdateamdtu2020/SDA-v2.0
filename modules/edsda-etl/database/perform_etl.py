import sys
import os
import time
import asyncio

def get_files_data():
    path = "../data_sources/cleaning/structured_data_d"
    files = os.listdir(path)
    files.sort()

    return files


async def run_clean_engine(data_source):
    return os.system('python3 etl.py {}'.format(data_source))


async def run_command():
    data_sources = get_files_data()
    for i in range(len(data_sources)):
        os.system('clear')
        print("Performing ETL... ",data_sources[i])
        await asyncio.gather(run_clean_engine(data_sources[i]))

asyncio.run(run_command())

time.sleep(3.0)
os.system('clear')
print('ALL DONE')







