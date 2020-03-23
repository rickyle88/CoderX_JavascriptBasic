// Always execute function after certain time 
// var i = 0;
// var intervalId = setInterval(function(){
//     ++i;
//     console.log(i);
//     if(i === 5){
//         clearInterval(intervalId);
//     }
// },1000);

// Write a function that count from 1 to 10
// return a promise

function countFrom(a, b) {
    // b = b + 1;
    return new Promise(function (resolve, rejected) {
        if (isNaN(a) || isNaN(b)) {
            rejected('Must be a number');
        } else if (a > b) {
            rejected('Error');
        }
        else {
            let intervalId = setInterval(function () {
                console.log(a);
                a++;
                if (a > b) {
                    clearInterval(intervalId);
                    resolve(a);
                }
            }, 1000);
        }

    })
}

countFrom(1, 5)
    .then(function (data) {
        console.log('Done');
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    })