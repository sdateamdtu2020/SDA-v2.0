from .Database import *



forest = Table()
FactForest = forest.gather_Elements(forest.createTable("FactForest"),
            forest.addTableMeasures(
            "ForestID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL",
            "AreaID VARCHAR null",
            "TimeID int null",
            "Afforestation double precision null",
            "ForestCover double precision null"),
            forest.createAlter(
                "CONSTRAINT fk_areaid_forest FOREIGN KEY (AreaID) REFERENCES DimArea(AreaID)",
                "CONSTRAINT fk_timeid_forest FOREIGN KEY (TimeID) REFERENCES DimTime(TimeID)"
            ))

climate = Table()
FactClimate = climate.gather_Elements(climate.createTable("FactClimate"),
            climate.addTableMeasures(
            "ClimateID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL",
            "AreaID VARCHAR null",
            "TimeID int null",
            "Humidity double precision null",
            "Rainfall double precision null",
            "Temperature double precision null"),
            climate.createAlter(
                "CONSTRAINT fk_areaid_climate FOREIGN KEY (AreaID) REFERENCES DimArea(AreaID)",
                "CONSTRAINT fk_timeid_climate FOREIGN KEY (TimeID) REFERENCES DimTime(TimeID)"
            ))


population = Table()
FactPopulation = population.gather_Elements(population.createTable("FactPopulation"),
            population.addTableMeasures(
            "PopulationID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL",
            "AreaID VARCHAR null",
            "TimeID int null",
            "Population double precision null"),
            population.createAlter(
                "CONSTRAINT fk_areaid_population FOREIGN KEY (AreaID) REFERENCES DimArea(AreaID)",
                "CONSTRAINT fk_timeid_population FOREIGN KEY (TimeID) REFERENCES DimTime(TimeID)"
            ))

industry = Table()
FactIndustry = industry.gather_Elements(industry.createTable("FactIndustry"),
            industry.addTableMeasures(
            "IndustryID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL",
            "AreaID VARCHAR null",
            "TimeID int null",
            "Industry double precision null"),
            industry.createAlter(
                "CONSTRAINT fk_areaid_industry FOREIGN KEY (areaID) REFERENCES DimArea(AreaID)",
                "CONSTRAINT fk_timeid_industry FOREIGN KEY (TimeID) REFERENCES DimTime(TimeID)"
            ))


