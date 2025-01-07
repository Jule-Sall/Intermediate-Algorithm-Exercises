// checks if an array is ordered in ascending order
function isOrdered(array){
    let temp = array[0];
    for(let i = 1; i < array.length; i++){
        if(temp < array[i])
            temp = array[i];
        else
            return false;
    }
    return true;
}

// this function sort an array using 
// the quicksort algorithm (the divide and conquer strategy)
function sort(array){
   
    if(isOrdered(array))
        return array;

    // pick a pivot
    const middle = Math.floor(array.length / 2);
    const pivot = array[middle];
    
    // divide the array into left sub-array and 
    // right sub-array based on the pivot
    let leftSubArray = [];
    let rightSubArray = [];
    let merge = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] < pivot){
            leftSubArray.push(array[i]);
        }
        else if(array[i] > pivot){
            rightSubArray.push(array[i]);
        }
    }
    leftSubArray.push(pivot); // add the pivot at the end of the left sub-array
    leftSubArray = sort(leftSubArray);
    rightSubArray = sort(rightSubArray);

    // return the merge of the left sub-array with the right sub-array
    return [...leftSubArray, ...rightSubArray];
}

