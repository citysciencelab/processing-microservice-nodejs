import { loadInsightMaker } from "simulation";
import { readFileSync } from 'node:fs';

import {CCMCC_OUTPUTS} from './models/CCmCC/Metadata.js';
import {RE3_OUTPUTS} from './models/RE3/Metadata.js';

// Function to select a variable by name
function byName(targetName) {
    return function(variable) {
      return variable.name === targetName;
    };
  }

// Load the model
const modelText = readFileSync('InsightMaker/models/RE3/Model.InsightMaker', 'utf8');

// Output parameters
const outputParameters = RE3_OUTPUTS

// Function to generically simulate the model
async function simulateModelGeneric(inputParameters, outputParameters, modelText) {

    //Load the model
    let model = loadInsightMaker(modelText);
    
    //Set the input parameters
    for (const [key, value] of Object.entries(inputParameters)) {

        try {
            let variable = await model.getVariable(byName(key));
            variable.value = value;
        } catch (error) {
            console.log("Error setting the input parameter " + key + " to " + value);
        }

    }

    //Get the output parameters
    let outputVariables = [];

    for (const [key, value] of Object.entries(outputParameters)) {
        try {
            if (value.type === "stock") {
                outputVariables.push(await model.getStock(byName(key)));
            } else if (value.type === "variable") {
                outputVariables.push(await model.getVariable(byName(key)));
            }

        } catch (error) {
            console.log("Error getting the output parameter " + key);
        }
    }

    //console.log(outputVariables);

    //Simulate the model
    let results = model.simulate();

    //Only output the results
    results = results.table(outputVariables)

    // This is where the results would be appended to the GeoJSON
    const hamburgGeojson = JSON.parse(readFileSync('InsightMaker/models/RE3/Hamburg.geojson', 'utf8'));
    hamburgGeojson.features.forEach(feature => {
        feature.properties.result = results
    });
    

    //Return the results
    return hamburgGeojson

}

// Function to return the results
export async function simulateResults(inputParameters) {

    return await simulateModelGeneric(inputParameters, outputParameters, modelText);
}