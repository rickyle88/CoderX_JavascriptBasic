var myDog = {
    weight: 5, 
    name: 'Dan',
    age: 1,
    bark: function(){   //anonymous function
        console.log('Bark, my name is ', this.name);
    },
    eat: function(bone){
        this.weight = this.weight + bone.weight;
        return this;
    }
}

var bone = {weight: 0.5};

console.log('Before eating: ', myDog.weight);

myDog.eat(bone);

console.log('After eating: ', myDog.weight);

// console.log(myDog.name);
// myDog.bark();


// function bark(){
//     console.log('ut it');
// }

// bark();

// Excercise
/**
 * Khai báo biến rectangle là 1 object gồm có các property:
 * - width: chiều rộng
 * - height: chiều dài
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều dài
 * - getArea: trả về diện tích
 */
 
var rectangle = {
    width: 5,
    height: 10,
    getWidth: function(){
        return this.width;
    },
    getHeight: function(){
        return this.height;
    },
    getArea: function(){
        // return this.getHeight() * this.getWidth();
        return this.width * this.height;
    }
  }