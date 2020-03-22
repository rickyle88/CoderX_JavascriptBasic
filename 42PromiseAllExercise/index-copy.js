/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */


let axios = require('axios');

function axiosGetWebContent(path){
    return new Promise(function(resolve, rejected){
        axios.get(path)
            .then(function(response){
                return resolve(response);
            })
            .catch(function(err){
                return rejected(err);
            });
    })
}

console.log('Start running');
Promise.all([
    axiosGetWebContent('https://jsonplaceholder.typicode.com/todos/1')
    .catch(function(err){
        if(err!= null){
            return;
        }
        throw err;
    }),
    axiosGetWebContent('https://jsonplaceholder.typicode.com/todos/2')
    .catch(function(err){
        if(err!= null){
            return;
        }
        throw err;
    }),
]).then(function(result){
    // console.log(result[0].data);
    // console.log(result[1].data);
    // for(let i of result){
    //     if(i.data === undefined){
    //         console.log("Undefined");
    //     }else{
    //         console.log(i.data);
    //     }
        
    // }
    console.log(result);
    console.log(result.length);
}).catch(function(err){
    console.log(err);
})