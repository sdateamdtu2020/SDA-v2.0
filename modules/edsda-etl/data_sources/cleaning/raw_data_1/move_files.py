import os, shutil
path = "./"
moveto = "../structured_data/"
files = os.listdir(path)
files.sort()
for f in files:
    if(f.startswith('source_')):
        src = path+f
        dst = moveto+f
        shutil.move(src,dst)
