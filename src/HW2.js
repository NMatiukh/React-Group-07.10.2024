function ValidField(board) {
            
            const ships = { 1: 4, 2: 3, 3: 2, 4: 1 };
            const foundShips = { 1: 0, 2: 0, 3: 0, 4: 0 };
            const field = Array.from({ length: 10 }, () => Array(10).fill(false));

            function hasDiagonalNeighbor(x, y) {
                const neighbors = [
                    [-1, -1], [-1, 1],
                    [1, -1], [1, 1]
                ];

                for (const [dx, dy] of neighbors) {
                    const nx = x + dx;
                    const ny = y + dy;
                    if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10 && board[nx][ny] === 1) {
                        return true;
                    }
                }
                return false;
            }

            function findShip(x, y) {
                let size = 1;
                field[x][y] = true;

                for (let dy = y + 1; dy < 10 && board[x][dy] === 1 && !field[x][dy]; dy++) {
                    field[x][dy] = true;
                    size++;
                    if (hasDiagonalNeighbor(x, dy)) {
                        return -1;
                    }
                }

                if (size === 1) {
                    for (let dx = x + 1; dx < 10 && board[dx][y] === 1 && !field[dx][y]; dx++) {
                        field[dx][y] = true;
                        size++;
                        if (hasDiagonalNeighbor(dx, y)) {
                            return -1;
                        }
                    }
                }

                if (hasDiagonalNeighbor(x, y)) {
                    return -1;
                }

                console.log(`є корабель розміром ${size} на (${x}, ${y})`);
                return size;
            }

            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    if (board[i][j] === 1 && !field[i][j]) {
                        const size = findShip(i, j);
                
                        if (size === -1 || size > 4 || foundShips[size] === ships[size]) {
                            return false;
                        }

                        foundShips[size]++;
                    }
                }
            }
 
            console.log("є кораблі:", foundShips);
            return Object.keys(ships).every(size => foundShips[size] === ships[size]);

    }




export default ValidField;