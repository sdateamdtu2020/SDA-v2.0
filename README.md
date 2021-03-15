# Scientific Research : EDSDA - Expert-driven Smart Dashboard Application

## Date: Mar 2021 - Jun 2021

### Introduction

- Scientific Research about Linked Data & RDF Data Cube & Data Warehouse
- Automate data processing which help the experts of every fields can insert their data sources and visualize, integrate them with related multidimensional data cubes by completely automate method.

### Context Diagram:

<img src="./assets/context-diagram.png" alt="context-diagram" width="600" />

#### Process Details

1. **Data Sources:**

- Collect from environment open data platforms of the governments and NGO organizations.
- User imported data sources.
- Use web crawling techniques to crawl data from related environment websites.
- Data Format : CSV, JSON, XML.

2. **Automate ETL (Extract, Transform, Load ):**

- **Extract:** In this step, data is extracted from the source system into the staging area. Transformations if any are done in the staging area so that performance of source system is not degraded. Also, if corrupted data is copied directly from the source into the data warehouse database, rollback will be a challenge. Staging area gives an opportunity to validate extracted data before it moves into the Data warehouse.
- **Transform:** Data extracted from the source server is the raw data and not usable in its original form. Therefore it needs to be cleansed, mapped, and transformed. In fact, this is the key step where the ETL process adds value and changes data such that insightful reports can be generated. In the transformation step, we filter, clean, split and integrate the data to match with the system requirements and data warehouse architecture.
- **Load:** Loading data into the target data warehouse database is the last step of the ETL process.

3. **OLAP:** We store the data of the data warehouse as OLAP cubes. And then, for better query performance, data binding, and scalability, in addition to information transparency, we will automate converting OLAP cubes into RDF Data Cubes.
4. **Dashboard:** the user can drag any data cubes that appear as items on the sidebar and drop them onto the main content board, then connect between them and use the operator such as statistics merge, geo merge to build a new data cube that matches the user requirement.
5. **Viz & AI:** This step will perform the data cube which was created by the user with the form they want. It can be a map, a column chart, a line chart, or a pie chart.

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
| <img src="./assets/avatar-members/dong.png" width="50"/> | Ky Huu Dong         | Database                                          | kyhuudong@gmail.com        |
| <img src="./assets/avatar-members/kieu.png" width="50"/> | Tran Thi Thanh Kieu | Front-end, Tester                                 | thanhkieutran391@gmail.com |

## Contributing:

Contributions are very welcome and wanted.<br>
To submit your custom pull request, please make sure you read our CONTRIBUTING guidelines.

**Before submitting a new pull request, please make sure:**

- You have updated the package.json version and reported your changes into the CHANGELOG file
- make sure you've added the documentation of your changes.
