class SeaFight{
    constructor(board){
        this.board = board;
    }

    validateBoard(){
        let board = this.board;
        let boardSize = board.length;

        if(boardSize !== 10){
            console.log('Board size is not 10x10');
            return false;
        }

        for(let i = 0; i < boardSize; i++){
            if(board[i].length !== 10){
                console.log('Board size is not 10x10');
                return false;
            }
        }
        
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                if (board[i][j] === 1) {
                    if (
                        (i > 0 && j > 0 && board[i - 1][j - 1] === 1) ||
                        (i > 0 && j < boardSize - 1 && board[i - 1][j + 1] === 1) ||
                        (i < boardSize - 1 && j > 0 && board[i + 1][j - 1] === 1) ||
                        (i < boardSize - 1 && j < boardSize - 1 && board[i + 1][j + 1] === 1)
                    ) {
                        console.log('Ships are positioned incorrectly');
                        return false;
                    }
                }
            }
        }

        let visited = board.map(row => row.map(() => false));  
        let ship_4 = 0;
        let ship_3 = 0;
        let ship_2 = 0;
        let ship_1 = 0;

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === 1 && !visited[i][j]) {
                    let shipSize = 0;
                    let isHorizontal = j < board[i].length - 1 && board[i][j + 1] === 1;
                    let x = i, y = j;
                    while (x < board.length && y < board[i].length && board[x][y] === 1 && !visited[x][y]) {
                        visited[x][y] = true;
                        shipSize++;
                        if (isHorizontal) {
                            y++;
                        } else {
                            x++;
                        }
                    }
    
                    switch (shipSize) {
                        case 4:
                            ship_4++;
                            break;
                        case 3:
                            ship_3++;
                            break;
                        case 2:
                            ship_2++;
                            break;
                        case 1:
                            ship_1++;
                            break;
                        default:
                            return false;
                    }
                }
            }
        }
    
        if (ship_4 !== 1 || ship_3 !== 2 || ship_2 !== 3 || ship_1 !== 4) {
            console.log('Invalid number of ships');
            return false;

        };
        console.log('All good to go!');
        return true ;
    }
}

let board = [
    [1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
];

board = new SeaFight(board);
console.log(board.validateBoard());