const width = 28;
const grid = document.querySelector('.grid');
const scoreDisplay = document.getElementById('score');
let squares = [];
let pacmanPosition = 489;
let score = 00;

// 0 - pacdots
// [] - wall [left,up,right,down]
// 2 - ghost lair
// 3 - powerpellets
// 4 - empty

const layout = [
    [1, 1, 0, 0], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 1, 0],
    [1, 0, 1, 0], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [1, 0, 0, 0], [0, 0, 1, 0], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [1, 0, 1, 0],
    [1, 0, 1, 0], 0, [1, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], 0, [1, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], 0, [1, 0, 0, 0], [0, 0, 1, 0], 0, [1, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], 0, [1, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], 0, [1, 0, 1, 0],
    [1, 0, 1, 0], 3, [1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], 0, [1, 0, 0, 0], 1, 1, 1, [0, 0, 1, 0], 0, [1, 0, 0, 0], [0, 0, 1, 0], 0, [1, 0, 0, 0], 1, 1, 1, [0, 0, 1, 0], 0, [1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], 3, [1, 0, 1, 0],
    [1, 0, 1, 0], 0, [1, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 1, 0],
    [1, 0, 1, 0], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [1, 0, 1, 0],
    [1, 0, 1, 0], 0, [1, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], 0, [1, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], 0, [1, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], 0, [1, 0, 1, 0],
    [1, 0, 1, 0], 0, [1, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 1, 0],
    [1, 0, 1, 0], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [1, 0, 0, 0], [0, 0, 1, 0], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [1, 0, 1, 0],
    [1, 0, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 1, 0], 0, [1, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 1, 1], 0, [1, 0, 0, 1], [0, 0, 1, 1], 0, [1, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 0], [0, 1, 1, 0], 0, [1, 1, 0, 0], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 0, 1, 1],
    [0, 0, 0, 0], 1, 1, 1, 1, [1, 0, 1, 0], 0, [1, 0, 0, 0], [0, 0, 1, 0], 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, [1, 0, 0, 0], [0, 0, 1, 0], 0, [1, 0, 1, 0], 1, 1, 1, 1, 1,
    [0, 0, 0, 0], 1, 1, 1, 1, [1, 0, 1, 0], 0, [1, 0, 0, 0], [0, 0, 1, 0], 4, [1, 1, 0, 0], [0, 1, 0, 1], [0, 1, 1, 1], 2, 2, [1, 1, 0, 1], [0, 1, 0, 1], [0, 1, 1, 0], 4, [1, 0, 0, 0], [0, 0, 1, 0], 0, [1, 0, 1, 0], 1, 1, 1, 1, 1,
    [1, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 1], [0, 0, 1, 1], 4, [1, 0, 1, 0], 2, 2, 2, 2, 2, 2, [1, 0, 1, 0], 4, [1, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 1, 1],
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, [1, 0, 1, 0], 2, 2, 2, 2, 2, 2, [1, 0, 1, 0], 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
    [1, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 1, 0], 0, [1, 1, 0, 0], [0, 1, 1, 0], 4, [1, 0, 1, 0], 2, 2, 2, 2, 2, 2, [1, 0, 1, 0], 4, [1, 1, 0, 0], [0, 1, 1, 0], 0, [1, 1, 0, 0], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 1, 1],
    [0, 0, 0, 0], 1, 1, 1, 1, [1, 0, 1, 0], 0, [1, 0, 0, 0], [0, 0, 1, 0], 4, [1, 0, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], 4, [1, 0, 0, 0], [0, 0, 1, 0], 0, [1, 0, 1, 0], 1, 1, 1, 1, 1,
    [1, 1, 0, 0], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 1], [0, 0, 1, 1], 4, [1, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 1, 1], 4, [1, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 1, 0],
    [1, 0, 1, 0], 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, [1, 0, 1, 0],
    [1, 0, 1, 0], 0, [1, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], 0, [1, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], 0, [1, 1, 0, 0], [0, 1, 1, 0], 0, [1, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], 0, [1, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], 0, [1, 0, 1, 0],
    [1, 0, 1, 0], 0, [1, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 0], [0, 0, 1, 0], 0, [1, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 1, 0],
    [1, 0, 1, 0], 3, 0, 0, [1, 0, 0, 0], [0, 0, 1, 0], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [1, 0, 0, 0], [0, 0, 1, 0], 0, 0, 3, [1, 0, 1, 0],
    [1, 0, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], 0, [1, 0, 0, 0], [0, 0, 1, 0], 0, [1, 1, 0, 0], [0, 1, 1, 0], 0, [1, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], 0, [1, 1, 0, 0], [0, 1, 1, 0], 0, [1, 0, 0, 0], [0, 0, 1, 0], 0, [1, 1, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0],
    [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 0], [0, 0, 1, 0], 0, [1, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 0], [0, 0, 1, 0], 0, [1, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 1], [0, 0, 0, 1], [0, 0, 1, 0],
    [1, 0, 1, 0], 0, 0, 0, 0, 0, 0, [1, 0, 0, 0], [0, 0, 1, 0], 0, 0, 0, 0, [1, 0, 0, 0], [0, 0, 1, 0], 0, 0, 0, 0, [1, 0, 0, 0], [0, 0, 1, 0], 0, 0, 0, 0, 0, 0, [1, 0, 1, 0],
    [1, 0, 1, 0], 0, [1, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], 0, [1, 0, 0, 0], [0, 0, 1, 0], 0, [1, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], 0, [1, 0, 1, 0],
    [1, 0, 1, 0], 0, [1, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 1, 0],
    [1, 0, 1, 0], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [1, 0, 1, 0],
    [1, 0, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 0, 1, 1]
]

//create board
function createBoard() {
    scoreDisplay.textContent = score
    //for loop 
    for (let i = 0; i < layout.length; i++) {
        //create a square 
        const square = document.createElement('div')
        //put square in grid 
        grid.appendChild(square)
        //put square in sqaures array
        squares.push(square)

        if (Array.isArray(layout[i])) {
            squares[i].classList.add('wall')
            if (layout[i][0] === 1) {
                squares[i].classList.add('wall-left')
            }
            if (layout[i][1] === 1) {
                squares[i].classList.add('wall-top')
            }
            if (layout[i][2] === 1) {
                squares[i].classList.add('wall-right')
            }
            if (layout[i][3] === 1) {
                squares[i].classList.add('wall-bottom')
            }

        }

        if (layout[i] === 0) {
            squares[i].classList.add('pac-dot')
        } else if (layout[i] === 2) {
            squares[i].classList.add('ghost-lair')
        } else if (layout[i] === 3) {
            squares[i].classList.add('power-pellet')
        }

    }
}

createPacman = () => {
    squares[pacmanPosition].classList.add('pacman')
}

class Ghost {
    constructor(colour, currentPosition, speed) {
        this.colour = colour;
        this.currentPosition = currentPosition;
        this.speed = speed
        this.positions = [currentPosition];
    }
}

const ghosts = [
    new Ghost("red", 351, 1000, ""),
    new Ghost("pink", 348, 900, ""),
    new Ghost("blue", 379, 800, ""),
    new Ghost("orange", 376, 700, "")
]

// creates each ghost based on starting position and colour, adds them to board
createGhosts = () => {
    ghosts.forEach(e => {
        squares[e.currentPosition].classList.add(`ghost-${e.colour}`)
    });
}

//for each ghost set their movement intervals
moveGhosts = () => {
    ghosts.forEach(e => {
        ghostMovement(e)
    });
}

//takes in a ghost object and moves them in a random direction 
//TODO: make them leave their lair more easily + make them never go back the direction they came 
ghostMovement = (ghost) => {
    setInterval(() => {
        let currentPosition = ghost.currentPosition

        //Remove the ghost image from its current position
        squares[currentPosition].classList.remove(`ghost-${ghost.colour}`)

        //Remove pacdot from the ghost's current position
        if (squares[currentPosition].classList.contains("pac-dot")) {
            squares[currentPosition].classList.remove('temp-pac-dot')
        }

        //Calculate new ghosts position but don't alter the position yet
        let movement = randomDirection()
        let newPosition = currentPosition + movement

        if (currentPosition === 364 && movement === -1) {
            currentPosition = 364 + width - 1
        }
        else if (currentPosition === 391 && movement === 1) {
            currentPosition = 391 - width + 1
        }
        else {
            if (checkForWall(newPosition)) {
                while (true) {
                    let tempPosition = currentPosition
                    if (!checkForWall(tempPosition += randomDirection())) {
                        currentPosition = tempPosition
                        break;
                    }
                }

            }
            else {
                currentPosition = newPosition
            }
        }

        if (squares[currentPosition].classList.contains("pac-dot")) {
            squares[currentPosition].classList.add('temp-pac-dot')
        }

        squares[currentPosition].classList.add(`ghost-${ghost.colour}`)
    }, ghost.speed)
}

// gets a random num between 0-3 to determine left/up/right/down movement and returns it as a grid index change
randomDirection = () => {
    let randomNum = Math.floor(Math.random() * 4)
    let direction
    if (randomNum === 0) {
        direction = -1
    }
    else if (randomNum === 1) {
        direction = -width
    }
    else if (randomNum === 2) {
        direction = 1
    }
    else if (randomNum === 3) {
        direction = +width
    }

    return direction
}

//37 = left 38 up 39 right 40 down
// row length is 28

checkForWall = (newPosition) => {
    return squares[newPosition].classList.contains("wall")
}

/* TODO: stop ghosts going through each other (check actual behaviour of pacman game)
checkForGhost = () => {
}
*/

// takes in a users keyboard input and moves pacman in direction if available
movePacman = (e) => {
    const pacman = document.getElementsByClassName('pacman')
    let newPosition = pacmanPosition
    let direction = ""
    squares[pacmanPosition].classList.remove('pacman')

    squares[pacmanPosition].classList.remove('left')
    squares[pacmanPosition].classList.remove('up')
    squares[pacmanPosition].classList.remove('right')
    squares[pacmanPosition].classList.remove('down')

    if (e.keyCode === 37) {
        newPosition -= 1
        direction = "left"
    }
    else if (e.keyCode === 38) {
        newPosition -= width
        direction = "up"
    }
    else if (e.keyCode === 39) {
        newPosition += 1
        direction = "right"
    }
    else if (e.keyCode === 40) {
        newPosition += width
        direction = "down"
    }
    else {
        alert(`That's not a valid key. Press arrow only to move pacman`);
    }

    if (pacmanPosition === 364 && e.keyCode === 37) {
        pacmanPosition = 364 + width - 1
    }
    else if (pacmanPosition === 391 && e.keyCode === 39) {
        pacmanPosition = 391 - width + 1
    }
    else if (!checkForWall(newPosition) && !squares[newPosition].classList.contains("ghost-lair")) {
        pacmanPosition = newPosition
    }

    if (squares[pacmanPosition].classList.contains("pac-dot")) {
        squares[pacmanPosition].classList.remove('pac-dot')
        score++
        scoreDisplay.textContent = score
    }

    squares[pacmanPosition].classList.add('pacman')
    squares[pacmanPosition].classList.add(direction)
}

document.addEventListener("keydown", movePacman)

document.getElementById("start").addEventListener("click", moveGhosts)

createBoard();
createPacman();
createGhosts();