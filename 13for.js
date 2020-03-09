// Output from 0 -> 9
for(let i = 0; i < 10; i++){
    console.log(i);
}

/*
    1. i = 0
    2. 0 < 10 -> true
    3. console.log(i) => 0
    4. i++ => 0++ =>1
    5. 1 < 10 -> true
    6. console.log(i) -> 1
    ...
    console.log(i) - > 9
    i++ -> 9++ -> 10
    10 < 10 -> fale -> stop

*/


for(let i = 9; i>=0; i--){
    console.log(i);
}

var employees = [
    {name: 'Thinh', age: 28},
    {name: 'Hiroshi', age: 26},
    {name: 'Maria', age: 32}
];

// Display employee's name
for(let i = 0; i < employees.length; i++){
    console.log(employees[i]['name']);
    console.log(employees[i]['age']);
}