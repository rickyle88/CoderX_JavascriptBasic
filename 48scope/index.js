// scope
// 1. Global scope
// 2. Local scope
// When a function is executed -> create a new scope
// a: global, b: local

var a = 1;
function random(){
    var b = Math.random();
    a = 3;
    console.log(b);
    console.log(a);

}

random();