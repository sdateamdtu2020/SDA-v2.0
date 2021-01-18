# Scientific Research : Smart Dashboard Application

## Date: Aug 2020 - Present

# English:

### Introduction

- Scientific Research about Linked Data & RDF Data Cube & Data Warehouse
- Apply multi-dimensional data cubes to synthesize, analyze, filter, and visualize data in the environment (climate, population, industry,...) of Vietnam

### Progress & Result of Project

To 31-Dec-2020, SDA are provide & visualize data cubes on the following elements of each province in Vietnam by year (2012-2019):

- Climate: Temperature, Humidity, Rainfall
- Population
- Industry
- Forest: Forest Cover Area, Afforestation

### Context Diagram:

<img src="./Context-diagram-new.png" alt="context-diagram" />

Now, SDA divided into 3 main modules:

- Data Source > ETL
- OLAP
- Viz & AI

## Folder Structure of version 2.0

```
/modules:
  /client:
  /server:
  /crawlers:
  /data_wranglers:

```

- `modules`:
- `client`:
- `server`:
- `crawlers`:
- `data_wranglers`:

# Vietnamese:

## Giới thiệu về SDA

- Nghiên cứu công nghệ dữ liệu Linked Data và RDF Data Cube và nền tảng Data Warehouse (kho dữ liệu).
- Ứng dụng công nghệ Khối dữ liệu nhiều chiều vào việc tổng hợp, phân tích, lọc và trực quan hóa dữ liệu về môi trường (khí hậu, dân số, nền công nghiệp,...) của Việt Nam.

## Tiến độ và kết quả dự án

Tính đến ngày 31-12-2020, SDA cung cấp và trực quan hoá các khối dữ liệu về các yếu tố sau của từng tỉnh thành tại Việt Nam theo năm (2012-2019):

- Khí hậu: Nhiệt độ, độ ẩm, lượng mưa.
- Dân số
- Chỉ số sản xuất công nghiệp
- Tài nguyên rừng: Độ che phủ rừng, Diện tích trồng rừng.

## Cấu trúc dự án hiện tại

<img src="./Context-diagram-new.png" alt="context-diagram" />

Hiện tại SDA được chia thành 3 modules chính để các team có thể phân chia phát triển song song với nhau:

- Data Sources > ETL : Tìm nguồn dữ lieu, làm sạch dữ lieu, sau đó đưa vào cơ sở dữ lieu(Warehouses)
- OLAP: Phân tích, lọc, chuyển dữ lieu thành các khối dữ lieu có nhiều ciều.
- Dashboard: trực quan hóa dữ liệu dưới dạng các biểu đồ cột, biểu đồ đường và dạng bản đồ, người dùng chỉ cần nối khối dữ liệu được lựa chọn với các cửa sổ thực hiện thao tác trực quan hóa dữ liệu dưới dạng biểu đồ hoặc bản đồ được liệt kê ở thanh công cụ bên trái của giao diện chính

## Cấu trúc thư mục version 2.0

```
/modules:
  /client:
  /server:
  /crawlers:
  /data_wranglers:

```

- `modules`: chứa toàn bộ mã nguồn cuả dự án, được chia theo từng modules
- `client`: mã nguồn cho website SDA
- `server`: mã nguồn cho webserver, xử lí API giữa client và database
- `crawlers`: mã nguồn quét dữ liệu
- `data_wranglers`: mã nguồn xử lí và làm sạch dữ liệu
