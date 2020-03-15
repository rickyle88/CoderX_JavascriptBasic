
let Mouse = require('./mouse');
let Cat = require('./cat');


var mickey = new Mouse('black');
var jerry = new Mouse('orange');

console.log(mickey);
console.log(jerry);

var tom = new Cat();
tom.eat(mickey);
tom.eat(jerry);
console.log(tom);

// Output
// Mouse { color: 'black', dead: false }
// Mouse { color: 'orange', dead: false }
// Cat {
//   stomach:
//    [ Mouse { color: 'black', dead: true },
//      Mouse { color: 'orange', dead: true } ] }