
// This function generates sub-strings given a string
function generateSubstrings(paramString) {
    // Initialize an array for storing sub-strings to an empty list
    const array = [];
    
    // Initialize a sub-string object
    let Substring = {text: [''], length: 0};

    // Forward
    for (let i = 0; i < paramString.length; i++) {
        // check if current character is in the sub-string text
        if (!Substring.text.includes(paramString[i])) {
            Substring.text.push(paramString[i]);
            Substring.length++;
        } else {
            array.push(Substring);
            Substring = {text: [paramString[i]], length: 1};
        }
    }
    array.push(Substring);

    // Generate backward substrings
    const backwardSubstrings = generateBackwardSubstrings(paramString);
    array.push(...backwardSubstrings);

    return array;
}

// This function generates backward sub-strings given a string
function generateBackwardSubstrings(paramString) {
    const array = [];
    let Substring = {text: [''], length: 0};

    for (let i = paramString.length - 1; i >= 0; i--) {
        // check if current character is in the sub-string text
        if (!Substring.text.includes(paramString[i])) {
            Substring.text.push(paramString[i]);
            Substring.length++;
        } else {
            Substring.text = Substring.text.reverse();
            array.push(Substring);
            Substring = {text: [paramString[i]], length: 1};
        }
    }
    array.push(Substring);

    return array;
}

function findLongestSubstring(substrings){
    let longest = substrings[0];
    for(let i = 1; i < substrings.length; i++){
        if(substrings[i].length > longest.length){
            longest.text = substrings[i].text;
            longest.length = substrings[i].length;
        }
    }
    return longest;

}
// test function
const array = generateSubstrings("Again".toLowerCase());
const longest = findLongestSubstring(array);
console.log(longest);
