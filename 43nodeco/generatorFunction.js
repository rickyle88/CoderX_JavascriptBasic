function* generateSequence(){
    yield 1;
    yield 2;
    return 3;
}

let generator = generateSequence();
let value1 = generator.next();

console.log(value1);

let valye