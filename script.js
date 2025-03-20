function Game() {
    let gameBoard = [['','','',], ['','','',], ['','','',]]; //3 x 3 tile private variable

    return {
        //return functions that perform operations on the gameBoard
        getBoard(row, col){
            return gameBoard[row][col];
        },

        setBoard(row, col, tileInput){
            this.gameBoard[row][col] = tileInput;
        },

        modifyTile(row,col,tileInput){
            if(this.getBoard(row,col) == ''){
                this.setBoard(row, col, tileInput);
            }
            else{
                //User inputs into a tile that is already filled --> Ignore
            }
        }

    };

}