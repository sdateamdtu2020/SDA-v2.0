from DW.dimension_tables import *
from DW.fact_tables import *
from DW.stagingarea_tables import *
from DW.outerQuery import *

create_table_queries = [DimDistrict_Table_Create, DimCity_Table_Create, DimArea_Table_Create, DimYear_Table_Create, 
            ForestSourceDataStaging, ClimateSourceDataStaging, PopulationSourceDataStaging, IndustrySourceDataStaging,
            FactForest, FactClimate, FactPopulation, FactIndustry, UpdateQuery]

stagingAreaObjects = [forest, climate, population, industry ]

dimensions_insert_queries = [DimYear_table_insert, update_year_staging_tables, DimDistrict_table_insert, DimCity_table_insert, DimArea_table_insert
    , insert_fact_tables]

