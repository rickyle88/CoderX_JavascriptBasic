// coffe machine
let coffeMachine = {
    makeCoffee: function(onFinish){
        console.log('Making coffe...');
        onFinish();
    }
}

let beep = function(){
    console.log('Tit bip');
}

// Callback
coffeMachine.makeCoffee(beep);

// Callback with para is a function 
coffeMachine.makeCoffee(function(){
    console.log('Done');
})