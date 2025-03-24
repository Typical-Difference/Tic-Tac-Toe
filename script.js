function Game() {
    let gameBoard = [['','','',], ['','','',], ['','','',]]; //3 x 3 tile private variable

    return {
        //return functions that perform operations on the gameBoard
        getBoard(row, col){
            return gameBoard[row][col];
        },

        setBoard(row, col, tileInput){
            gameBoard[row][col] = tileInput;
        },

        modifyTile(row,col,tileInput){
            if(gameBoard[row,col] === ''){
                gameBoard[row][col] = tileInput;
            }
            else{
                //User inputs into a tile that is already filled --> Ignore
            }
        },

        display(){
            return gameBoard;
        },

        resetBoard(){
            gameBoard = [['','','',], ['','','',], ['','','',]];
        }

    };

}