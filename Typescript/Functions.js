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
