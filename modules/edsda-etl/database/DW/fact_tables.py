from .Database import *



forest = Table()
FactForest = forest.gather_Elements(forest.createTable("FactForest"),
            forest.addTableMeasures(
            "ForestID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL",
            "districtID VARCHAR null",
            "YearID int null",
            "afforestation double precision null",
            "sumOfForestAcreage double precision null",
            "ratioForestCover double precision null"
            ),
            forest.createAlter(
                "CONSTRAINT fk_districtid_forest FOREIGN KEY (districtid) REFERENCES DimDistrict(districtID)",
                "CONSTRAINT fk_yearid_forest FOREIGN KEY (YearID) REFERENCES DimYear(YearID)"
            ))

climate = Table()
FactClimate = climate.gather_Elements(climate.createTable("FactClimate"),
            climate.addTableMeasures(
            "ClimateID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL",
            "districtID VARCHAR null",
            "YearID int null",
            "Humidity double precision null",
            "Rainfall double precision null",
            "Temperature double precision null"),
            climate.createAlter(
                "CONSTRAINT fk_districtid_climate FOREIGN KEY (districtID) REFERENCES Dimdistrict(districtID)",
                "CONSTRAINT fk_yearid_climate FOREIGN KEY (YearID) REFERENCES DimYear(YearID)"
            ))


population = Table()
FactPopulation = population.gather_Elements(population.createTable("FactPopulation"),
            population.addTableMeasures(
            "PopulationID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL",
            "districtID VARCHAR null",
            "YearID int null",
            "Population double precision null"),
            population.createAlter(
                "CONSTRAINT fk_districtid_population FOREIGN KEY (districtID) REFERENCES Dimdistrict(districtID)",
                "CONSTRAINT fk_yearid_population FOREIGN KEY (YearID) REFERENCES DimYear(YearID)"
            ))

industry = Table()
FactIndustry = industry.gather_Elements(industry.createTable("FactIndustry"),
            industry.addTableMeasures(
            "IndustryID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL",
            "districtID VARCHAR null",
            "YearID int null",
            "Industry double precision null"),
            industry.createAlter(
                "CONSTRAINT fk_districtid_industry FOREIGN KEY (districtID) REFERENCES Dimdistrict(districtID)",
                "CONSTRAINT fk_yearid_industry FOREIGN KEY (yearID) REFERENCES DimYear(YearID)"
            ))


