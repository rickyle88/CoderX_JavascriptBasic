// constructor function 
function Mouse(color, weight){
    this.type = 'mouse';
    this.color = color;
    this.weight = weight;

    // this.sleep = function(){
    //     console.log('zzz');
    // }
    // jerry.sleep === mickey.sleep ===> false

}

// create sleep function in Mouse prototype
// prototype: shared between new object
// Save memory
Mouse.prototype.sleep = function(){
    console.log('zzz');
    console.log('Color: ' + this.color);
}

var jerry = new Mouse('orange', 20);

console.log(jerry);
jerry.sleep();

var mickey = new Mouse('white', 10);
mickey.sleep();

// That's mean jerry.sleep === mickey.sleep ===> true

// Best practices
