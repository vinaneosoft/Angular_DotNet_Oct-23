// Consider following array
const salaries = [56000, 98000, 67000, 45000, 56000, 34000, 67000, 89000];
// display array elements using normal for and for of
// forEach method : internal looping
/* salaries.forEach((salary)=>
        {
            console.log(salary);
        })
 */
salaries.forEach(salary => console.log(salary));
salaries.forEach((salary, i) => console.log(salary + " " + i));
function add(num1, num2) {
    console.log(num1 + num2);
}
add(78, 56);
const add2 = function (num1, num2) {
    console.log(num1 + num2);
};
add2(67, 8);
const add3 = (num1, num2) => console.log(num1 + num2);
add3(45, 67);
const cubeFun = num => num * num * num; // automatically returned
console.log(cubeFun(3));
// Consider following array
const salaryarray = [56000, 98000, 67000, 45000, 56000, 34000, 67000, 89000];
// store salaries greater than 60000 in new array and display new array
// implement using ur own logic 
// output [98000,67000,67000,89000]
let filteredArray = [];
for (let salary of salaryarray) {
    if (salary > 60000)
        filteredArray.push(salary);
}
console.log(filteredArray);
// filter method
const array2 = salaryarray.filter(salary => salary > 60000);
console.log(array2);
// Consider following array
const salaryarray2 = [56000, 98000, 67000, 45000, 56000, 34000, 67000, 89000];
// store first salary greater than 60000 in a variable and display it
// implement using ur own logic 
let filtered = 0;
for (let salary of salaryarray) {
    if (salary > 60000) {
        filtered = salary;
        break;
    }
}
console.log(filtered);
// find method
let filtval = salaryarray2.find(sal => sal > 60000);
console.log(filtval);
// Consider following array
const salaryarray3 = [56000, 98000, 67000, 45000, 56000, 34000, 67000, 89000];
// increment every salary of this array by 5000, store new salaries in new array. 
//display new array
// use own logic
let mappedArray = [];
for (let salary of salaryarray) {
    mappedArray.push(salary + 5000);
}
console.log(mappedArray);
// map method
const maparray = salaryarray3.map(salary => salary + 5000);
console.log(maparray);
// Consider following array
const salaryarray4 = [56000, 98000, 67000, 45000, 56000, 34000, 67000, 89000];
// make sum of array elements. display sum
// use own logic
// reduce method
const total = salaryarray4.reduce((sum, sal) => sum + sal);
// initial value of sum=1st element of array // 56000
// intial value of sal=2nd element of array //98000
console.log(total);
const total2 = salaryarray4.reduce((sum, sal) => sum + sal, 1000);
// initial value of sum=1000
// intial value of sal=1st element of array //56000
console.log(total2);
