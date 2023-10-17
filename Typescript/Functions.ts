// Consider following array
const salaries=[56000,98000,67000,45000,56000,34000,67000,89000];
// display array elements using normal for and for of
// forEach method : internal looping

/* salaries.forEach((salary)=>
        { 
            console.log(salary);
        })
 */


salaries.forEach(salary=>console.log(salary));


salaries.forEach((salary,i)=>console.log(salary+" "+i));

function add(num1,num2){
    console.log(num1+num2);
}
add(78,56)
const add2=function(num1,num2){
    console.log(num1+num2);
}
add2(67,8);

const add3=(num1,num2)=>console.log(num1+num2);

add3(45,67);

const cubeFun=num=>num*num*num;  // automatically returned

console.log(cubeFun(3));
