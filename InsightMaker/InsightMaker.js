import { loadInsightMaker } from "simulation";
import { readFileSync } from 'node:fs';

// Function to select a variable by name
function byName(targetName) {
    return function(variable) {
      return variable.name === targetName;
    };
  }

// Load the model
const modelText = readFileSync('InsightMaker/models/CCmCC.InsightMaker', 'utf8');

// Output parameters
const outputParameters = [
    "CO2 Reduction Total",
    "Resources Total",
    "Health Total",
    "Political Stability Total",
    "Happiness Total"
]

// Function to generically simulate the model
async function simulateModelGeneric(inputParameters, outputParameters, modelText) {

    //Load the model
    let model = loadInsightMaker(modelText);

    //Set the input parameters
    for (const [key, value] of Object.entries(inputParameters)) {
        let variable = await model.getVariable(byName(key));
        variable.value = value;
    }

    //Get the output parameters
    let outputVariables = [];
    for (const outputParameter of outputParameters) {
        outputVariables.push(await model.getVariable(byName(outputParameter)));
    }

    //Simulate the model
    let results = model.simulate();

    //Return the results
    return results.table(outputVariables)

}

// Function to return the results
export async function simulateResults(inputParameters) {

    return await simulateModelGeneric(inputParameters, outputParameters, modelText);
}