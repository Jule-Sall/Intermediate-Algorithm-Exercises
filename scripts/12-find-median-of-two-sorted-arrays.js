// This function finds the median of an array
function findTheMedian(nums1, nums2){
    // merge the two arrays
    const nums = [...nums1, ...nums2].sort((a,b)=> a - b);

    // initialize median to 0
    let median = 0;

    if((nums.length) % 2 != 0){ // is odd
        // set median to the value at the middle position
        const middle = (nums.length + 1) / 2;
        median = nums[middle - 1];
    }
    else{ 
        // set median to the average of nums1 and nums2
        let total = 0;    
        nums.forEach(num=>{
            total = total + num;
        });
        const average = total / (nums.length);
        median = average;
    }
    return median;
}
