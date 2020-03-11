// syntax: array.sort(function(a,b){})
//     => return a sorted array

// if sort function 
//     return value < 0
//         a will come before b
//     return value > 0
//         a will come after b
//     return 0
//         a and b will stay unchanged

var numbers = [2,9,3,4,1];
// sort in ascending order

var ascendingNumbers = numbers.sort(function(a,b){
    // a=1, b=4 => case 1 because a-b = 1-4 < 0
    return a-b;
})

console.log(ascendingNumbers);

var descendingNumbers = numbers.sort(function(a,b){
    // a=1, b=4 => b=4 then a=1 => case 2 because b-a = 4-1 > 0
    return b-a;
})

console.log(descendingNumbers);

// Example 3:
var employees = [
    {name: 'Ti', age: 18},
    {name: 'Teo', age: 20},
    {name: 'Maria', age: 19}

];

console.log(employees);
// Sort by age , asc
var sortedEmployeesASC = employees.sort(function(a,b){
    // a = employess[1]
    // b = employees[2]
    // Expect: a comes before b, => case 1 => a-b<0
    return a.age - b.age;

})

console.log(sortedEmployeesASC);

// Sort by age , desc
var sortedEmployeesDESC = employees.sort(function(a,b){
    // a = employess[1]
    // b = employees[2]
    // Expect: a comes after b, => case 2 => a-b>0
    return b.age - a.age;

})

console.log(sortedEmployeesDESC);

// Note:
// sort string dùng localeCompare
var nameSort = products.sort(function(x,y){
   return (y.name).localeCompare(x.name);
})