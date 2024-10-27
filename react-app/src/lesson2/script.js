const board = [
    [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function checkBoard(board) {
    if (board.length === 10) {
        for (let i = 0; i < board.length; i++) {
            if (board[i].length !== 10) {
                console.log('Board should be 10x10, please check your rows and columns');
                return false;
            }
        }
    }
    return true;
}

function checkShipsPosition(board) {
    let ships = {
        1: 4,
        2: 3,
        3: 2,
        4: 1
    }

    let foundShips = {
        1: 0,
        2: 0,
        3: 0,
        4: 0
    }

    function countShipsCells(i, j) {
        if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] !== 1) {
            return 0;
        }
        board[i][j] = 'x';
        let size = 1;
        size += countShipsCells(i, j + 1);
        size += countShipsCells(i + 1, j);

        return size;
    }


    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === 1) {
                let shipSize = countShipsCells(i,j);
                if (shipSize <= 4) {
                    foundShips[shipSize]++;
                }

            }
        }
    }
    for (let i in ships) {
        if (ships[i] !== foundShips[i]) {
            console.log('Ship placement is wrong, please check')
            return false;
        }
        console.log('Ship placement is according to the rules');
        return true;
    }


}
checkBoard(board);
checkShipsPosition(board);

const secondBoard = [
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
]

checkBoard(secondBoard);
checkShipsPosition(secondBoard);