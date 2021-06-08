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
    'email' : ['mrdaragons@gmail.com'],
}
data_path = '/home/dongky/DongKyFolder/edsda-etl/data_sources/'
create_database_path = '/home/dongky/DongKyFolder/edsda-etl/database'
clean_file_name = 'clean.py'
crawl_dic= '/home/dongky/DongKyFolder/edsda-etl/data_sources/crawling'

dieyoungunder5age = """
    cd {}/raw_data_script_3
    python3 {}
""".format(crawl_dic, 'crawl_dieyoungunder5age.py')

forestcover = """
    cd {}/raw_data_script_2
    python3 {}
""".format(crawl_dic, 'crawl_forestcover.py')


rainfall = """
    cd {}/raw_data_script_1
    python3 {}
""".format(crawl_dic, 'crawl_rainfall.py')


afforestation = """
    cd {}/raw_data_script_1
    python3 {}
""".format(crawl_dic, 'crawl_afforestation.py')


humidity = """
    cd {}/raw_data_script_1
    python3 {}
""".format(crawl_dic, 'crawl_humidity.py')


industry = """
    cd {}/raw_data_script_1
    python3 {}
""".format(crawl_dic, 'crawl_industry.py')


population = """
    cd {}/raw_data_script_1
    python3 {}
""".format(crawl_dic, 'crawl_population.py')


temperature = """
    cd {}/raw_data_script_1
    python3 {}
""".format(crawl_dic, 'crawl_temperature.py')


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

load_staging = """
    cd {}
    python3 {} 
""".format(create_database_path, 'perform_etl.py')

load_fact= """
    cd {}
    python3 {} 
""".format(create_database_path, 'load_data.py')




dag = DAG('workflow_data',
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
###raw data 1
rainfall_dag= BashOperator(
    task_id='Rainfall_from_GOV_page',
    bash_command=rainfall,
    dag=dag,
)
rainfall_dag >> raw_data


afforestation_dag= BashOperator(
    task_id='Afforestation_from_GOV_page',
    bash_command=afforestation,
    dag=dag,
)
afforestation_dag >> raw_data


humidity_dag = BashOperator(
    task_id='Humidity_from_GOV_page',
    bash_command=humidity,
    dag=dag,
)
humidity_dag >> raw_data


industry_dag = BashOperator(
    task_id='Industry_from_GOV_page',
    bash_command=industry,
    dag=dag,
)
industry_dag >> raw_data


population_dag= BashOperator(
    task_id='Population_from_GOV_page',
    bash_command=population,
    dag=dag,
)
population_dag >> raw_data


temperature_dag= BashOperator(
    task_id='Temperature_from_GOV_page',
    bash_command=temperature,
    dag=dag,
)
temperature_dag >> raw_data
raw_data >> structured_data





### raw data 2
raw_data = BashOperator(
    task_id='handling_raw_data_2',
    bash_command=raw_data_2,
    dag=dag,
)
forestcover_dag= BashOperator(
    task_id='Forest_cover_from_GOV_page',
    bash_command=forestcover,
    dag=dag,
)
forestcover_dag >> raw_data
raw_data >> structured_data


raw_data = BashOperator(
    task_id='handling_raw_data_3',
    bash_command=raw_data_3,
    dag=dag
)
dieyoungunder5age_dag= BashOperator(
    task_id='Die_young_under_5_age_from_GOV_page',
    bash_command=dieyoungunder5age,
    dag=dag,
)
dieyoungunder5age_dag >> raw_data
raw_data >> structured_data


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

structured_data >> prepare_data >> loading_data_staging_areas >> loading_data_fact_tables