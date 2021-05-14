import unidecode
import lxml
import requests
from bs4 import BeautifulSoup


cities_data = ['001-Quận Ba Đình', '002-Quận Hoàn Kiếm', '003-Quận Tây Hồ', '004-Quận Long Biên'
        '005-Quận Cầu Giấy', '006-Quận Đống Đa', '007-Quận Hai Bà Trưng', '008-Quận Hoàng Mai'
,'009-Quận Thanh Xuân', '016-Huyện Sóc Sơn', '017-Huyện Đông Anh', '018-Huyện Gia Lâm', '019-Quận Nam Từ Liêm'
, '020-Huyện Thanh Trì', '021-Quận Bắc Từ Liêm', '250-Huyện Mê Linh', '268-Quận Hà Đông'
,'269-Thị xã Sơn Tây', '271-Huyện Ba Vì', '272-Huyện Phúc Thọ','273-Huyện Đan Phượng','274-Huyện Hoài Đức'
,'275-Huyện Quốc Oai', '276-Huyện Thạch Thất','277-Huyện Chương Mỹ','278-Huyện Thanh Oai','279-Huyện Thường Tín'
,'280-Huyện Phú Xuyên','281-Huyện Ứng Hòa','282-Huyện Mỹ Đức']



def textTransfer1(text):
    result = text.upper()
    result = unidecode.unidecode(result)
    removeCharacter = '-._'
    for char in removeCharacter:
        result = result.replace(char,"")

    result = ''.join([i for i in result if not i.isdigit()])

    return result.strip()

def textTransfer2(text):
    special_cases = ['Quận 1', 'Quận 2', 'Quận 3', 'Quận 4', 'Quận 5', 'Quận 6', 'Quận 7'
        , 'Quận 8', 'Quận 9', 'Quận 10', 'Quận 11', 'Quận 12'
    ]

    for case in special_cases:
        if text[4:] == case:
            return text[4:]

    result = text
    removeCharacter = '-._'
    for char in removeCharacter:
        result = result.replace(char,"")

    result = ''.join([i for i in result if not i.isdigit()])

    return result.strip()

def remove_string(city):
    city_data = city
    strRemove = ["THANHPHO", "TINH"]
    for string in strRemove:
        if string in city_data:
            city_data = city_data.replace(string, '') 

    return city_data

def write_file1(city, districts):
    bodyResult = ""
    for district in districts:
        bodyResult = bodyResult + "'" + textTransfer2(district.text) + "' ,"
    result = (remove_string(textTransfer1(city.text.replace(' ', '_')))+' = [ {} ]').format(bodyResult)
    new_str = ''.join([result[i] for i in range(len(result)) if i != len(result)-3])
    return new_str


def write_file2(city, districts):
    bodyResult = ""
    for district in districts:
        bodyResult = bodyResult + "'" + textTransfer2(district) + "' ,"
    result = (remove_string(textTransfer1(city.text.replace(' ', '_')))+' = [ {} ]').format(bodyResult)
    new_str = ''.join([result[i] for i in range(len(result)) if i != len(result)-3])
    return new_str
    



# soup = BeautifulSoup (open("./data.html", encoding="utf8"), features="lxml")
req = requests.get('https://hoatieu.vn/danh-sach-tinh-huyen-xa-viet-nam-197549')
soup = BeautifulSoup(req.text, "lxml")

cities = soup.find_all('h3')
ulTags = soup.find_all('ul')

#Ghi file
f = open("district_data.txt", "a")


index = 0
districts_data = "DISTRICTS_DATA = ["
#Case này thẻ li không có class ? ? =)
if index == 0:
    data = write_file2(cities[index], cities_data)
    districts_data += remove_string(textTransfer1(cities[index].text.replace(' ', '_')))+", "
    f.writelines(data+"\n")
    index += 1
for ul in ulTags:
    liTags = ul.find_all('li', class_='huyen')
    if len(liTags) != 0:
        data = write_file1(cities[index], liTags)
        districts_data += remove_string(textTransfer1(cities[index].text.replace(' ', '_')))+", "
        f.writelines(data+"\n")
        index += 1
        
f.writelines(districts_data+"\n")
f.close()
    









        












