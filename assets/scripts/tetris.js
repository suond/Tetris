//canvas setup and draw amount
const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
context.fillStyle = 'black';
context.fillRect(0,0, canvas.width, canvas.height);

const nextPieceCanvas = document.getElementById('next-piece')
const nextPieceContext = nextPieceCanvas.getContext('2d')
nextPieceContext.fillStyle = 'black';
nextPieceContext.fillRect(0,0, canvas.width, canvas.height);
//block size
const scaleamt = 24;

const startBtn = document.getElementById("start-game-btn")
startBtn.onclick = (e) =>{
    start();
}

const pauseBtn = document.getElementById("pause-btn")
pauseBtn.disabled = true;
pauseBtn.onclick = (e) => {
    if (isRunning){
        pause();
        pauseBtn.innerHTML= "Resume"
    } else {
        resume();
        pauseBtn.innerHTML = "Pause"
    }
}

// Game world constants and setup
const world = createWorld(10,20);
let nextPiece = null;
const colors = [null, 'red', 'blue', 'yellow','green', 'orange', 'purple', 'pink']
const player = {
    pos: {x:0, y:0},
    matrix: null,
    score: 0
}
var reqId = null;
var isRunning = false;

//
function createWorld(width,height){
    const matrix = []
    for (let i = 0; i< height; i++){
        //push new array width long fill all with 0
        matrix.push(new Array(width).fill(0))
    }
    return matrix;
}



// GAME START/PAUSE/STOP FUNCTIONS
function start() {
    reset();
    update();
    isRunning = true;
    startBtn.disabled = true;
    pauseBtn.disabled = false;
}

function pause(){
    cancelAnimationFrame(reqId);
    isRunning = false;
    // startBtn.disabled = false;
    context.fillStyle = 'white'
    context.font = "30px Arial"
    context.fillText("Paused", canvas.width/2 - 40, 25);
}


function reset(){
    world.forEach(row => row.fill(0))
    player.score = 0
    updateScore();
    nextPieceToShow();
    playerReset();
    player.pos.y = -1;
    dropCounter = 1000
    isRunning = true;
}

function updateScore(){
    document.getElementById("score").innerHTML = "score: " + player.score
}

function gameOver(){
    if (world[0][4] !== 0 || world[0][5] !== 0 || world[0][6] !== 0 /* ||
        world[1][4] !== 0 || world[1][5] !== 0 || world[1][6] !== 0 */) {
          return true;
    }
    return false; 
  }
  
  function stop(){
    //   cancelAnimationFrame(reqId);
      isRunning = false;
      startBtn.disabled = false;
      cancelAnimationFrame(reqId);
      gameOverModal = document.querySelector(".game-over-modal");
      gameOverModal.classList.toggle("show-modal");
      pauseBtn.disabled = true;
  }
//END OF GAME STOP START

//UPDATE TIME VARIABLE
let lastTime = 0
let dropCounter = 0
let dropInterval = 1000;
//continuously draw itself
function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;
    
    dropCounter += deltaTime
    if(dropCounter > dropInterval) {
        playerDrop()
    }

    draw();
    reqId = requestAnimationFrame(update)
}

//DRAW LOGIC
function draw(){
    //like clearing the canvas
    context.fillStyle = 'black';
    context.fillRect(0,0, canvas.width, canvas.height);
    drawMatrix(world, {x:0, y: 0})
    drawMatrix(player.matrix, player.pos)
    drawNextPiece()
}


function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0) {
                context.fillStyle = colors[value];
                context.fillRect((x+offset.x) * scaleamt ,(y+offset.y) * scaleamt,1*scaleamt,1*scaleamt);
                context.fillStyle = 'black'
                context.strokeRect((x+offset.x) * scaleamt ,(y+offset.y) * scaleamt,1*scaleamt,1*scaleamt);                

            }
        })
    });
}

function drawNextPiece(){
    nextPieceContext.fillStyle = 'black'
    nextPieceContext.fillRect(0,0, canvas.width, canvas.height);

    nextPiece.forEach( (row, y) => {
        row.forEach( (value, x) => {
            if(value !== 0 ) {
                nextPieceContext.fillStyle = colors[value]
                nextPieceContext.fillRect((24*x + 25),(24*y+25), scaleamt, scaleamt)
                nextPieceContext.fillStyle = 'black';
                nextPieceContext.strokeRect((24*x +25),(24*y +25),scaleamt,scaleamt)
            }
        })
    })
    
}

// GAME LOGICS 
function nextPieceToShow() {
    const pieces = ['t','o','s','z','li','l','j']
    let next1 = pieces[Math.floor(Math.random()*pieces.length)]
    nextPiece = createPiece(next1);
}

function worldSweep(){
    let rowCount = 1
    outer: for (let y = world.length-1; y > 0; --y){
        for (let x = 0; x< world[y].length; ++x) {
            if (world[y][x] === 0) {
                continue outer;
            }
        }
        //getting here means the row is filled so you get rid of the row from the bottom and add it to the top
        const row = world.splice(y,1)[0].fill(0);
        world.unshift(row);
        ++y;
        
        player.score += rowCount * 10;
        rowCount *= 3
        updateScore(); 
    }
}

function merge(world, player){
    player.matrix.forEach((row,y) => {
        row.forEach( (value, x) =>{
            if (value !== 0 ) {
                world[y + player.pos.y][x + player.pos.x] = value;
            }
        })
    })
    
}

function collide(world, player) {
    const [matrix, pos] = [player.matrix, player.pos]

    for(let y = 0; y < matrix.length; ++y){
        for(let x = 0; x < matrix[y].length; ++x) {
            if(matrix[y][x] !== 0 && 
                (world[ y+pos.y ] && world[y + pos.y][x + pos.x]) !== 0) {
                    return true;
                }
        }
    }
    
}

function createPiece(type){
    switch(type) {
        case 't':
            return [
                [1,1,1],
                [0,1,0],
                [0,0,0]
            ]
        
        case 'o':
            return [
                [2,2],
                [2,2]
            ]
        case 's':
            return [
                [0,3,3],
                [3,3,0],
                [0,0,0]
            ]
        case 'z':
            return [
                [4,4,0],
                [0,4,4],
                [0,0,0]
            ]
        case 'li':
            return [
                [0,5,0,0],
                [0,5,0,0],
                [0,5,0,0],
                [0,5,0,0]
            ]
        case 'l': 
            return [
                [0,6,0],
                [0,6,0],
                [0,6,6]
            ]
        case 'j':
            return [
                [0,7,0],
                [0,7,0],
                [7,7,0]
            ]


    }
}

//PLAYER LOGIC
function changePlayerPos(coor, amt){
    player.pos[coor] += amt
    if (collide(world, player)) {
        player.pos[coor] -= amt;
    }
}

function playerReset(){
    if(gameOver()){
        //game over
        stop()
        cancelAnimationFrame(reqId);
    }
    
    player.matrix = nextPiece;
    nextPieceToShow();
    player.pos.y = 0;
    player.pos.x = Math.floor(world[0].length/2 ) - Math.floor(player.matrix[0].length /2)

}

function playerDrop(){
    player.pos.y++;
    if (collide(world, player)) {
        player.pos.y--
        merge(world, player);
        playerReset();
        worldSweep();
        updateScore();
    }
    dropCounter = 0;
}

function playerRotate(direction){
    const originalPosX = player.pos.x;
    let offset = 1;
    rotate(player.matrix, direction);
    while (collide(world, player)){
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1: -1));
        //a check to see if were bouncing out too much
        if (offset > player.matrix[0].length) {
            rotate(player.matrix, -direction);
            player.pos.x = originalPosX;
            return;
        }
    }
}

//turn, then reverse
function rotate(matrix, direction) {
    for (let y = 0; y < matrix.length; ++y){
        for (let x = 0; x < y; ++x){
            [
                matrix[x][y],
                matrix[y][x]
            ] = [
                matrix[y][x],
                matrix[x][y]
                
            ];
        }
    }
    //rotates cw
    if(direction > 0) {
        matrix.forEach(row => row.reverse())
    } else {
        //rotates ccw
        matrix.reverse();
    }
}

document.addEventListener('keydown', (e) =>{
    switch(e.keyCode){
        case 65:
        case 37:
            if (isRunning){
                changePlayerPos('x', -1)
            }
            break;
        case 83:
        case 40:
            if (isRunning){
                playerDrop();
            }
            break;
        case 68:
        case 39:
            if (isRunning){
                changePlayerPos('x', 1)
            }
            break;
        case 81: //q
            // console.log('rotate ccw')
            if (isRunning) {
                playerRotate(-1)
            }
            break;
        case 69:
        case 38:
            // console.log('rotate cw');
            if (isRunning){
                playerRotate(1)
            }
            break;
        case 80:
            // console.log("pause")
            if (isRunning) {
                pause();
                
            } else if(gameOver()){
                return;
            } else {
                resume()
            }
        default:
            break;
    }
});

function resume() {
    requestAnimationFrame(update)
    isRunning = true;
    startBtn.disabled = true;
}
