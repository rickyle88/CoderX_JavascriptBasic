let readlineSync = require('readline-sync');
let fs = require('fs');



// Step 1: Load data from data.json and save to customers array => loadData();
let customers = [];
function loadData() {
    let content = fs.readFileSync('./data.json', { encoding: 'UTF8' });
    // Convert string to object/array
    customers = JSON.parse(content);
}

// Step 1: Create new customer
function showCreateCustomer(){
    let newObjt = {};
    let name = readlineSync.question('Enter name: ');
    let nameNumber = readlineSync.question('Enter phone number: ');
    newObjt.name = name;
    newObjt.nameNumber = nameNumber;
    customers.push(newObjt);
}

// Step 4: Find customer
function findCustomer(){
    let input = readlineSync.question('1. Enter name 2. Input phone :');
    if(input === '1'){
        let name = readlineSync.question('Enter name to search: ');
        for(let i = 0; i<customers.length; i++){
            if (customers[i].name === name){
                console.log(customers[i].name, customers[i].nameNumber);
                return i;
            }
        }
    }else{
        let nameNumber = readlineSync.question('Enter phone number to search: ');
        for(let i = 0; i<customers.length; i++){
            if (customers[i].nameNumber === nameNumber){
                console.log(customers[i].name, customers[i].nameNumber);
                return i;
            }
        }
    }
}

// Step 2: Update customer
function showUpdateCustomer(){
    
    let index = findCustomer();
    let input = readlineSync.question('1. Enter name to update 2. Input phone to update :');
    if(input === '1'){
        let name = readlineSync.question('Enter new name to update: ');
        customers[index].name = name;
    }else{
        let nameNumber = readlineSync.question('Enter new phone number to update: ');
        customers[index].nameNumber = nameNumber;
    }
}

// Step 3: Delete customer
function deleteCustomer(){
    let index = findCustomer();
    customers.splice(index,1);
}

// Step 5: Show all customers - save and exit
function showCustomers(){
    for(let i of customers){
        console.log(i.name, i.nameNumber);
    }
}

// Step 6: Save and exit
function saveAndExit(){
    let content = JSON.stringify(customers);
    fs.writeFileSync('./data.json',content);
}


// Step 2: Write showMenu() function
function showMenu() {
    console.log('1. Create new customer');
    console.log('2. Update customer');
    console.log('3. Delete customer');
    console.log('4. Search customer');
    console.log('5. Show customer');
    console.log('6. Save and exit');
    let option = readlineSync.question('Select your option: ');
    switch (option) {
        case '1':
            showCreateCustomer();
            showMenu();
            break;
        case '2':
            showUpdateCustomer();
            showMenu();
            break;
        case '3':
            deleteCustomer();
            showMenu();
            break;
        case '4':
            searchCustomer();
            showMenu();
            break;
        case '5':
            showCustomers();
            showMenu();
            break;
        case '6':
            saveAndExit();
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

    // console.log(customers);

    // Display menu for users
    showMenu();
}

main();