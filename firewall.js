// const prompt=require("prompt-sync")();
// let iplocation=String(prompt("what's your IP Location? (Internal/External)"));
// let encryptionkey=Number(prompt("what's your Encryption Key? "));
// let adminoverride=String(prompt("do you have admin override? (yes/no)")).toLowerCase();
// let threatlevel=Number(prompt("what's the current threat level? (1-10) "));

// if (iplocation==="External" && adminoverride==="no") {
// if ( threatlevel > 5) {
//     console.log("High Risk Threat");
// }
// else if (encryptionkey!=8800){
//     console.log("Handshake Failed:Dropped");
    
// }

// }
// else{
//     console.log("Access Granted");
    
// }

// if (iplocation==="Internal" || adminoverride==="yes" && threatlevel < 9) {
// if(encryptionkey===8800){
//     console.log("Full Access Granted");}
// else{
//     console.log("Internal Error:Key Missmach");
    
// }

// }
// if (threatlevel == 10 && ! adminoverride) {
//     console.log("Self-Destruct Protocol");

// }
// else{
//     console.log("System Stable");
// }

// const prompt = require("prompt-sync")({ sigint: true });

// let iplocation = prompt("What's your IP Location? (internal/external): ").toLowerCase();
// let encryptionkey = 8800;
// let adminoverride = prompt("Do you have admin override? (yes/no): ").toLowerCase();
// let threatlevel = Number(prompt("What's the current threat level? (1-10): "));

// // 🔥 Highest priority check
// if (threatlevel === 10 && adminoverride === "no") {
//     console.log("💥 Self-Destruct Protocol Activated");
// }

// // 🚫 External access checks
// else if (iplocation === "external" && adminoverride === "no") {
//     if (threatlevel > 5) {
//         console.log("🚨 High Risk Threat Detected");
//     } else {
//         console.log("❌ Access Denied: External Threat");
//     }
// }

// // 🔐 Encryption check
// else if (encryptionkey !== 8800) {
//     console.log("❌ Handshake Failed: Dropped");
// }

// // ✅ Trusted access
// else if ((iplocation === "internal" || adminoverride === "yes") && threatlevel < 9) {
//     console.log("✅ Full Access Granted");
// }

// // 🟢 Default safe state
// else {
//     console.log("🟢 System Stable");
// }


const prompt = require("prompt-sync")({ sigint: true });


let iplocation = prompt("What's your IP Location? (internal/external): ").toLowerCase();
let adminoverride = prompt("Do you have admin override? (yes/no): ").toLowerCase();
let threatlevel=Number(prompt("What's the current threat level? (1-10): "));

let encryptionkey = Number(prompt("What's your Encryption Key? "));

if (threatlevel === 10 && adminoverride === "no") {
    console.log("💥 Self-Destruct Protocol Activated");
}


else if (iplocation === "external" && adminoverride === "no") {

if (threatlevel > 5) {
    console.log("🚨 High Risk Threat Detected");
}
else{
 if(encryptionkey !== 8800) {
console.log("❌ Handshake Failed: Dropped");
        }
    else{
        console.log("✅ Access Granted");
    }}}
    else if ((iplocation === "internal" || adminoverride === "yes" && threatlevel < 9   )) {
if (encryptionkey === 8800 ){
console.log("Full Access Granted");

}
else{    console.log("Internal Error: Key Mismatch");
}
    }