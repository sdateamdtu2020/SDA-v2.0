# Scientific Research : EDSDA - Expert-driven Smart Dashboard Application

## Date: Mar 2021 - Jun 2021

### Introduction

- Scientific Research about Linked Data & RDF Data Cube & Data Warehouse
- Automate data processing which help the experts of every fields can insert their data sources and visualize, integrate them with related multidimensional data cubes by completely automate method.

### Context Diagram:

<img src="./assets/context-diagram.png" alt="context-diagram" width="800" />

#### Process Details

1. **Data Lake:**

- Collect from environment open data platforms of the governments and NGO organizations.
- User imported data sources.
- Use web crawling techniques to crawl data from related environment websites.
- Data Format : CSV, JSON, XML.

2. **Application Server**

- Check for the changes of the data lake when the user imports new data sources.
- Handle Data Lake Exceptions if any errors occur.
- Trigger the Data Lake to Staging Area loading process.

3. **Automate ETL (Extract, Transform, Load ):**

- **Extract:** In this step, we extract structured data after restructuring the raw data from the data lake. Mainly in this step, we focus on exacting data correctly from the structured data from the data lake.

- **Transform:** Based on the business’s constraints we have to transform the data to compatible with our process to handle the data for displaying on the dashboard. Getting exacted data, transform the data, and ready to load into the DW.

- **Load:** Loading data into the target data warehouse database is the last step of the ETL process. We load all the data we have transformed into the stating areas of DW and based on the data we have loaded into staging areas we used to load the data from the staging areas to dimension tables, and fact tables.
- **Perform automatic ETL:** Performing automatic ETL using tools for automating exacting data, transforming data, and loading data to DW. We use the available platform for scheduling to perform ETL at a specific time in a day. In addition, for performing ETL automatically we also build a data pipeline to make the data flow as we wanted.

4. **Automatic DW2RDF Engine:**

- Using RML.io with our custom features, it can generate RDF Data cubes automatically when users import new data sources to the data warehouse.
- Suitable with all data sources with a general mapping method.

5. **OLAP:** We store the data of the data warehouse as OLAP cubes. And then, for better query performance, data binding, and scalability, in addition to information transparency, we will automate converting OLAP cubes into RDF Data Cubes.
6. **Dashboard:** the user can drag any data cubes that appear as items on the sidebar and drop them onto the main content board, then connect between them and use the operator such as statistics merge, geo merge to build a new data cube that matches the user requirement.
7. **Viz & AI:** This step will perform the data cube which was created by the user with the form they want. It can be a map, a column chart, a line chart, or a pie chart.

### Progress Project

<img src="./assets/edsda-project-timeline.png" alt="project-timeline" width="600"/>

#### Tasks

| NUMBER | TASK TITLE                                               |
| ------ | -------------------------------------------------------- |
| 1      | Preparation                                              |
| 2      | Data Modeling                                            |
| 3      | Physical Warehouse Design                                |
| 4      | Initiate Dynamical Data Warehouse                        |
| 5      | Finding Data Sources                                     |
| 6      | Data processing                                          |
| 7      | ETL Process Validating                                   |
| 8      | Automate ETL Setting                                     |
| 9      | Expanding database                                       |
| 10     | Crawl data                                               |
| 11     | Building Data Cubes Importing method                     |
| 12     | Building additional features                             |
| 13     | Common RDF Data Cubes Structure Designing                |
| 14     | Setting up Automate DW to RDF Process Tool & Environment |
| 15     | Implementing Automate DW2RDF Process                     |
| 16     | Setting up RDF Data Cubes Storing & SPARQL Endpoint      |
| 17     | Validating RDF Data Cubes                                |
| 18     | Building SPARLQL_Rest API                                |
| 19     | Building UI                                              |
| 20     | Testing                                                  |
| 21     | Integrate                                                |
| 22     | Deploy                                                   |
| 23     | Release                                                  |

### Folder Structure: updating

```
/modules:
  /client:
  /server:
  /data_crawling:

```

- `modules`:
- `client`:
- `server`:
- `data_crawling`:

## Members:

| Avatar                                                   | Name                | Role                                              | Contact                    |
| -------------------------------------------------------- | ------------------- | ------------------------------------------------- | -------------------------- |
| <img src="./assets/avatar-members/hoa.png" width="50"/>  | Vo Van Hoa          | **Team Leader**, DevOps, Back-end, RDF Data Cubes | hoavo1490@gmail.com        |
| <img src="./assets/avatar-members/tin.png" width="50"/>  | Pham Van Tin        | **Secretary**, Front-end, UI/UX Design , DevOps   | tinphamvan123@gmail.com    |
| <img src="./assets/avatar-members/dong.png" width="50"/> | Ky Huu Dong         | Database, Crawl                                   | kyhuudong@gmail.com        |
| <img src="./assets/avatar-members/kieu.png" width="50"/> | Tran Thi Thanh Kieu | Tester, Front-end                                 | thanhkieutran391@gmail.com |

## Contributing:

Contributions are very welcome and wanted.<br>
To submit your custom pull request, please make sure you read our CONTRIBUTING guidelines.

**Before submitting a new pull request, please make sure:**

- You have updated the package.json version and reported your changes into the CHANGELOG file
- make sure you've added the documentation of your changes.
