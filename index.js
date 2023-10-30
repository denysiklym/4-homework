const readline = require('readline');

function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Довжина масиву простих чисел: ", (arrayLength) => {
    rl.question("Початкове число для відліку: ", (startNumber) => {
        const primesArray = [];

        while (primesArray.length < arrayLength) {
            if (isPrime(startNumber)) primesArray.push(startNumber);
            startNumber++;
        }

        console.log("Масив простих чисел:", primesArray);
        rl.close();
    });
});