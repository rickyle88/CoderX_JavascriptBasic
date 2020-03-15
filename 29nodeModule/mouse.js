// Node module
// Constructor function
function Mouse(color){
    this.color = color;
    this.dead = false;
}

Mouse.prototype.die = function(){
    this.dead = true;
}

// 1 js => 1 node module
module.exports = Mouse;