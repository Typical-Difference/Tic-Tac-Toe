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
            if(gameBoard[row][col] === ''){
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

function Player(name, tileInput){
    return {name, tileInput};
}

const tic = Player('Tic', 'X');
const tac = Player('Tac', 'Y');

function GameController(p1, p2){
    let scoreP1 = 0;
    let scoreP2 = 0;

    return {
        increment(score){
            score++;
        },
        display(){
            return {scoreP1, scoreP2};
        }
    }
}