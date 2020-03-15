var math = {
    add: function (a, b) {
        return a + b;
    },
    multiply: function(a,b){
        return a*b;
    },
    sum: function(arr){
        return arr.reduce(function(a,v){
            return a+v;
        },0)
    }
};

module.exports = math;