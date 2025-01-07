// this function creates a 9x9 board from a string
function createBoard(boardString) {
    const board = [];
    let index = 0;
    for (let row = 0; row < 9; row++) {
        const rowArray = [];
        for (let column = 0; column < 9; column++) {
            rowArray.push(boardString[index]);
            index++;
        }
        board.push(rowArray);
    }
    return board;
}

// this function creates 9 3x3 subgrids from a 9x9 board
function createSubgrids(board) {
    const subgrids = [];
    for (let row = 0; row < 9; row += 3) {
        for (let column = 0; column < 9; column += 3) {
            const subgrid = [];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    subgrid.push(board[row + i][column + j]);
                }
            }
            subgrids.push(subgrid);
        }
    }
    return subgrids;
}

// This function checks if a subgrid contains duplicates
function hasSubgridDuplicates(subgrid){
    let digits = [];
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            // checks if digits contains current value
            if(digits.includes(subgrid[i][j])){
                return true;
            }
            // (.) are not included
            if(subgrid[i][j] != '.'){
                digits.push(subgrid[i][j]);
            }
            
        }
    }
    return false;
}
// This function checks if a row contains duplicates
function hasRowDuplicates(row){
    let digits = [];
    for(let i = 0; i < 9; i++){
        if(digits.includes(row[i])){
            return true;
        }
        if(row[i] != '.'){
            digits.push(row[i]);
        }
    }
    return false;
}

// This function checks if a column contains duplicates
function hasColumnDuplicates(column){
    let digits = [];
    for(let i = 0; i < 9; i++){
        if(digits.includes(column[i])){
            return true;
        }
        if(column[i] != '.'){
            digits.push(column[i]);
        }
    }
    return false;
}


// this function checks if a string is a valid sudoku board
function isValidSudokuBoard(inputString){
    // check if the string length is equal to 81
    if(inputString.length != 81)
        return false;

    // create a 9x9 board with it
    const board = createBoard(inputString.split(""));

    for(let i = 0; i < 9; i++){
        // check if every column in a row contains digits from 1 to 9
        // exactly once
        if(hasRowDuplicates(board[i]))
            return false;

        // check if every row in a column contains digits from 1 to 9 
        // exactly once
        if(hasColumnDuplicates(board.map((row) => row[i])))
            return false;
    }

    // initialize an empty array to hold 3x3 subgrids
    const subgrids = createSubgrids(board);
    subgrids.forEach(subgrid =>{
        if(hasSubgridDuplicates(subgrid))
            return false;
    });

    return true;
}