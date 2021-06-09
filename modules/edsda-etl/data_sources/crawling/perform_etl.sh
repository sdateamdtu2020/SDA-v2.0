#!/bin/bash 
#Absolute path to this script, e.g. /home/user/bin/foo.sh
SCRIPT=$(readlink -f "$0")
# Absolute path this script is in, thus /home/user/bin
SCRIPTPATH=$(dirname "$SCRIPT")
directory=$SCRIPTPATH
tables="/create_tables.py"
fileperform="/perform_etl.py"
loaddatabase="/load_data.py"

cd /home/dongky/DongKyFolder/edsda-etl/data_sources/crawling  
chmox +x perform_etl.sh

sudo ./perform_etl.sh

846213579



