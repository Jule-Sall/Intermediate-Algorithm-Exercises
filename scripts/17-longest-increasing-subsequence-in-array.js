function getIncreasingSubsequence(array, startIndex) {
    const subsequence = [];
    for (let i = startIndex; i < array.length; i++) {
        if (subsequence.length === 0 || array[i] > subsequence[subsequence.length - 1]) {
            subsequence.push(array[i]);
        }
    }
    return subsequence;
}

function findLongestSubsequence(subsequences) {
    const lengths = subsequences.map(subsequence => subsequence.length);
    const maxLength = Math.max(...lengths);

    for (let i = 0; i < subsequences.length; i++) {
        if (subsequences[i].length === maxLength) {
            return subsequences[i];
        }
    }
}

function findLongestIncreasingSubsequence(array) {
    const subsequences = [];
    for (let i = 0; i < array.length; i++) {
        subsequences.push(getIncreasingSubsequence(array, i));
    }
    const longestSubsequence = findLongestSubsequence(subsequences);
    console.log(longestSubsequence);
}
