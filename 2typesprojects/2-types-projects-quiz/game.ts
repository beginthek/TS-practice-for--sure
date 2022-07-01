/**
 * Let's make a game 🕹
 */

const posion = { x:0, y:0};

type Direction = 'up'|'down'|'left'|'right';
function move(move:Direction){
    switch(move){
        case 'up':
            posion.y +=1;
            break;
        case 'down':
            posion.y -=1;
            break;
        case 'left':
            posion.x -=1;
            break;
        case 'right':
            posion.x +=1;
            break;
        default:
            throw new Error(`unknown move: ${move}`)
            
    }

}

console.log(posion); // { x: 0, y: 0}
move('up');
console.log(posion); // { x: 0, y: 1}
move('down');
console.log(posion); // { x: 0, y: 0}
move('left');
console.log(posion); // { x: -1, y: 0}
move('right');
console.log(posion); // { x: 0, y: 0}

//'position 이라는 오브젝트


