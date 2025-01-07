function findIntersections(arr1, arr2){
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        throw new Error('Input must be an array');
    }
    const intersections = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                intersections.push(arr1[i]);
            }
        }
    }

    return intersections;
}

console.log(findIntersections([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); // [3, 4, 5]