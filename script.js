//Game is a factory function --> A factory function will return objects.
//Single instance -> module pattern
function Game() {
    //Board is being lexically scoped into this closure in the Game() function.
    let board = [['','','',], ['','','',], ['','','',]]; //3 x 3 tile private variable

    function getTile(row, col){
        return board[row][col];
    }

    function setTile(row, col, tileInput){
        board[row][col] = tileInput;
    }

    function modifyTile(row,col,tileInput){
        if(board[row][col] === ''){
            board[row][col] = tileInput;
        }
        else{
            //User inputs into a tile that is already filled --> Ignore
        }
    }

    function displayBoard(){
        return board;
    }

    function resetBoard(){
        board = [['','','',], ['','','',], ['','','',]];
    }

    function checkWinner(){
        const winningCombinations = [
            [[0,0], [0,1], [0,2]],
            [[1,0], [1,1], [1,2]],
            [[2,0], [2,1], [2,2]],
            [[0,0], [1,0], [2,0]],
            [[0,1], [1,1], [2,1]],
            [[0,2], [1,2], [2,2]],
            [[0,0], [1,1], [2,2]],
            [[0,2], [1,1], [2,0]]
        ];
        for(const combination of winningCombinations){
            const[a, b, c] = combination;
            if(board[a[0]][a[1]] && 
                board[a[0]][a[1]] === board[b[0]][b[1]] && 
                board[a[0]][a[1]] === board[c[0]][c[1]]){
                    return board[a[0]][a[1]];
            }
        }
    }

    return {
        //return functions that perform operations on the gameBoard
        getTile, setTile, modifyTile, displayBoard, resetBoard, checkWinner
    };

}

function Player(name, tileInput){
    return {name, tileInput};
}

const tic = Player('Tic', 'X');
const tac = Player('Tac', 'O');

//Single instance -> module pattern
function GameController (p1, p2){
    currentPlayer = p1;
    let scoreP1 = 0;
    let scoreP2 = 0;

    function switchTurn(){
        currentPlayer = (currentPlayer === p2) ? p1 : p2;
    }

    function playTurn(row, col){
        if(Game.getTile(row, col) === ''){
            Game.setTile(row, col, currentPlayer.tileInput);
            if(Game.checkWinner()){
                console.log(`Winner: ${currentPlayer.name}`);
            }
            switchTurn();
        }
    }

    function increment(score){
        return score++;
    }

    function displayScore(){
        return {scoreP1, scoreP2};
    }

    return {increment, display};
}

