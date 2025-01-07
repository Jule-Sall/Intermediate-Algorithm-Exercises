// This function checks if a given string has balanced parentheses
function checkParentheses(inputString){
    let closedParentheses = 0;
    let openedParentheses = 0;
    let hasBalancedParentheses = true;
    for(let i = 0; i < inputString.length; i++){
        if(inputString[i] === "(")
            openedParentheses++;
        else if(inputString[i] === ")")
            closedParentheses++;
    }
    if(closedParentheses === openedParentheses)
        hasBalancedParentheses = true;
    else
        hasBalancedParentheses = false;

    return hasBalancedParentheses; 
}