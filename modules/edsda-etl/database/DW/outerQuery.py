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

