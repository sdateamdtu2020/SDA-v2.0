# README

This README would normally document whatever steps are necessary to get your application up and running.

### PYTHON VERSION >= 3.8 , Linux terminal

- DATABASE : Postgresql
- Using pip to install necessary packages
- bonobo, apt_pkg, psycopg2-binary, dotenv, pandas, numpy, xlrd==1.2.0, openpyxl

# After install all the necessary packages

### Define .env inside database folder

- dbname = "edsdadb"
- user = "postgres"
- password = ""

### Inside folder database having a file name : perform_edsda.sh

### To perform perform_edsda.sh file : type the follow commnads below in linux terminal

- 1/ 
sed -i -e 's/\r$//' perform_edsda.sh
- 2/ 
./perform_edsda.sh
