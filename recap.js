// function cut (){
// var k=5;
// let j=7;
// if(true);
// var l=10;
// console.log(k);
// console.log(j);
// console.log(l);
// }
// cut();

// let x=0;
// console.log(x++);
// console.log(++x);

// let y=30;
// if (true){
//     let y=40;
//     console.log(y);
// }
// // console.log(y);

// let greet=(name)=>"Hello, "+name+"! Welcome to JavaScript functions.";
// console.log(greet("alishia"));

// let a=5;
// function test(){
   
//     console.log(a);
//      let a=10;
// }
// test();
// console.log(a); 

// console.log(5+2+"7"); // Output: 77
// // console.log("5"+2+7); // Output: 527
// // console.log("5"+(2+7)); // Output: 59


// const value=10;
// console.log(value>5?"yes":"no");


// let great=55;
// let output=great>90?"A":great>80?"B":great>70?"C":great>60?"D":"F";
// console.log(output);    

// let data=7;
// while(data>0){
//     if(data<=5){
//         data--;
//         continue;   
//     }
//     console.log(data);
//     data--;
// }   


let count=0;
outerloop:
for (let i=0;i<3;i++){
    let j=5;
    while(j>0){
        if(i===1) {
            break outerloop;
        }
        if(j%2===0){
            j--;
            continue;
        }
count+=j;
j--;
    }
}
console.log(count);











