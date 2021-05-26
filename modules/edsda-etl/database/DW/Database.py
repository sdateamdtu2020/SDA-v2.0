from dotenv import load_dotenv
import os


class Database:

    def __init__(self, databaseName=""):
        self.databaseName = databaseName

    def createDatabase(self, databaseName=""):
        self.databaseName = databaseName
        return "CREATE DATABASE {} WITH ENCODING 'utf8' TEMPLATE template0".format(self.databaseName)


    def set_databaseName(self, databaseName):
        self.databaseName = databaseName

    def get_databaseName(self):
        return self.databaseName



class Table:

    def __init__(self, tableName="", attributes="", alter="", sequence="", gatherElements=""):
        self.tableName = tableName
        self.attributes = attributes
        self.alter = alter
        self.sequence = sequence
        self.gatherElements = gatherElements

    
    def createTable(self, tableName):
        self.tableName = tableName
        return "CREATE TABLE IF NOT EXISTS {} ".format(tableName)

    #Create the measures(columns for table)
    def addTableMeasures(self, *attributes):
        length = len(attributes)
        generatorBracket = ""
        generatorAttributes = []
        for i in range(0, length):
            generatorBracket += " %s, "
        #remove the character "," at the end of index
        bracketStr = generatorBracket[0:-2]
        bracketStr = "("+bracketStr+");"

        for attribute in attributes:
            generatorAttributes.append(attribute)
        # (attributes : ... varchar(20) , ... integer)
        self.attributes = bracketStr % tuple(generatorAttributes)
        return bracketStr % tuple(generatorAttributes)
        

    #Create sequence auto generate primary key
    def createSequence(self, variable):
        self.sequence = "CREATE SEQUENCE {}; SELECT setval('{}', 1000);".format(variable, variable)
        return self.sequence

    def createAlter(self, *actions):
        for action in actions:
            self.alter += "ALTER TABLE "+self.tableName+" ADD "+action+"; "
        return self.alter

    def createMultipleAlter(self, query):
        self.alter = query
        return self.alter

    # Gather all the element : tables, measures, and alter v.v..
    def gather_Elements(self, *gatherElements):
        for element in gatherElements:
            self.gatherElements += element + " "
        return self.gatherElements

    
    #Check the values is a dim or not
    def is_dim(self, values):
        dimensions = ['city', 'area', 'year']
        for dimension in dimensions:
            if values == dimension:
                return True
        return False

    #Get all dimensions form a list of column
    def get_dimensions(self, columns):
        result = []
        index = []
        for column in columns:
            if self.is_dim(column) == True:
                result.append(column)
                index.append(columns.index(column))
        return result, index

    #Get all measures form a list of column
    def get_meas(self, columns):
        result = []
        index = []
        for column in columns:
            if self.is_dim(column) == False:
                result.append(column)
                index.append(columns.index(column))
        return result, index

    
    def transfrom_data_table(self, dataTable):
        data = dataTable.copy()
        #Transfer float, str...
        for i in range(len(data)):
            if data[i].isnumeric() == True:
                pass
            else:
                data[i] = "'{}'".format(data[i])

        return data



    def insert(self, listColumns, dataTable):
        insert_query = "INSERT INTO {}".format(self.tableName)
        dimensions, indexes = self.get_dimensions(listColumns)
        data_stores = self.transfrom_data_table(dataTable)
        columns = ","
        columns = columns.join(listColumns)

        data = ","
        data = data.join(data_stores)
        
        condition = ""
        for i in range(len(dimensions)):
            condition += dimensions[i] + "=" + data_stores[indexes[i]] + " AND "
        
        insert_query = insert_query+ " (" + columns + ") " +"SELECT " + data + " WHERE NOT EXISTS (SELECT 1 FROM {} WHERE {}) ".format(self.tableName, condition[:-4])
        data_stores = [] 
        return insert_query


    def update(self, listColumns, dataTable):
        update_query = "UPDATE {} SET ".format(self.tableName)
        measures, indexesM = self.get_meas(listColumns)
        dimesions, indexesD = self.get_dimensions(listColumns)
        set_values = ""
        data_stores = self.transfrom_data_table(dataTable)

        for i in range(len(measures)):
            set_values += measures[i] + "=" + data_stores[indexesM[i]] + " , "

        conditions = ""
        for i in range(len(dimesions)):
            conditions += dimesions[i] + "=" + data_stores[indexesD[i]] + " AND " 
    
        update_query += set_values[:-2] + " WHERE " +  conditions[:-4]

        return update_query



    def set_tableName(self, tableName):
        self.tableName = tableName
        
    def get_tableName(self):
        return self.tableName

    def get_gatherElement(self):
        return self.gatherElements
        
    def get_attributes(self):
        return self.attributes

    


