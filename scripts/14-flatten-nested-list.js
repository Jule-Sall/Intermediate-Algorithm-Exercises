// This function recursively flattens a nested list
function flattenList(param, flatList = []) {
    if (Array.isArray(param)) {
        param.forEach(value => {
            flattenList(value, flatList);
        });
    } else {
        flatList.push(param);
    }
    return flatList;
}


