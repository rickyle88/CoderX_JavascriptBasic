var readlineSync = require('readline-sync');
var fs = require('fs');



// Step 1: Load data from data.json and save to customers array => loadData();
var customers = [];
function loadData() {
    var content = fs.readFileSync('./data.json', { encoding: 'UTF8' });
    // Convert string to object
    customers = JSON.parse(content);
}

// Step 2: Write showMenu() function
function showMenu() {
    console.log('1. Create new customer');
    console.log('2. Update customer');
    console.log('3. Delete customer');
    console.log('4. Search customer');
    console.log('5. Show customer');
    var option = readlineSync.question('Select your option: ');
    switch (option) {
        case '1':

            break;
        case '2':

            break;
        case '3':

            break;
        case '4':

            break;
        case '5':

            break;

        default:
            console.log('Wrong option');
            showMenu();
            break;
    }
}

// Step 0: Create frame

function main() {
    // Load data from data.json and save to customers array
    loadData();

    console.log(customers);

    // Display menu for users
    showMenu();
}

main();