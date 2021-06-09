#Try many ways to fix the error
from selenium import webdriver
from webdriver_manager.firefox import GeckoDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select 
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import selenium.webdriver.support.ui as ui
import time
import os

fp = webdriver.FirefoxProfile()
fp.set_preference("browser.download.folderList",2)
fp.set_preference("browser.download.dir", '/home/dongky/Documents')
fp.set_preference("browser.download.manager.showWhenStarting", False)
fp.set_preference("browser.helperApps.neverAsk.openFile", "application/octet-stream");
fp.set_preference("browser.helperApps.neverAsk.saveToDisk", "application/octet-stream");

driver = webdriver.Firefox(firefox_profile= fp)
driver.get("""https://www.gso.gov.vn/px-web-2/?pxid=V0107&theme=%C4%90%C6%A1n%20v%E1%BB%8B%20h%C3%A0nh%20ch%C3%ADnh%2C%20%C4%91%E1%BA%A5t%20%C4%91ai%20v%C3%A0%20kh%C3%AD%20h%E1%BA%ADu""")
driver.maximize_window() # For maximizing window

time.sleep(10)
WebDriverWait(driver, 20).until(EC.frame_to_be_available_and_switch_to_it((By.XPATH,"//iframe[contains(@src, 'https://pxweb.gso.gov.vn/pxweb/vi')]")))

selectButton= driver.find_element(By.ID,'ctl00_ContentPlaceHolderMain_VariableSelector1_VariableSelector1_VariableSelectorValueSelectRepeater_ctl01_VariableValueSelect_VariableValueSelect_SelectAllButton')
print("select button : ", selectButton)
selectButton.click()


selectButton2= driver.find_element(By.ID,'ctl00_ContentPlaceHolderMain_VariableSelector1_VariableSelector1_VariableSelectorValueSelectRepeater_ctl02_VariableValueSelect_VariableValueSelect_SelectAllButton')
print("select button 2: ", selectButton2)
selectButton2.click()


fileTypes = driver.find_element(By.ID, "ctl00_ContentPlaceHolderMain_VariableSelector1_VariableSelector1_OutputFormats_OutputFormats_OutputFormatDropDownList")
fileValues= Select(fileTypes)
fileList = fileValues.options
print(len(fileList))

for file in fileList:
    if file.text == 'Phân tách bới dấu chấm phẩy kèm tiêu đề':
        file.click()
        break

submitButton = driver.find_element(By.ID, "ctl00_ContentPlaceHolderMain_VariableSelector1_VariableSelector1_ButtonViewTable")
submitButton.click()

time.sleep(15)
driver.close()

os.system('python3 move_files.py source_rainfall.csv')