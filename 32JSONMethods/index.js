// Excercise
// 1. Show all students
// Save to ./data.json => fs.readFileSync, JSON.parse
// 2. Create a new student - array 
// Your name
// Your age
// Your class
// save data to array
// 3. Save and exit
// save to ./data.json and exit

// Read write file (NodeJS built in methods)
let fs = require('fs');

// Read data from user's input
let readlineSync = require('readline-sync');

// Create new object
let data = {};

// Create new array inside object
data.students = [];

function returnFileContent(filename) {
    // Check that the file exists locally
    let content = null;
    if (!fs.existsSync(filename)) {
        console.log("File not found");      
    }

    // The file *does* exist
    else {
        // Read the file and do anything you want
        content = fs.readFileSync(filename,  { encoding: 'UTF8' });       
    }
    return content;
}


while (true) {
    let options = readlineSync.question('What is your option: ');

    let content = returnFileContent('./data.json');

    // let content = fs.readFileSync('./data.json', { encoding: 'UTF8' });
    if (options === "1") {
        // Show all students
        // Read file
        console.log(content);

    } else if (options === "2") {
        // Read file


        // Add new student
        // Create new student object
        let student = {};
        student.name = readlineSync.question('Name: ');
        student.gender = readlineSync.question('Gender ');
        student.age = readlineSync.question('Age ');

        // console.log(student);

        // Read file
        // let content = fs.readFileSync('./data.json', { encoding: 'UTF8' });

        // Convert string to object
        let result = JSON.parse(content);
        if(result === null){
            result = {};
            result.students=[];
        }

        // Push student to data.students array
        result.students.push(student);
        // console.log(data);

        // Write data.students array to ./data.json
        fs.writeFileSync('./data.json', JSON.stringify(result));
        console.log('Done step 2');
    } else if (options === "3") {
        break;
    }
}

