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

    # Gather all the element : tables, measures, and alter v.v..
    def gather_Elements(self, *gatherElements):
        for element in gatherElements:
            self.gatherElements += element + " "
        return self.gatherElements



    def set_tableName(self, tableName):
        self.tableName = tableName
        
    def get_tableName(self):
        return self.tableName

    def get_gatherElement(self):
        return self.gatherElements
        
    def get_attributes(self):
        return self.attributes

    
    





# load_dotenv()
# user = os.environ.get("user")
# password = os.environ.get("password")

# database = Database(user, password)

# print(user)
# print(password)
# print(database)

