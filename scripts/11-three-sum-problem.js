
// This function find three values whose sum equals to target
function findThreeSum(array, target){
    const threeSum = [];
    for(let i = 0; i < array.length; i++){
        const sum = array[i] + array[i + 1] + array[i + 2];
        if(sum === target){
            threeSum.push(array[i]);
            threeSum.push(array[i + 1]);
            threeSum.push(array[i + 2]);
            console.log(threeSum);
            return threeSum;
        }
    }
    return threeSum;
}
