from ..DW.dimension_tables import *
from ..DW.fact_tables import *
from ..DW.stagingarea_tables import *
from ..DW.outerQuery import *

create_table_queries = [DimDistrict_Table_Create, DimCity_Table_Create, DimArea_Table_Create, DimTime_Table_Create, 
            ForestSourceDataStaging, ClimateSourceDataStaging, PopulationSourceDataStaging, IndustrySourceDataStaging,
            FactForest, FactClimate, FactPopulation, FactIndustry, UpdateQuery]


print(create_table_queries[0])