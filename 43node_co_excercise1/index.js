var axios = require('axios');
var co = require('co');

/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
var urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typfdficode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5'
];

function load(url) {
    return new Promise(function (resolve, rejected) {
        axios.get(url)
            .then(function (data) {
                resolve(data);
            })
            .catch(function (err) {
                rejected(err);
            });
    })
}

// Cách 1: Sử dụng vòng lặp for
// co(function* (){
//     let result = [];
//     for(let url of urls){
//         result.push(yield load(url).catch(function(err){
//             if(err){
//                 return;
//             }
//         }));
//     }
//     return result;
//     // var web1 = yield load('https://jsonplaceholder.typicode.com/todos/1');
//     // var web2 = yield load('https://jsonplaceholder.typicode.com/todos/2');
//     // return [web1, web2];
// }).then(function(values){
//     for(let v of values){
//         if(v===undefined){
//             console.log(v);
//         }else{
//             console.log(v.data);
//         }
        
//     }
// }).catch(function(err){
//     console.log(err);
// })

// Cách 2: Sử dụng array.map
// Gợi ý: Có thể yield 1 array các Promise
var loadData = co.wrap(function* (urls){
    var values = yield urls.map(function(url){
        return load(url).catch(function(err){
            if(err){
                return;
            }
        });
    })
    return values;
})

loadData(urls)
    .then(function(values){
        for(let v of values){
            if(v===undefined){
                console.log(v);
            }else{
                console.log(v.data);
            }
            
        }
    })
    .catch(function(err){
        console.log(err);
    })