const prompt = require("prompt-sync")({ sigint: true });

let coretemp = Number(prompt("What's the Core Temperature? (°C): "));
let pressure=Number(prompt("What's the Pressure? (atm): "));
let coolingrods=Number(prompt("How many Cooling Rods are active? (0-4): "));

if (coretemp >3000 || pressure >500){
    if (coolingrods >=8){
        console.log('Emergency Cooling Active: Core Stabilized.');   
}
else if (coolingrods > 3 && coolingrods < 8){
    console.log('Partial Meltdown:Evacuate Sector');
    
}
else{
    console.log('Total Containment Failure.');
    
}}

if (coretemp < 3000 && pressure < 500){
    if(coretemp <100 && pressure<10){
        console.log('Core Dormant: Low Energy Output.');
    }
    else{
        console.log('Optimal Fusion Reached');
}}