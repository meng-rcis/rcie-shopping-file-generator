# rcie-shopping-file-generator

### Command to process a file

- Open the terminal

- Go to the root directory where the file package.json is located

- Run the command `npm install`

- Run the command `npm start <datetime - yyyy-mm-dd_hh-mm-ss> <api-type>`

Example: `npm start 2019-01-01_12-00-00 5`

NOTE: api type is optional, if not specified, the default value is 'default'

### File Preparation

System metrics files (retrieved from Grafana) should be saved at ../rcie-system-metrics-data/<yyyy-mm-dd_hh-mm-ss> folder with the following file name:

- cpu.csv
- memory.csv
- network.csv
- response.csv
- tps.csv

or see at repo, https://github.com/nuttchai/rcie-system-metrics-data
