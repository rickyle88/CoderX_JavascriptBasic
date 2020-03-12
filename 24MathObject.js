function circleArea(r){
    return r * r * Math.PI;
}


// Math.ceil(9.2)   => 10
// Math.floor(9.7)  => 9

Math.max(10,20,-1);
Math.min(10,20,-1);

Math.random();      // 0...1
console.log(Math.round(Math.random() * 255));

function tossCoin(){
    var random = Math.random();
    return random > 0.5;
}

console.log(tossCoin());

function rollADice(min, max){
    // return 1,2,3,4,5,6
    return Math.round(Math.random()*(max-min+1));
}

console.log(rollADice(1,6));
