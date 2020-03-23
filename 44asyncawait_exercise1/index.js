var fs = require('fs');
var axios = require('axios');

// fs.readFile(
//   './data.json',
//   { encoding: 'utf8' },
//   function (err, data) {
//     console.log('Data loaded from disk', data);

//     axios.get('https://jsonplaceholder.typicode.com/todos/1')
//       .then(function (res) {
//         console.log('Data downloaded from url', res.data);
//       });
//   }
// );

/**
 * Sử dụng async await kết hợp với Promise để viết lại đoạn code trên. Gợi ý: Viết lại 1 async function làm 2 việc trên và chạy thử
 */


function readfilePromise(file) {
    return new Promise(function (resolve, rejected) {
        fs.readFile(file, { encoding: 'UTF8' }, function (err, data) {
            if (err) {
                rejected(err);
            } else {
                resolve(data);
            }
        })
    })
}

function getDataFromURL(url){
    return axios.get(url);
}


async function load(){
    var task1 = await readfilePromise('./song1.txt');
    var task2 = await getDataFromURL('https://jsonplaceholder.typicode.com/todos/1');

    return [task1, task2];
}

load().then(function(values){
    for(let v of values){
        console.log(v);
    }
    console.log(values.length);
    console.log(values);
})
