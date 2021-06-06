from .Database import *


#dimension tables
dimcity = Table()
DimCity_Table_Create = dimcity.gather_Elements(dimcity.createSequence('xxx'),dimcity.createTable("dimcity"),
        dimcity.addTableMeasures(
        "CityID VARCHAR PRIMARY KEY DEFAULT 'vn-' || nextval('xxx') NOT NULL",
        "City VARCHAR NULL",
        "AreaID VARCHAR NULL"),
        dimcity.createAlter("CONSTRAINT fk_AreaID FOREIGN KEY (areaID) REFERENCES DimArea(AreaID)"))

dimyear = Table()
DimYear_Table_Create = dimyear.gather_Elements(dimyear.createTable("DimYear"),
                        dimyear.addTableMeasures(
                        "YearID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL",
                        "Year INT NULL"
                        ))

dimdistrict = Table()
DimDistrict_Table_Create = dimdistrict.gather_Elements(dimdistrict.createSequence('yyy'),dimdistrict.createTable("DimDistrict"),
        dimdistrict.addTableMeasures(
        "DistrictID VARCHAR PRIMARY KEY DEFAULT 'vn-' || nextval('yyy') NOT NULL",  
        "District VARCHAR NULL",
        "CityID VARCHAR NULL"
        ),
        dimdistrict.createAlter("CONSTRAINT fk_CityID FOREIGN KEY (CityID) REFERENCES DimCity(CityID)")
        )

area = Table()
DimArea_Table_Create = area.gather_Elements(area.createSequence('zzz'),area.createTable("DimArea"),
        area.addTableMeasures(
        "AreaID VARCHAR PRIMARY KEY DEFAULT 'vn-' || nextval('zzz') NOT NULL",  
        "Area VARCHAR NULL"),
        )
