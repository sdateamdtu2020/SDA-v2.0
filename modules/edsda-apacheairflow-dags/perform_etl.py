from datetime import datetime, timedelta
from airflow import DAG
from airflow.operators.bash_operator import BashOperator
from airflow.operators.python_operator import PythonOperator
from airflow.utils.dates import days_ago
import sys
import os
default_args = {
    'owner': 'Dong Ky',
    'depends_on_past': False,
    'start_date': datetime(2020, 4, 1),
    'email_on_failure' : True,
    'email' : ['mrdaragonss@gmail.com'],
}
data_path = '/home/dongky/DongKyFolder/edsda-etl/data_sources/'
create_database_path = '/home/dongky/DongKyFolder/edsda-etl/database'
clean_file_name = 'clean.py'


raw_data_1= """
    cd {}/cleaning/raw_data_1
    python3 {} 
""".format(data_path, clean_file_name)

raw_data_2= """
    cd {}/cleaning/raw_data_2
    python3 {} 
""".format(data_path, clean_file_name)

raw_data_3= """
    cd {}/cleaning/raw_data_3
    python3 {} 
""".format(data_path, clean_file_name)

prepared_data = """
    cd {}/cleaning/prepared_data
    python3 {} 
""".format(data_path, 'transform_csv.py')

create_tables= """
    cd {}
    python3 {} 
""".format(create_database_path, 'create_tables.py')

load_staging = """
    cd {}
    python3 {} 
""".format(create_database_path, 'perform_etl.py')

load_fact= """
    cd {}
    python3 {} 
""".format(create_database_path, 'load_data.py')




dag = DAG('perform_base_etl',
          catchup=False,
          default_args=default_args)

structured_data = BashOperator(
    task_id='structured_data',
    bash_command='echo 1',
    dag=dag
)

prepare_data = BashOperator(
    task_id='prepare_data',
    bash_command=prepared_data,
    dag=dag
)


structured_data >> prepare_data 

raw_data= BashOperator(
    task_id='handling_raw_data_1',
    bash_command=raw_data_1,
    dag=dag,
)
raw_data >> structured_data

raw_data = BashOperator(
    task_id='handling_raw_data_2',
    bash_command=raw_data_2,
    dag=dag,
)
raw_data >> structured_data

raw_data = BashOperator(
    task_id='handling_raw_data_3',
    bash_command=raw_data_3,
    dag=dag
)
raw_data >> structured_data


generate_tables = BashOperator(
    task_id='generate_tables',
    bash_command=create_tables,
    dag=dag
)

loading_data_staging_areas = BashOperator(
    task_id='loading_data_into_staging_areas',
    bash_command=load_staging,
    dag=dag
)

loading_data_fact_tables = BashOperator(
    task_id='loading_data_from_staging_areas_into_fact_tables',
    bash_command=load_fact,
    dag=dag
)

structured_data >> prepare_data >> generate_tables >> loading_data_staging_areas >> loading_data_fact_tables