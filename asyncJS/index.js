// console.log("Start");

// function foo(){
//     console.log("Hello");
// }
// foo();

// console.log("End");

console.log("Start");

function sayHello(){
    console.log("Hello");   
}
// . when we execute the setTimeout function, it is bound to call the cb function after 5 secs. since it is a non blocking function, execution moves ahead and starts executing other task. this task moves to web API
setTimeout(sayHello, 5000);

console.log("End");