import { io } from "socket.io-client";
import { PROCESS_METADATA, URL } from "./config.js";

import { simulateResults } from "./InsightMaker/InsightMaker.js"; 


// Connect to the server
const socket = io(URL);


// Function to handle errors
const handleError = (error) => {
    console.log("error", error);
}


// Handle socket events
socket.on("connect", () => {
    console.log("connected");
    socket.emit("register", PROCESS_METADATA);
    }
);

socket.on("disconnect", () => {
    console.log("disconnected");
    }
);

socket.on("execute", async (data) => {

    // Check if there is data
    if (!data) {
        console.log("No data provided - Job " + data["jobID"] + " aborted");
        return;
    }

    // Job ID
    const jobID = data["jobID"];

    console.log("Job execution started (Job ID ", jobID, ")");

    // Input parameters
    let inputParameters = {};

    // Iterate over the input parameters and rename the keys
    for (const [key, value] of Object.entries(data)) {

        // Skip the jobID
        if (key === "jobID") {
            continue;
        }

        try {
            const title = PROCESS_METADATA["inputs"][key]["title"];
            inputParameters[title] = value;
        }
        catch (error) {
            continue;
        }
    }

    //console.log("simulation", data);
    let results = await simulateResults(inputParameters);
    
    const response = {
        "jobID": jobID,
        "processID": PROCESS_METADATA["id"],
        "results": results,
        "mimetype": "application/json"
    }

    socket.emit("simulation_results", response);

    console.log("Job execution finished (Job ID ", jobID, ")");
    }
);

socket.on("registration_success", (data) => {
    console.log("registration_success", data);
    }
);




