// Synchronous vs Asynchronous
// Đồng bộ hay bất đồng bộ

var fs = require('fs');

// console.log('Start');
// let song1 = fs.readFileSync('./song1.txt',{encoding:'UTF8'});
// console.log(song1);
// let song2 = fs.readFileSync('./song2.txt',{encoding:'UTF8'});
// console.log(song2);

// console.log('End');


// Make coffee => 5 minutes
// Wear clothes
// Making bed


// Sync
// |---------------------|---------------------|-----------------|----->
// Make coffee      Make coffee done        Wear clothes done   Done
//                  Wear clothes            Make bed


// Async
// |---------------------|---------------------|-----------------|----->
// Make coffee      Wear clothes    Make bed    Make coffe done

console.log('Start');
fs.readFile('./song1.txt', {encoding:'UTF8'}, function(err, data){
    console.log(data);
;});

console.log('End');

// Async happens when 
// 1. Read/Write file (using FS)
// 2. Network request
