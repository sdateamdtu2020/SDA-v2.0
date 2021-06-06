#DROP TABLES
#Dimension
DimCity_Table_Drop = "DROP TABLE IF EXISTS DimCity"
DimYear_Table_Drop = "DROP TABLE IF EXISTS DimYear"


#Staging area
ForestSourceDataStaging_Table_Drop = "DROP TABLE IF EXISTS ForestSourceDataStaging"
ClimateSourceDataStaging_Table_Drop = "DROP TABLE IF EXISTS ClimateSourceDataStaging"
PopulationSourceDataStaging_Table_Drop = "DROP TABLE IF EXISTS PopulationSourceDataStaging"
IndustrySourceDataStaging_Table_Drop = "DROP TABLE IF EXISTS IndustrySourceDataStaging"

#FACT TABLES
FactForest_Table_Drop = "DROP TABLE IF EXISTS FactForest"
FactClimate_Table_Drop = "DROP TABLE IF EXISTS FactClimate"
FactPopulation_Table_Drop = "DROP TABLE IF EXISTS FactPopulation"
FactIndustry_Table_Drop = "DROP TABLE IF EXISTS FactIndustry"


#Update after create Database
UpdateQuery = ("""
                ALTER TABLE FactForest  ADD COLUMN description text NULL;
                ALTER TABLE FactClimate ADD COLUMN description text NULL;
                ALTER TABLE FactPopulation  ADD COLUMN description text NULL;
                ALTER TABLE FactIndustry  ADD COLUMN description text NULL;
    """)


#DIM TABLES INSERT
DimYear_table_insert = ("""
        INSERT INTO DimYear (Year)
        SELECT DISTINCT Year From climatesourcedatastaging a
        WHERE NOT EXISTS (SELECT Year FROM DimYear WHERE a.Year = Year)
        ORDER BY Year ASC;
        INSERT INTO DimYear (Year)
        SELECT DISTINCT Year From forestsourcedatastaging a
        WHERE NOT EXISTS (SELECT Year FROM DimYear WHERE a.Year = Year)
        ORDER BY Year ASC;
        INSERT INTO DimYear (Year)
        SELECT DISTINCT Year From industrysourcedatastaging a
        WHERE NOT EXISTS (SELECT Year FROM DimYear WHERE a.Year = Year)
        ORDER BY Year ASC;
        INSERT INTO DimYear (Year)
        SELECT DISTINCT Year From populationsourcedatastaging a
        WHERE NOT EXISTS (SELECT Year FROM DimYear WHERE a.Year = Year)
        ORDER BY Year ASC;
        """)


update_year_staging_tables = ("""
        UPDATE climatesourcedatastaging AS c
        SET YearID = d.YearID
        FROM DimYear AS d
        WHERE c.Year = d.Year;
        
        UPDATE forestsourcedatastaging AS c
        SET YearID = d.YearID
        FROM DimYear AS d
        WHERE c.Year = d.Year;
        
    
        UPDATE industrysourcedatastaging AS c
        SET YearID = d.YearID
        FROM DimYear AS d
        WHERE c.Year = d.Year;
        
        UPDATE populationsourcedatastaging AS c
        SET YearID = d.YearID
        FROM DimYear AS d
        WHERE c.Year = d.Year;
        
    """)



DimArea_table_insert = ("""
        INSERT INTO dimarea (area)
        SELECT DISTINCT area From climatesourcedatastaging a
        WHERE NOT EXISTS (SELECT area FROM DimArea WHERE a.area = area)
        ORDER BY area ASC;

        INSERT INTO dimarea (area)
        SELECT DISTINCT area From forestsourcedatastaging a
        WHERE NOT EXISTS (SELECT area FROM DimArea WHERE a.area = area)
        ORDER BY area ASC;
        
        INSERT INTO dimarea (area)
        SELECT DISTINCT area From industrysourcedatastaging a
        WHERE NOT EXISTS (SELECT area FROM DimArea WHERE a.area = area)
        ORDER BY area ASC;

        INSERT INTO dimarea (area)
        SELECT DISTINCT area From populationsourcedatastaging a
        WHERE NOT EXISTS (SELECT area FROM DimArea WHERE a.area = area)
        ORDER BY area ASC;

        UPDATE climatesourcedatastaging AS c
        SET AreaId = da.AreaId
        FROM DimArea AS da
        WHERE c.area = da.area;

        UPDATE forestsourcedatastaging AS c
        SET AreaId = da.AreaId
        FROM DimArea AS da
        WHERE c.area = da.area;

        UPDATE industrysourcedatastaging AS c
        SET AreaId = da.AreaId
        FROM DimArea AS da
        WHERE c.area = da.area;

        UPDATE populationsourcedatastaging AS c
        SET AreaId = da.AreaId
        FROM DimArea AS da
        WHERE c.area = da.area;

    """)


DimCity_table_insert = ("""
        INSERT INTO DimCity (city, areaid)
        SELECT DISTINCT city, areaid From climatesourcedatastaging a
        WHERE NOT EXISTS (SELECT city, areaid FROM DimCity WHERE a.city = city AND a.areaID = areaID)
        ORDER BY city ASC;

        INSERT INTO DimCity (city, areaid)
        SELECT DISTINCT city, areaid From forestsourcedatastaging a
        WHERE NOT EXISTS (SELECT city, areaid FROM DimCity WHERE a.city = city AND a.areaID = areaID)
        ORDER BY city ASC;

        INSERT INTO DimCity (city, areaid)
        SELECT DISTINCT city, areaid From industrysourcedatastaging a
        WHERE NOT EXISTS (SELECT city, areaid FROM DimCity WHERE a.city = city AND a.areaID = areaID)
        ORDER BY city ASC;

        INSERT INTO DimCity (city, areaid)
        SELECT DISTINCT city, areaid From populationsourcedatastaging a
        WHERE NOT EXISTS (SELECT city, areaid FROM DimCity WHERE a.city = city AND a.areaID = areaID)
        ORDER BY city ASC;

        UPDATE climatesourcedatastaging AS c
        SET CityID = d.CityID
        FROM DimCity AS d
        WHERE c.city = d.city;

        UPDATE forestsourcedatastaging AS c
        SET CityID = d.CityID
        FROM DimCity AS d
        WHERE c.city = d.city;

        UPDATE industrysourcedatastaging AS c
        SET CityID = d.CityID
        FROM DimCity AS d
        WHERE c.city = d.city;

        UPDATE populationsourcedatastaging AS c
        SET CityID = d.CityID
        FROM DimCity AS d
        WHERE c.city = d.city;


    """)


DimDistrict_table_insert = ("""
        INSERT INTO DimDistrict (district, cityID)
        SELECT DISTINCT district, cityID From climatesourcedatastaging a
        WHERE NOT EXISTS (SELECT district, cityID FROM DimDistrict WHERE a.district = district AND a.cityID = cityID)
        ORDER BY district ASC;

        INSERT INTO DimDistrict (district, cityID)
        SELECT DISTINCT district, cityID From forestsourcedatastaging a
        WHERE NOT EXISTS (SELECT district, cityID FROM DimDistrict WHERE a.district = district AND a.cityID = cityID)
        ORDER BY district ASC;

        INSERT INTO DimDistrict (district, cityID)
        SELECT DISTINCT district, cityID From industrysourcedatastaging a
        WHERE NOT EXISTS (SELECT district, cityID FROM DimDistrict WHERE a.district = district AND a.cityID = cityID)
        ORDER BY district ASC;

        INSERT INTO DimDistrict (district, cityID)
        SELECT DISTINCT district, cityID From populationsourcedatastaging a
        WHERE NOT EXISTS (SELECT district, cityID FROM DimDistrict WHERE a.district = district AND a.cityID = cityID)
        ORDER BY district ASC;

        UPDATE climatesourcedatastaging AS c
        SET districtID = d.districtID
        FROM DimDistrict AS d
        WHERE c.district = d.district;

        UPDATE forestsourcedatastaging AS c
        SET districtID = d.districtID
        FROM DimDistrict AS d
        WHERE c.district = d.district;
        
        UPDATE industrysourcedatastaging AS c
        SET districtID = d.districtID
        FROM DimDistrict AS d
        WHERE c.district = d.district;

        UPDATE populationsourcedatastaging AS c
        SET districtID = d.districtID
        FROM DimDistrict AS d
        WHERE c.district = d.district;

    """)


insert_fact_tables = ("""
        INSERT INTO FactClimate(AreaID , YearID, Humidity, Rainfall, Temperature)
        SELECT AreaId, YearID, Humidity, Rainfall, Temperature FROM ClimateSourceDataStaging;

        INSERT INTO FactForest(AreaID , YearID, Afforestation, SumOfForestAcreage, RatioForestCover)
        SELECT AreaId, YearID, Afforestation, SumOfForestAcreage, RatioForestCover FROM ForestSourceDataStaging;

        INSERT INTO FactIndustry(AreaID , YearID, Industry)
        SELECT AreaId, YearID, Industry FROM IndustrySourceDataStaging;

        INSERT INTO FactPopulation(AreaID , YearID, Population)
        SELECT AreaId, YearID, Population FROM PopulationSourceDataStaging;
    """)




