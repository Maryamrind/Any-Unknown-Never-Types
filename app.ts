// Type Any

let num:any;
// any data can be given
num = true;  //boolean//ok
num = 36;    //number//ok
num = "hey";  //string//ok
num = {};     //object//ok
num = [];     //array//ok
num = Math.random();  //random number//ok
num = null;       //null//ok
num = undefined;  //undefined//ok
num = () => {console.log("Hey again!")};    //function//ok

num() //calling the function

// Type Unknown //safe type
  //Example
let num1:unknown

num1 = true;  //boolean//ok 
num1 = 36;    //number//ok
num1 = "hey";  //string//ok
num1 = {};     //object//ok
num1 = [];     //array//ok
num1 = Math.random();  //random number//ok
num1 = null;       //null//ok
num1 = undefined;  //undefined//ok
num1 = () => {console.log("Hey again!")};    //function//ok

// num1()  //throw error
// let mynum:number = num1  //Error because no type can be assigned in type unknown.

//Example

// let val:unknown;

// let val1:unknown =val;       //ok
// let val2:any = val;         //ok
// let val3:string = val;       //throw error
// let val4:boolean =val;      //throw error
// let val5:number = val;       //throw error
// let val6:record<string,any> = val; //throw error
// let val7:any[]=val; //throw error
// let val8:(...args:string[])=> void = val; //throw error

  //NEVER
 
























