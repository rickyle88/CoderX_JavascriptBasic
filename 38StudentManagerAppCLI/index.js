// Requirements
// - Show current student list
// - Add new students

// flow chart

// Menu
// 1. Show all students
// 2. Create a new student
// 3. Save and exit

var readlineSync = require('readline-sync');
var fs = require('fs');

// Create students array
var students = [];

function loadData(){
    var fileContent = fs.readFileSync('./data.json',{encoding:'UTF8'});
    students = JSON.parse(fileContent);
}

function showMenu() {
    console.log('1. Show all students');
    console.log('2. Create a new student');
    console.log('3. Save and Exit');

      // Wait for user's response.
      var option = readlineSync.question('> ');
      console.log(option);
      switch (option) {
          case '1':
              showStudents();
              showMenu();
              break;
          case '2':
              showCreateStudent();
              showMenu();
              break;
          case '3':
              saveAndExit();
              break;
          default:
              console.log('Wrong option');
              showMenu();
              break;
      }
}

function showStudents(){
    for(let student of students){
        console.log(student.name, student.age);
    }
}

function showCreateStudent(){
    // Wait for user's response.
    var name = readlineSync.question('Name ');
    var age = readlineSync.question('Age ');
    var student = {
        name: name,
        age: age
    }
    students.push(student);
}

function saveAndExit(){
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json',content);
}

function main() {
    // Step 1: Load data from data.json and save to students array
    loadData();  

    showMenu();
  
}

main();