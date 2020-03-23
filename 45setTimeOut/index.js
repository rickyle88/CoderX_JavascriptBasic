// wait for ms secs before execute function
// setTimeout(fn, ms);




var a = function(){
    console.log('done');
}

function b(){
    console.log('done');
}


console.log('Start');
var timeOutId = setTimeout(function done(){
    console.log('Finish');
},2000);
console.log('Done');

// During running time out set time out, to break it
clearTimeout(timeOutId);

// Start
// Done



