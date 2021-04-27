#!/bin/bash 
#Absolute path to this script, e.g. /home/user/bin/foo.sh
SCRIPT=$(readlink -f "$0")
# Absolute path this script is in, thus /home/user/bin
SCRIPTPATH=$(dirname "$SCRIPT")
directory=$SCRIPTPATH
tables="/create_tables.py"
fileperform="/perform_etl.py"
loaddatabase="/load_data.py"


cd ..
cd ./data_sources/cleaning/raw_data_1
python3 clean.py

cd ..
cd ./raw_data_2
python3 clean.py

cd ..
cd ./raw_data_3
python3 clean.py

cd ..
cd ./prepared_data
python3 transform_csv.py

cd $directory

python3 $directory$tables
python3 $directory$fileperform
python3 $directory$loaddatabase



