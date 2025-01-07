/**
 * Rotates the elements of an array to the left by a given factor.
 * @param {Array} array - The array to rotate.
 * @param {number} factor - The number of positions to rotate the array.
 * @returns {Array} - The rotated array.
 */
function rotateLeft(array, factor) {
    for (let i = 0; i < factor; i++) {
        const firstElement = array.shift();
        array.push(firstElement);
    }
    return array;
}

/**
 * Calculates the factorial of a given number.
 * @param {number} n - The number to calculate the factorial for.
 * @returns {number} - The factorial of the number.
 */
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

/**
 * Generates permutations of a given length from an array of permutations.
 * @param {number} length - The length of the permutations to generate.
 * @param {Array} permutations - The array of permutations to generate from.
 * @returns {Array} - The new array of generated permutations.
 */
function generatePermutations(length, permutations) {
    // Calculate the estimated number of permutations for each permutation
    const quotient = factorial(length) / length;
    const estimatedPermutations = factorial(length) / quotient;
    let newPermutations = [];

    permutations.forEach(permutation => {
        let leftSubArray = [];
        let rightSubArray = [];
        const size = permutation.length;

        // Split the permutation into left and right sub-arrays
        for (let i = 0; i < size; i++) {
            if (i < size - length) {
                leftSubArray.push(permutation[i]);
            } else {
                rightSubArray.push(permutation[i]);
            }
        }

        // Generate new permutations by rotating the right sub-array
        for (let i = 0; i < estimatedPermutations; i++) {
            const rotatedRightSubArray = rotateLeft([...rightSubArray], i);
            newPermutations.push([...leftSubArray, ...rotatedRightSubArray]);
        }
    });

    return newPermutations;
}

function getPermutations(inputString){
    
   let permutations = [inputString];
   let i = 1;
   while(i <= permutations[0].length){
    permutations = generatePermutations(i, permutations);
    i++;  
   }
   document.getElementById('permutations-display').style.fontWeight = "bold";
   document.getElementById('permutations-display').innerText = permutations.join(',  ');
  
}

