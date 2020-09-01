const width = 28;
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

// *********** VARIABLES ************

const grid = document.querySelector('.grid');
const scoreDisplay = document.getElementById('score');
let squares = [];
let pacmanPosition = 489;
let score = 00;

// *********** CREATE BOARD + PACMAN + GHOSTS ************

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

// *********** GHOST MOVEMENT ************


removeGhost = (ghost, position) => {
    squares[position].classList.remove(`ghost-${ghost.colour}`)
}

addGhost = (ghost, position) => {
    squares[position].classList.add(`ghost-${ghost.colour}`)
}

removePacDot = (position) => {
    if (squares[position].classList.contains("pac-dot")) {
        squares[position].classList.remove('temp-pac-dot')
    }
}

addPacDot = (position) => {
    if (squares[position].classList.contains("pac-dot")) {
        squares[position].classList.add('temp-pac-dot')
    }
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

checkForWall = (newPosition) => {
    return squares[newPosition].classList.contains("wall")
}

calculateNewPosition = (position) => {
    return position + randomDirection()
}

//TODO: stop ghosts going through each other (check actual behaviour of pacman game)
// checkForGhost = () => {}

//TODO: Make ghosts leave their lair more easily + make them never go back the direction they came 
// exitLair() => {}

setNewPosition = (ghost, position) => {
    let newPosition = calculateNewPosition(position)

    if (position === 364 && movement === -1) {
        ghost.currentPosition = 364 + width - 1
    }
    else if (position === 391 && movement === 1) {
        ghost.currentPosition = 391 - width + 1
    }
    else {
        //If the ghost hits a wall, recalculate the new direction
        if (checkForWall(newPosition)) {
            while (true) {
                newPosition = calculateNewPosition(position)
                if (!checkForWall(newPosition)) {
                    ghost.currentPosition = newPosition
                    break;
                }
            }
        }
        else {
            ghost.currentPosition = newPosition
        }
    }
}

moveGhost = (ghost) => {
    const currentPosition = ghost.currentPosition

    setInterval(() => {
        removeGhost(ghost, currentPosition)
        removePacDot(currentPosition)

        setNewPosition(ghost, currentPosition)

        addPacDot(currentPosition)
        addGhost(ghost, currentPosition)
    }, ghost.speed)
}

//for each ghost set their movement intervals
//TO-DO: rename e variable to 'ghost'
moveGhosts = () => {
    ghosts.forEach(e => {
        moveGhost(e)
    });
}

// *********** PAC-MAN MOVEMENT ***************************

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

// *********** EVENT LISTENERS ************

document.addEventListener("keydown", movePacman)

// *********** START GAME ************

document.getElementById("start").addEventListener("click", moveGhosts)

// *********** INITIATE GAME ************

createBoard();
createPacman();
createGhosts();