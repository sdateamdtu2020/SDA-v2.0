from .Database import *


#dimension tables
dimcity = Table()
DimCity_Table_Create = dimcity.gather_Elements(dimcity.createSequence('xxx'),dimcity.createTable("dimcity"),
        dimcity.addTableMeasures(
        "CityID VARCHAR PRIMARY KEY DEFAULT 'vn-' || nextval('xxx') NOT NULL",
        "City VARCHAR NULL",
        "DistrictID VARCHAR NULL"),
        dimcity.createAlter("CONSTRAINT fk_DistrictID FOREIGN KEY (DistrictID) REFERENCES DimDistrict(DistrictID)"))

dimtime = Table()
DimTime_Table_Create = dimtime.gather_Elements(dimtime.createTable("DimTime"),
                        dimtime.addTableMeasures(
                        "TimeID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL",
                        "Year INT NULL",
                        "Quarter INT NULL",
                        "Month INT NULL",
                        "UNIQUE(Year, Quarter, Month)"
                        ))

dimdistrict = Table()
DimDistrict_Table_Create = dimdistrict.gather_Elements(dimdistrict.createSequence('yyy'),dimdistrict.createTable("DimDistrict"),
        dimdistrict.addTableMeasures(
        "DistrictID VARCHAR PRIMARY KEY DEFAULT 'vn-' || nextval('yyy') NOT NULL",  
        "District VARCHAR NULL"))

area = Table()
DimArea_Table_Create = area.gather_Elements(area.createSequence('zzz'),area.createTable("DimArea"),
        area.addTableMeasures(
        "AreaID VARCHAR PRIMARY KEY DEFAULT 'vn-' || nextval('zzz') NOT NULL",  
        "Area VARCHAR NULL",
        "CityID VARCHAR NULL"),
        area.createAlter("CONSTRAINT fk_CityID FOREIGN KEY (CityID) REFERENCES DimCity(CityID)"))
