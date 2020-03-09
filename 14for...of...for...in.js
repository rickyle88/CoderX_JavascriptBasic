// 1. for...of: iterate over the values in an iterable, like an array for example:
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

for(let employee of employees){
    console.log(employee.name,employee['age']);
}


// 2. for...in: iterate over the properties of an object (the object keys):
var myDog = {
    weight: 5, 
    name: 'Dan',
    age: 1,
    bark: function(){   //anonymous function
        console.log('Bark, my name is ', this.name);
    },
    eat: function(bone){
        this.weight = this.weight + bone.weight;
        return this;
    }
}

for(let key in myDog){
    console.log(key, myDog[key]);
    
}