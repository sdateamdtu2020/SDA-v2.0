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



DimDistrict_table_insert = ("""
        INSERT INTO DimDistrict (district)
        SELECT DISTINCT district From climatesourcedatastaging a
        WHERE NOT EXISTS (SELECT district FROM DimDistrict WHERE a.district = district)
        ORDER BY district ASC;

        INSERT INTO DimDistrict (district)
        SELECT DISTINCT district From forestsourcedatastaging a
        WHERE NOT EXISTS (SELECT district FROM DimDistrict WHERE a.district = district)
        ORDER BY district ASC;
        
        INSERT INTO DimDistrict (district)
        SELECT DISTINCT district From industrysourcedatastaging a
        WHERE NOT EXISTS (SELECT district FROM DimDistrict WHERE a.district = district)
        ORDER BY district ASC;

        INSERT INTO DimDistrict (district)
        SELECT DISTINCT district From populationsourcedatastaging a
        WHERE NOT EXISTS (SELECT district FROM DimDistrict WHERE a.district = district)
        ORDER BY district ASC;

        UPDATE climatesourcedatastaging AS c
        SET DistrictID = d.DistrictID
        FROM DimDistrict AS d
        WHERE c.District = d.District;

        UPDATE forestsourcedatastaging AS c
        SET DistrictID = d.DistrictID
        FROM DimDistrict AS d
        WHERE c.District = d.District;

        UPDATE industrysourcedatastaging AS c
        SET DistrictID = d.DistrictID
        FROM DimDistrict AS d
        WHERE c.District = d.District;

        UPDATE populationsourcedatastaging AS c
        SET DistrictID = d.DistrictID
        FROM DimDistrict AS d
        WHERE c.District = d.District;

    """)


DimCity_table_insert = ("""
        INSERT INTO DimCity (city, districtID)
        SELECT DISTINCT city, districtID From climatesourcedatastaging a
        WHERE NOT EXISTS (SELECT city, districtID FROM DimCity WHERE a.city = city AND a.districtID = districtID)
        ORDER BY city ASC;

        INSERT INTO DimCity (city, districtID)
        SELECT DISTINCT city, districtID From forestsourcedatastaging a
        WHERE NOT EXISTS (SELECT city, districtID FROM DimCity WHERE a.city = city AND a.districtID = districtID)
        ORDER BY city ASC;

        INSERT INTO DimCity (city, districtID)
        SELECT DISTINCT city, districtID From industrysourcedatastaging a
        WHERE NOT EXISTS (SELECT city, districtID FROM DimCity WHERE a.city = city AND a.districtID = districtID)
        ORDER BY city ASC;

        INSERT INTO DimCity (city, districtID)
        SELECT DISTINCT city, districtID From populationsourcedatastaging a
        WHERE NOT EXISTS (SELECT city, districtID FROM DimCity WHERE a.city = city AND a.districtID = districtID)
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


DimArea_table_insert = ("""
        INSERT INTO DimArea (area, cityID)
        SELECT DISTINCT area, cityID From climatesourcedatastaging a
        WHERE NOT EXISTS (SELECT area, cityID FROM DimArea WHERE a.area = area AND a.cityID = cityID)
        ORDER BY area ASC;

        INSERT INTO DimArea (area, cityID)
        SELECT DISTINCT area, cityID From forestsourcedatastaging a
        WHERE NOT EXISTS (SELECT area, cityID FROM DimArea WHERE a.area = area AND a.cityID = cityID)
        ORDER BY area ASC;

        INSERT INTO DimArea (area, cityID)
        SELECT DISTINCT area, cityID From industrysourcedatastaging a
        WHERE NOT EXISTS (SELECT area, cityID FROM DimArea WHERE a.area = area AND a.cityID = cityID)
        ORDER BY area ASC;

        INSERT INTO DimArea (area, cityID)
        SELECT DISTINCT area, cityID From populationsourcedatastaging a
        WHERE NOT EXISTS (SELECT area, cityID FROM DimArea WHERE a.area = area AND a.cityID = cityID)
        ORDER BY area ASC;

        UPDATE climatesourcedatastaging AS c
        SET areaID = d.areaID
        FROM DimArea AS d
        WHERE c.area = d.area;

        UPDATE forestsourcedatastaging AS c
        SET areaID = d.areaID
        FROM DimArea AS d
        WHERE c.area = d.area;
        
        UPDATE industrysourcedatastaging AS c
        SET areaID = d.areaID
        FROM DimArea AS d
        WHERE c.area = d.area;

        UPDATE populationsourcedatastaging AS c
        SET areaID = d.areaID
        FROM DimArea AS d
        WHERE c.area = d.area;

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




