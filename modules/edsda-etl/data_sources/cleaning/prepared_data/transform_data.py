import csv
import psycopg2
import math
import unidecode
import os , shutil
import time
import bonobo
import requests
import sys
import random

#info area data
#https://www.vvfc.vn/tin-trong-nuoc-va-quoc-te/chia-ca-nuoc-thanh-7-vung-doi-moi-va-dot-pha-tat-ca-dong-y.html


DATA_STORE = []
try:
    DATA_SOURCE = str(sys.argv[1])
except:
    DATA_SOURCE = "source_humidity.csv"


#AREA DATA
DONG_BAC = ['Hà Giang', 'Cao Bằng', 'Bắc Kạn', 'Tuyên Quang', 'Thái Nguyên', 'Lạng Sơn', 'Bắc Giang','Bãi Cháy']
TAY_BAC = ['Lào Cai', 'Yên Bái', 'Phú Thọ', 'Điện Biên', 'Lai Châu', 'Sơn La', 'Hòa Bình']
DONG_BANG_SONG_HONG = ['Hà Nội', 'Vĩnh Phúc', 'Bắc Ninh', 'Quảng Ninh', 'Hải Dương', 'Hải Phòng', 'Hưng Yên', 'Thái Bình', 'Hà Nam', 'Nam Định', 'Ninh Bình']
BAC_TRUNG_BO = ['Thanh Hóa', 'Nghệ An', 'Hà Tĩnh', 'Quảng Bình', 'Quảng Trị', 'Bắc Trung Bộ và Duyên hải miền Trung','Thừa Thiên Huế', 'Huế']
NAM_TRUNG_BO = [ 'Đà Nẵng', 'Quảng Nam', 'Quảng Ngãi', 'Bình Định', 'Phú Yên', 'Khánh Hòa', 'Kon Tum', 'Gia Lai', 'Đắk Lắk', 'Đắk Nông', 'Đà Lạt', 'Vũng Tàu']
DONG_NAM_BO = ['Ninh Thuận', 'Bình Thuận', 'Lâm Đồng', 'Bình Phước', 'Tây Ninh', 'Tây Nguyên','Bình Dương', 'Đồng Nai', 'Bà Rịa - Vũng Tàu', 'TP. Hồ Chí Minh', 'Qui Nhơn', 'Pleiku', 'Nha Trang', 'Đông Nam Bộ']
DONG_BANG_SONG_CUU_LONG = ['Long An', 'Tiền Giang', 'Vinh', 'Bến Tre', 'Trà Vinh', 'Vĩnh Long', 'Đồng Tháp', 'An Giang', 'Kiên Giang', 'Cần Thơ', 'Hậu Giang' ,'Sóc Trăng', 'Bạc Liêu', 'Cà Mau']
AREA_DATA = [DONG_BAC, TAY_BAC, DONG_BANG_SONG_HONG, BAC_TRUNG_BO, NAM_TRUNG_BO, DONG_NAM_BO, DONG_BANG_SONG_CUU_LONG]

#DISTRICT
HA_NOI = ['Ba Đình', 'Đống Đa', 'Hoàn Kiếm', 'Hai Bà Trưng', 'Tây Hồ', 'Long Biên', 
        'Hoàng Mai', 'Cầu Giấy', 'Thanh Xuân', 'Hà Đông', 'Bắc Từ Liêm', 'Nam Từ Liêm']
HAI_PHONG = ['Hồng Bàng', 'Lê Chân', 'Ngô Quyền', 'Hải An', 'Kiến An', 'Dương Kinh', 'Đồ Sơn']
DA_NANG = ['Hải Châu', 'Thanh Khê', 'Liên Chiểu', 'Sơn Trà', 'Ngũ Hành Sơn', 'Cẩm Lệ']
TP_HOCHIMINH = ['Quận 1', 'Quận 3', 'Quận 4', 'Quận 5', 'Quận 6', 'Quận 7', 'Quận 8', 'Quận 10',
         'Quận 11', 'Quận 12', 'Gò Vấp', 'Bình Thạnh', 'Phú Nhuận', 'Bình Tân', 'Tân Bình', 'Tân Phú']
CAN_THO = ['Ninh Kiều', 'Bình Thủy', 'Cái Răng', 'Ô Môn', 'Thốt Nốt']

MESSY_DATA = HA_NOI+HAI_PHONG+DA_NANG+TP_HOCHIMINH+CAN_THO
DISTRICTS_DATA = [HA_NOI, HAI_PHONG, DA_NANG, TP_HOCHIMINH, CAN_THO]

def textTransfer(text):
    result = text.lower()
    result = result.replace(" ", "")
    result = unidecode.unidecode(result)
    removeCharacter = '-._'
    for char in removeCharacter:
        result = result.replace(char,"")
    return result

def namestr(obj, namespace):
    return [name for name in namespace if namespace[name] is obj]

def csv_data(file_path) :
    data = []
    with open('../structured_data/{}'.format(file_path), newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',')
        for row in spamreader:
            data.append(row)
            # print(', '.join(row))
    column_names = data[0]
    return data, column_names


def transfer_namespace(str):
    area_str = ['Đông Bắc', 'Tây Bắc', 'Đồng Bằng Sông Hồng', 'Bắc Trung Bộ', 
    'Nam Trung Bộ', 'Đông Nam Bộ', 'Đồng Bằng Sông Cửu Long']

    for i in range(len(area_str)):
        if textTransfer(str) == textTransfer(area_str[i]):
            return area_str[i]


#This compare and assign area to the city
def compare_city_data(data):
    result = []
    for i in range(len(AREA_DATA)):
        city_in_area = AREA_DATA[i]
        for j in range(len(city_in_area)):
            #Finding city in specific area
            if textTransfer(data) == textTransfer(city_in_area[j]):
                result = namestr(AREA_DATA[i], globals())
            #If city is not available in area array
            elif textTransfer(data) != textTransfer(city_in_area[j]):
                result.append(data)

    return result



def transform_csv_data(data, column_names):
    area_data = []
    get_area_data = ''

    for i in range(1, len(data)):
        city = data[i]
        get_area_data = compare_city_data(city[0])

        if get_area_data != None and len(get_area_data) >= 1:
            area_data.append(transfer_namespace(get_area_data[0]))
        elif get_area_data != None and len(get_area_data) == 1:
            area_data.append(get_area_data)
        else:
            return 'null'

    return area_data


def _column_names(list_column_names, *args):
    for arg in args:
        list_column_names.append(arg)
    #remove duplicate
    list_column_names = list(dict.fromkeys(list_column_names))
    return list_column_names

def districts_generator(city):
    for i in range(len(DISTRICTS_DATA)):
        districts_in_city = DISTRICTS_DATA[i]
        city_namespace = textTransfer(namestr(districts_in_city, globals())[0])
        if textTransfer(city) == city_namespace:
            return districts_in_city[math.floor(random.random() * len(districts_in_city))]
    return MESSY_DATA[math.floor(random.random()* len(MESSY_DATA))]



def time_generator():
    month = math.ceil(random.random() * 12)
    quarters = ['1', '2', '3', '4']

    return month, quarters[math.floor(month/3 - 0.1)]
     

def transfer_to_structured_data(fileName, *args):
    storeData = []
    columns = []
    for arg in args:    
        storeData.append(arg)

    data, column_names, area = storeData
    columns = _column_names(column_names, 'area','district')
    with open('{}'.format(fileName), 'w', newline='') as csv_file:
        writer = csv.writer(csv_file)
        writer.writerow(columns)
        row_records = data 
        area_data = area
        #start at one : row_records[0] is a column_names 
        for i in range(1, len(row_records)):
            #row_data[0] = city, row_data[1] = year, row_data[2] = data
            row_data = row_records[i]
            # adding area data row column: area
            row_data.append(area[i-1])
            # adding district
            row_data.append(districts_generator(row_data[0]))
            #Write data
            writer.writerow(row_data[:len(columns)])

    os.system('python3 move_files.py')
    

def extract_data_from_csv():
    data, column_names = csv_data("{}".format(DATA_SOURCE))
    area_data = transform_csv_data(data, column_names)
    yield data
    yield column_names
    yield area_data


def transform_data(args: list):
    DATA_STORE.append(args)
    yield DATA_STORE
    

def load_into_new_csv_file(args: list):
    data, column_names, area_data = DATA_STORE
    transfer_to_structured_data("{}".format(DATA_SOURCE), data, column_names, area_data)

    
def main():
    graph = bonobo.Graph(
        extract_data_from_csv,
        transform_data,
        load_into_new_csv_file
    )
    bonobo.run(graph)
    
    
if __name__ == "__main__":
    main()

