// This function uses the Sieve of Eratosthenes to find 
// all prime numbers under n
function findPrimeNumbers(numbers, primeNumber){
    // check if the square of primeNumber is higher than last number (max)
    // base case
    if(Math.pow(primeNumber, 2) > numbers[numbers.length - 1]){
        return numbers;
    }
    // remove all multipliers of primeNumber
    numbers = numbers.filter(number=>{
        if(number % primeNumber === 0 && number != primeNumber)
            return false;
        return true;
    });

    // recursively find prime numbers
    primeNumber = numbers[numbers.indexOf(primeNumber) + 1]; // find the next number    
    const primeNumbers = findPrimeNumbers(numbers, primeNumber);

    return primeNumbers;
}


// This function generates numbers under n starting from 2
function generateNumbers(n){
    const numbers = [];
    for(let i = 2; i < n; i++){
        numbers.push(i);
    }
    return numbers;
}