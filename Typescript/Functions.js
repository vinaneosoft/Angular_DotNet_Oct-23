// Consider following array
var salaries = [56000, 98000, 67000, 45000, 56000, 34000, 67000, 89000];
// display array elements using normal for and for of
// forEach method : internal looping
/* salaries.forEach((salary)=>
        {
            console.log(salary);
        })
 */
salaries.forEach(function (salary) { return console.log(salary); });
salaries.forEach(function (salary, i) { return console.log(salary + " " + i); });
function add(num1, num2) {
    console.log(num1 + num2);
}
add(78, 56);
var add2 = function (num1, num2) {
    console.log(num1 + num2);
};
add2(67, 8);
var add3 = function (num1, num2) { return console.log(num1 + num2); };
add3(45, 67);
var cubeFun = function (num) { return num * num * num; }; // automatically returned
console.log(cubeFun(3));
// Consider following array
var salaryarray = [56000, 98000, 67000, 45000, 56000, 34000, 67000, 89000];
// store salaries greater than 60000 in new array and display new array
// implement using ur own logic 
// output [98000,67000,67000,89000]
var filteredArray = [];
for (var _i = 0, salaryarray_1 = salaryarray; _i < salaryarray_1.length; _i++) {
    var salary = salaryarray_1[_i];
    if (salary > 60000)
        filteredArray.push(salary);
}
console.log(filteredArray);
// filter method
var array2 = salaryarray.filter(function (salary) { return salary > 60000; });
console.log(array2);
// Consider following array
var salaryarray2 = [56000, 98000, 67000, 45000, 56000, 34000, 67000, 89000];
// store first salary greater than 60000 in a variable and display it
// implement using ur own logic 
var filtered = 0;
for (var _a = 0, salaryarray_2 = salaryarray; _a < salaryarray_2.length; _a++) {
    var salary = salaryarray_2[_a];
    if (salary > 60000) {
        filtered = salary;
        break;
    }
}
console.log(filtered);
// find method
var filtval = salaryarray2.find(function (sal) { return sal > 60000; });
console.log(filtval);
// Consider following array
var salaryarray3 = [56000, 98000, 67000, 45000, 56000, 34000, 67000, 89000];
// increment every salary of this array by 5000, store new salaries in new array. 
//display new array
// use own logic
var mappedArray = [];
for (var _b = 0, salaryarray_3 = salaryarray; _b < salaryarray_3.length; _b++) {
    var salary = salaryarray_3[_b];
    mappedArray.push(salary + 5000);
}
console.log(mappedArray);
// map method
var maparray = salaryarray3.map(function (salary) { return salary + 5000; });
console.log(maparray);
