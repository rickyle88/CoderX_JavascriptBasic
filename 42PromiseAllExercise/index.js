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

Promise.all([
    axiosGetWebContent('https://jsonplaceholder.typicode.com/todos/1'),
    axiosGetWebContent('https://jsonplaceholder.typicode.com/todos/2'),
]).then(function(result){
    console.log(result[0].data);
    console.log(result[1].data);
}).catch(function(err){
    console.log(err);
})