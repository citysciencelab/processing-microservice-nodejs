![Processing Microservice_Banner](https://github.com/citysciencelab/processing-microservice-nodejs/assets/61881523/04bd3afa-d35f-4ddd-bc29-d21e15e74980)


# Processing Microservice - node.js
This repository contains the code for a processing microservice in node.js. The microservice connects with an [Urban Model Server](https://github.com/citysciencelab/urban-model-server) via a Websocket connection. In this way, different simulation models can be hosted on different isolated microservices with their own programming language, packages and versions. 

## Configuration
All of the necessary configuration is done in the [config.js](./config.js) file. There are two mandatory configurations:
1. ```URL``` of the Urban Model Server
2. ```PROCESS_METADATA``` that register the process in accordance with the [OGC API Processes](https://docs.ogc.org/is/18-062r2/18-062r2.html) standard with the Urban Model Server

## Extensions
