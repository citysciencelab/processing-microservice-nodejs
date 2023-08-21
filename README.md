
![Processing Microservice_Banner](https://github.com/citysciencelab/processing-microservice-nodejs/assets/61881523/1aae43bf-e520-4550-9efa-4ca66eadd1f6)

# Processing Microservice - node.js
This repository contains the code for a processing microservice in node.js. The microservice connects with an [Urban Model Server](https://github.com/citysciencelab/urban-model-server) via a Websocket connection. In this way, different simulation models can be hosted on different isolated microservices with their own programming language, packages and versions. 

![Urban Model Server Architektur](https://github.com/citysciencelab/processing-microservice-nodejs/assets/61881523/7eb714ad-ae06-403e-b893-5fa064ad2406)

## Configuration
All of the necessary configuration is done in the [config.js](./config.js) file. There are two mandatory configurations:
1. ```URL``` of the Urban Model Server. ⚠️ Make sure that both the Urban Model Server and the Processing Microservice are part of the same Docker bridge network. The URL is supposed to point to this Network Gateway and the Port of the Urban Model Platform container. 
2. ```PROCESS_METADATA``` that registers the process with the Urban Model Server in accordance with the [OGC API Processes](https://docs.ogc.org/is/18-062r2/18-062r2.html) standard. 

## Extensions
Although one can use basically any algorithm to handle the input, do calculations and then return an output, there are multiple simulation packages written in node.js that one can leverage. Thus, multiple extensions come along with this processing microservice that one can use out of the box. The following extensions are currently available: 

### Insight Maker 
[Insight Maker](https://insightmaker.com/) is a simulation platform where one can collaboratively work on System Dynamics and Agent-based models. They provide an open-source [simulation package](https://github.com/scottfr/simulation) with which one can run Insight Maker models on a server. To simulate an Insight Maker model with the processing microservice, ```import { simulateResults } from "./InsightMaker/InsightMaker.js";``` in the ```server.js``` file. Download the Insight Maker model from the platform, save it in the ```InsightMaker/models```folder and adjust the output parameters, as well as import the correct model in the ```InsightMaker.js``` file. 


## Other Processing Microservices
So far, the only avaiable micorservice is in node.js. There are plans to provide processing microservices in Python and Java for the future. 
