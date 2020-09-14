const width = 28;
// 0 - pacdots
// [] - wall [left,up,right,down]
// 2 - ghost lair
// 3 - powerpellets
// 4 - empty
// 5 - left-side entrance
// 6 - right-side entrance
// 7 - forbidden movement

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
    [1, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 1], [0, 0, 1, 1], 4, [1, 0, 1, 0], 7, 7, 2, 2, 7, 7, [1, 0, 1, 0], 4, [1, 0, 0, 1], [0, 0, 1, 1], 0, [1, 0, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 1, 1],
    5, 4, 4, 4, 4, 4, 0, 0, 0, 4, [1, 0, 1, 0], 7, 7, 7, 7, 7, 7, [1, 0, 1, 0], 4, 0, 0, 0, 4, 4, 4, 4, 4, 6,
    [1, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 1, 0], 0, [1, 1, 0, 0], [0, 1, 1, 0], 4, [1, 0, 1, 0], 7, 7, 7, 7, 7, 7, [1, 0, 1, 0], 4, [1, 1, 0, 0], [0, 1, 1, 0], 0, [1, 1, 0, 0], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 1, 1],
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

// *********** GLOBAL VARIABLES **************************************

const grid = document.querySelector('.grid')
const scoreDisplay = document.getElementById('score')
const highScoreDisplay = document.getElementById('high-score')
const ghostTypes = ['red', 'pink', 'blue', 'orange']
const startingPacmanPosition = 489
const acceptedKeycodes = [37, 38, 39, 40]

let squares = []
let pacmanPosition = startingPacmanPosition
let score = 00;
let highScore = 0
let gameState = ""
let isRunning = false
let intervals = []
let pelletTimer
let leftShortcut = 364
let rightShortcut = 391

// *********** GLOBAL HELPERS **************************************

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

addPacDot = (position) => {
    if (isPacDot(position) || isPowerPellet(position)) {
        squares[position].classList.add('override-bg')
    }
}

removePacDot = (position) => {
    if (isPacDot(position) || isPowerPellet(position)) {
        squares[position].classList.remove('override-bg')
    }
}

addGhost = (ghost, position) => {
    squares[position].classList.add(ghost.colour)
}

addScaredGhost = (position) => {
    squares[position].classList.add("scared-ghost")
}

removeGhost = (ghost) => {
    squares[ghost.currentPosition].classList.remove(ghost.colour)
    squares[ghost.currentPosition].classList.remove('scared-ghost')
}

resetGhost = (ghost) => {
    squares[ghost.currentPosition].classList.remove('scared-ghost')
    squares[ghost.currentPosition].classList.remove(ghost.colour)
    ghost.currentPosition = ghost.startingPosition
    ghost.lastPosition = ghost.startingPosition
}

isLeftEntrance = (position) => {
    return squares[position].classList.contains("left-shortcut-entrance")
}

isRightEntrance = (position) => {
    return squares[position].classList.contains("right-shortcut-entrance")
}

goToRightEntrance = (position) => {
    return position + width - 1
}
goToLeftEntrance = (position) => {
    return position - width + 1
}

isWall = (position) => {
    return squares[position].classList.contains("wall")
}

isGhostLair = (position) => {
    return squares[position].classList.contains("ghost-lair")
}

isPacDot = (position) => {
    return squares[position].classList.contains("pac-dot")
}

isPowerPellet = (position) => {
    return squares[position].classList.contains("power-pellet")
}

checkForClash = (position) => {
    if ((ghostTypes.some(ghostType => squares[position].classList.contains(ghostType)) || squares[position].classList.contains("scared-ghost"))
        && squares[position].classList.contains("pacman")) {
        ghosts.forEach(ghost => {
            if (position === ghost.currentPosition) {
                if (ghost.isScared) {
                    score += 25
                    updateScore()
                    resetGhost(ghost)
                }
                else {
                    endGame()
                }
            }
        });
    }
}

addScared = (ghost) => {
    squares[ghost.currentPosition].classList.add('scared-ghost')
}

updateScore = () => {
    scoreDisplay.textContent = score
}

// *********** CREATE BOARD ************

createBoard = () => {
    updateScore()
    highScoreDisplay.textContent = highScore
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
        } else if (layout[i] === 5) {
            squares[i].classList.add('left-shortcut-entrance')
        } else if (layout[i] === 6) {
            squares[i].classList.add('right-shortcut-entrance')
        } else if (layout[i] === 7) {
            squares[i].classList.add('forbidden')
        }
    }
}

resetBoard = () => {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    squares = []
    createBoard()
}

// *********** CREATE PACMAN ********************************

createPacman = () => {
    squares[startingPacmanPosition].classList.add('pacman')
}

// *********** CREATE GHOSTS ********************************

class Ghost {
    constructor(colour, startingPosition, speed) {
        this.colour = colour
        this.startingPosition = startingPosition
        this.speed = speed
        this.currentPosition = startingPosition
        this.lastPosition = startingPosition
        this.isScared = false
    }
}

const ghosts = [
    new Ghost(ghostTypes[0], 294, 500), //red
    new Ghost(ghostTypes[1], 348, 600), //blue
    new Ghost(ghostTypes[2], 351, 700), //pink
    new Ghost(ghostTypes[3], 349, 800) //orange
]

// creates each ghost based on starting position and colour, adds them to board
createGhosts = () => {
    ghosts.forEach(ghost => {
        squares[ghost.startingPosition].classList.add(ghost.colour)
    });
}

//To-DO(Jason): refactor using global helper functions
resetGhosts = () => {
    ghosts.forEach(ghost => {
        resetGhost(ghost)
    });
}

// *********** GHOST MOVEMENT ********************************************************

//TODO: stop ghosts going through each other (check actual behaviour of pacman game)
// checkForGhost = () => {}

//TODO: Make ghosts leave their lair more easily + make them never go back the direction they came 
// exitLair() => {}

isLastPosition = (position, ghost) => {
    return position === ghost.lastPosition
}

isForbidden = (position) => {
    return squares[position].classList.contains("forbidden")
}

getNewPosition = (ghost) => {
    let direction = randomDirection()
    let position = ghost.currentPosition

    if (isLeftEntrance(position) && direction === -1) {
        return goToRightEntrance(position)
    }
    else if (isRightEntrance(position) && direction === 1) {
        return goToLeftEntrance(position)
    }

    let targetPosition = position + direction

    if (isWall(targetPosition) || isLastPosition(targetPosition, ghost) || isForbidden(targetPosition)) {
        while (true) {
            targetPosition = getNewPosition(ghost)
            if (!isWall(targetPosition) && !isLastPosition(targetPosition, ghost) && !isForbidden(targetPosition)) {
                return targetPosition
            }
        }
    }

    return targetPosition
}

moveGhost = (ghost) => {
    intervals.push(setInterval(() => {
        removeGhost(ghost)
        removePacDot(ghost.currentPosition)

        let lastPosition = ghost.currentPosition
        ghost.currentPosition = getNewPosition(ghost)
        ghost.lastPosition = lastPosition

        addPacDot(ghost.currentPosition)
        if(ghost.isScared) {
            addScaredGhost(ghost.currentPosition)
        }
        else {
            addGhost(ghost, ghost.currentPosition)
        }
        
        checkForClash(ghost.currentPosition)
    }, ghost.speed)
    )
}

//for each ghost set their movement intervals
//TO-DO: rename e variable to 'ghost'
moveGhosts = () => {
    ghosts.forEach(ghost => {
        moveGhost(ghost)
    })
}

clearGhostIntervals = () => {
    intervals.forEach(interval => {
        clearInterval(interval)
    })
}

scareGhosts = () => ghosts.forEach(ghost => ghost.isScared = true)

unScareGhosts = () => ghosts.forEach(ghost => ghost.isScared = false)

// *********** PAC-MAN MOVEMENT ****************************************************

removePacman = () => {
    squares[pacmanPosition].classList.remove('pacman')

    squares[pacmanPosition].classList.remove('left')
    squares[pacmanPosition].classList.remove('up')
    squares[pacmanPosition].classList.remove('right')
    squares[pacmanPosition].classList.remove('down')
}

eatPacDot = () => {
    squares[pacmanPosition].classList.remove('pac-dot')
    score++
    updateScore()
}

eatPowerPellet = () => {
    clearTimeout(pelletTimer)
    squares[pacmanPosition].classList.remove('power-pellet')
    score += 5
    updateScore()
    scareGhosts()
    pelletTimer = setTimeout(unScareGhosts, 10000)
}

checkShortcut = (position, direction) => {
    const leftEntrance = squares[position].classList.contains("left-shortcut-entrance")
    const rightEntrance = squares[position].classList.contains("right-shortcut-entrance")

    if (leftEntrance && direction === -1) {
        return position + width - 1
    }
    else if (rightEntrance && direction === 1) {
        return position - width + 1
    }
    else {
        return position
    }
}

// takes in a users keyboard input and moves pacman in direction if available
movePacman = (e) => {
    //if game isn't started or not a valid key press
    if (!isRunning || !acceptedKeycodes.includes(e.keyCode)) {
        return
    }
    e.preventDefault(); //stops the window from scrolling with key presses while game is running
    const pacman = document.getElementsByClassName('pacman')
    let newPosition = pacmanPosition
    let direction
    let style = ""
    removePacman()

    if (e.keyCode === 37) {
        direction = -1
        style = "left"
    }
    else if (e.keyCode === 38) {
        direction = -width
        style = "up"
    }
    else if (e.keyCode === 39) {
        direction = 1
        style = "right"
    }
    else if (e.keyCode === 40) {
        direction = +width
        style = "down"
    }

    newPosition += direction

    pacmanPosition = checkShortcut(pacmanPosition, direction)

    //valid move, pacman position now updated
    if (!isWall(newPosition) && !isGhostLair(newPosition)) {
        pacmanPosition = newPosition
    }

    if (isPacDot(newPosition)) {
        eatPacDot()
    }

    if (isPowerPellet(newPosition)) {
        eatPowerPellet()
    }

    squares[pacmanPosition].classList.add('pacman')
    squares[pacmanPosition].classList.add(style)

    checkForClash(pacmanPosition)
}

// *********** GAME STATE ************

toggleStartButton = () => {
    let startButton = document.getElementById("start")
    startButton.disabled = !startButton.disabled
}

resetScore = () => {
    score = 0
    updateScore()
}

setHighScore = () => {
    if (score > highScore) {
        highScore = score
        highScoreDisplay.textContent = highScore
    }
}

setGameState = (gameState = "") => {
    document.getElementById("game-state").textContent = gameState
}

resetPacman = () => {
    pacmanPosition = startingPacmanPosition
}

// *********** Initialize Board ************


// IIFE (Immediately Invoked Function Expression)
initializeBoard = (() => {
    createBoard()
    createPacman()
    createGhosts()
})()

// *********** START GAME ************

startGame = () => {
    isRunning = true;
    toggleStartButton()
    resetScore()
    setGameState()
    moveGhosts()
}

// *********** END GAME ************

endGame = () => {
    isRunning = false
    removePacman()
    resetPacman()
    clearGhostIntervals()
    unScareGhosts()
    resetGhosts()
    setHighScore()
    setGameState("Game Over")
    setTimeout(() => {
        resetBoard()
        createPacman()
        createGhosts()
        setGameState()
        toggleStartButton()
    }, 2500)
}

// *********** EVENT LISTENERS ************

document.addEventListener("keydown", movePacman)

document.getElementById("start").addEventListener("click", startGame)