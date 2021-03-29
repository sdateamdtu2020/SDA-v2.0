from .Database import *

#staging areas
forest = Table()
ForestSourceDataStaging = forest.gather_Elements(forest.createTable("ForestSourceDataStaging"),
        forest.addTableMeasures(
        "Source_StagingID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL", 
        "Area VARCHAR NULL",
        "AreaID VARCHAR NULL",
        "City VARCHAR null",
        "CityID VARCHAR null",
        "District VARCHAR null",
        "DistrictID VARCHAR null",
        "TimeID int null",
        "Year int null",
        "Month INT null",
        "Quarter INT null",
        "Afforestation double precision null",
        "ForestCover double precision null"))


climate = Table()
ClimateSourceDataStaging = climate.gather_Elements(climate.createTable("ClimateSourceDataStaging"),
        climate.addTableMeasures(
        "Source_StagingID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL", 
        "Area VARCHAR null",
        "AreaID VARCHAR null",
        "City VARCHAR null",
        "CityID VARCHAR null",
        "District VARCHAR null",
        "DistrictID INT null",
        "TimeID INT null",
        "Year int null",
        "Month INT null",
        "Quarter INT null",
        "Humidity double precision null",
        "Rainfall double precision null",
        "Temperature double precision null"))

population = Table()
PopulationSourceDataStaging = population.gather_Elements(population.createTable("PopulationSourceDataStaging"),
        population.addTableMeasures(
        "Source_StagingID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL", 
        "Area VARCHAR null",
        "AreaID VARCHAR null",
        "City VARCHAR null",
        "CityID VARCHAR null",
        "District VARCHAR null",
        "DistrictID INT null",
        "TimeID INT null",
        "Year INT null",
        "Month INT null",
        "Quarter INT null",
        "Population double precision null"))


industry = Table()
IndustrySourceDataStaging = industry.gather_Elements(industry.createTable("IndustrySourceDataStaging"),
        industry.addTableMeasures(
        "Source_StagingID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL", 
        "Area VARCHAR null",
        "AreaID VARCHAR null",
        "City VARCHAR null",
        "CityID VARCHAR null",
        "District VARCHAR null",
        "DistrictID INT null",
        "TimeID int null",
        "Year INT null",
        "Month INT null",
        "Quarter INT null", 
        "Industry double precision null"))


