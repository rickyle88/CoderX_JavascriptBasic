var today = new Date();

console.log(today);

// 
// Wed Mar 11 2020 23:26:05 GMT-0700 (Pacific Daylight Time) {}

var mouse = {
    weight: 0.2,
    getWeight: function(){
        return this.weight;
    }
};

// constructor function 
function Mouse(color,weight){
    this.type = 'mouse';
    this.color = color;
    this.weight = weight;
}

// create object from constructor function
var mouse1 = new Mouse('white',0.2);   //Mouse {type: "mouse"}
var mouse2 = new Mouse('black',0.5);
console.log(mouse1);
console.log(mouse2);


var tom = {
    name: 'Tom',
    stomach: [],
    eat: function(mouse){
        this.stomach.push(mouse);
        return this;
    }
}

var m1 = {name: 'm1'};
var m2 = {name: 'm2'};
var m3 = {name: 'm3'};

tom.eat(m1).eat(m2).eat(m3);    //method chaining
console.log(tom);

// Object {name: "Tom", stomach: Array(3), eat: }

// constructor function 
function M(name){
    this.name = name;
}

let m11 = new M('m1');
let m22 = new M('m2');
let m33 = new M('m3');


var t1 = {
    name: 'Tom',
    stomach: [],
    eat: function(mouse){
        this.stomach.push(mouse);
        return this;
    }
}

t1.eat(m11).eat(m22).eat(m33);    //method chaining
console.log(t1);


// Output
// [object Object] {
//     eat: function(mouse){
//           this.stomach.push(mouse);
//           return this;
//       },
//     name: "Tom",
//     stomach: [[object Object] {
//     name: "m1"
//   }, [object Object] {
//     name: "m2"
//   }, [object Object] {
//     name: "m3"
//   }]
//   }


