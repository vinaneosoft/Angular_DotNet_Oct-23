var names = ['seema', 'meena', 'sonal', 'aboli', 'amol', 'baban'];
//array mutable? : yes
// how to sort string array
names.sort();
console.log(names);
var salaries = [49000, 78000, 67000, 45000, 23000, 45000];
salaries.sort(function (n1, n2) { return n1 - n2; });
console.log(salaries);
