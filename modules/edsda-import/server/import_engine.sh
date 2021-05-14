#!/bin/bash 
#Absolute path to this script, e.g. /home/user/bin/foo.sh
SCRIPT=$(readlink -f "$0")
# Absolute path this script is in, thus /home/user/bin
SCRIPTPATH=$(dirname "$SCRIPT")
directory=$SCRIPTPATH
cd $directory
npm start

while true; do
  rs
  sleep 1
  kill $!
done