

var v;
v=89;
v="hello"
v=true

let b;
const c=89;
// js:dynamically typed language
// ts: statically typed lang, strict typing

let area:string // type annotation
area="Airoli"

console.log(typeof area)
//area=6789; //Type 'number' is not assignable to type 'string'.


let salary: number;salary=78000;salary=89600.67;

let num; // any
num=78;
num="hhi";

let num2=7890;  // number
//num2="hello";

// type assertions

let companyName;
companyName="NEOSOFT"; // any

let lower=(<string>companyName).toLowerCase();
console.log(lower);
