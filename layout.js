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

export default layout