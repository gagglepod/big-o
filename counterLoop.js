
function counterLoop(n) {
    for (let i = 1; i < 11; i++) {
        let num = n * i;
        console.log(n + " x " + i + " = " + num);
    }    
}

console.log(counterLoop(2));
console.log(counterLoop(3));