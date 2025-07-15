//file system -> used to play with files on your machine. read, write , move , copy , delete . 
const fs = require("fs");

// console.log("Before");

// let data = fs.readFileSync("f1.txt");
// console.log('This is File 1 data -> ' + data); 

// console.log("After");

//this is an example of synchronous execution, it blocks the execution thread until the file is read completely. 


//asyncgronous file reading example

// console.log("Before");

// fs.readFile("f1.txt", (err, data) => {
//     if(err){
//         console.error("An error ocurred ", err);
//         return;
//     }
//     console.log('This is File 1 data -> ' + data); 
// });

// console.log("After");


//reading 3 files asynchronously in concurrent execution

// console.log("Before");

// fs.readFile("f1.txt", (err, data) => {
//     if(err){
//         console.error("An error ocurred ", err);
//         return;
//     }
//     console.log('This is File 1 data -> ' + data); 
// });

// fs.readFile("f2.txt", (err, data) => {
//     if(err){
//         console.error("An error ocurred ", err);
//         return;
//     }
//     console.log('This is File 2 data -> ' + data); 
// });

// fs.readFile("f3.txt", (err, data) => {
//     if(err){
//         console.error("An error ocurred ", err);
//         return;
//     }
//     console.log('This is File 3 data -> ' + data); 
// });

// console.log("After");


// reading 3 files asynchronoulsy in serial execution

console.log("Before");
function cb1(err, data){
    if(err){
        console.error("An error ocurred ", err);
        return;
    }
    console.log('This is File 1 data -> ' + data); 
    fs.readFile("f2.txt", cb2);
}

function cb2(err, data){
    if(err){
        console.error("An error ocurred ", err);
        return;
    }
    console.log('This is File 2 data -> ' + data); 
    fs.readFile("f3.txt", cb3);
}

function cb3(err, data){
    if(err){
        console.error("An error ocurred ", err);
        return;
    }
    console.log('This is File 3 data -> ' + data); 
}
fs.readFile("f1.txt", cb1);

console.log("After");