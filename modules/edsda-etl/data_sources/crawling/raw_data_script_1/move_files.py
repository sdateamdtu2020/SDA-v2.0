import os, shutil
import sys

try:
    fileName = str(sys.argv[1])
except:
    fileName = "unknown.csv"


path = "/home/dongky/Documents/"
moveto = "/home/dongky/DongKyFolder/edsda-etl/data_sources/cleaning/raw_data_1/data/"
files = os.listdir(path)
files.sort()
for f in files:
    if(f.startswith('V01.07')):
        os.rename(path+f,path+fileName)
        src = path+fileName
        dst = moveto+fileName
        shutil.move(src,dst)
