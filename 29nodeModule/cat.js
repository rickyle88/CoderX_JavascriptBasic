function Cat(){
    this.stomach = [];
}

Cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
    mouse.die();
}

// 1 js => 1 node module
module.exports = Cat;