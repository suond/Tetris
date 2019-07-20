/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/scripts/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/entry.js":
/*!*********************************!*\
  !*** ./assets/scripts/entry.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ \"./assets/scripts/firebase.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./assets/scripts/modal.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tetris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tetris */ \"./assets/scripts/tetris.js\");\n\n\n\n_modal__WEBPACK_IMPORTED_MODULE_1___default()();\nObject(_tetris__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack:///./assets/scripts/entry.js?");

/***/ }),

/***/ "./assets/scripts/firebase.js":
/*!************************************!*\
  !*** ./assets/scripts/firebase.js ***!
  \************************************/
/*! exports provided: submitScore, getRef, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitScore\", function() { return submitScore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRef\", function() { return getRef; });\nvar database\nvar ref;\ndocument.addEventListener(\"DOMContentLoaded\", (event) => {\n    var firebaseConfig = {\n        apiKey: \"AIzaSyBRxgosN3QCs5pd9iz8B0EDZ6arSFUYQic\",\n        authDomain: \"tetris-d3256.firebaseapp.com\",\n        databaseURL: \"https://tetris-d3256.firebaseio.com\",\n        projectId: \"tetris-d3256\",\n        storageBucket: \"\",\n        messagingSenderId: \"618878741823\",\n        appId: \"1:618878741823:web:bd21f21a6dfb480b\"\n      };\n      // Initialize Firebase\n      firebase.initializeApp(firebaseConfig);\n    \n\n       database = firebase.database();\n       ref = database.ref('scores');\n   \n})\n\nfunction submitScore(score, name) {\n    let data = {\n        name: name,\n        score: score\n    }\n    ref.push(data);\n}\nfunction getRef(){\n    return ref;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({submitScore, getRef});\n\n//# sourceURL=webpack:///./assets/scripts/firebase.js?");

/***/ }),

/***/ "./assets/scripts/modal.js":
/*!*********************************!*\
  !*** ./assets/scripts/modal.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = () => {\n    var modal = document.querySelector(\".modal\");\n    var gameOverModal = document.querySelector(\".game-over-modal\");\n    var trigger = document.querySelector(\".trigger\");\n    var closeButton = document.querySelector(\".close-button\");\n    \n    \n    function toggleModal() {\n        modal.classList.toggle(\"show-modal\");\n    }\n    \n    function windowOnClick(event) {\n        if (event.target === modal) {\n            toggleModal();\n        } else if(event.target === gameOverModal) {\n            gameOverModal.classList.toggle(\"show-modal\");\n        }\n    }\n    \n    \n    trigger.addEventListener(\"click\", toggleModal);\n    closeButton.addEventListener(\"click\", toggleModal);\n    window.addEventListener(\"click\", windowOnClick);   \n}\n\n//# sourceURL=webpack:///./assets/scripts/modal.js?");

/***/ }),

/***/ "./assets/scripts/tetris.js":
/*!**********************************!*\
  !*** ./assets/scripts/tetris.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase.js */ \"./assets/scripts/firebase.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    let ref;\n    setTimeout( e => {\n    ref = Object(_firebase_js__WEBPACK_IMPORTED_MODULE_0__[\"getRef\"])();\n}, 100)\n\nsetTimeout(() => {\n    getHighScore();\n}, 101);\n\n//canvas setup and draw amount\nconst canvas = document.getElementById('tetris');\nconst context = canvas.getContext('2d');\ncontext.fillStyle = 'black';\ncontext.fillRect(0,0, canvas.width, canvas.height);\n\nconst nextPieceCanvas = document.getElementById('next-piece')\nconst nextPieceContext = nextPieceCanvas.getContext('2d')\nnextPieceContext.fillStyle = 'black';\nnextPieceContext.fillRect(0,0, canvas.width, canvas.height);\n//block size\nconst scaleamt = 24;\n\nconst startBtn = document.getElementById(\"start-game-btn\")\nstartBtn.onclick = (e) =>{\n    start();\n}\n\nconst pauseBtn = document.getElementById(\"pause-btn\")\npauseBtn.disabled = true;\npauseBtn.onclick = (e) => {\n    if (isRunning){\n        pause();\n        \n    } else {\n        resume();\n        \n    }\n}\n\n// Game world constants and setup\nconst world = createWorld(10,20);\nlet nextPiece = null;\nconst colors = [null, 'red', 'blue', 'yellow','green', 'orange', 'purple', 'pink']\nconst player = {\n    pos: {x:0, y:0},\n    matrix: null,\n    score: 0\n}\nvar reqId = null;\nvar isRunning = false;\n\n//\nfunction createWorld(width,height){\n    const matrix = []\n    for (let i = 0; i< height; i++){\n        //push new array width long fill all with 0\n        matrix.push(new Array(width).fill(0))\n    }\n    return matrix;\n}\n\n// GAME START/PAUSE/STOP FUNCTIONS\nfunction start() {\n    reset();\n    update();\n    isRunning = true;\n    startBtn.disabled = true;\n    pauseBtn.disabled = false;\n}\n\nfunction pause(){\n    cancelAnimationFrame(reqId);\n    isRunning = false;\n    // startBtn.disabled = false;\n    pauseBtn.innerHTML= \"Resume\"\n    context.fillStyle = 'white'\n    context.font = \"30px Arial\"\n    context.fillText(\"Paused\", canvas.width/2 - 40, 25);\n}\n\n\nfunction reset(){\n    world.forEach(row => row.fill(0))\n    player.score = 0\n    updateScore();\n    nextPieceToShow();\n    playerReset();\n    player.pos.y = -1;\n    dropCounter = 1000\n    isRunning = true;\n    document.getElementById(\"congrats-message\").style.visibility = \"hidden\"\n}\n\nfunction updateScore(){\n    document.getElementById(\"score\").innerHTML = \"score: \" + player.score\n}\n\nfunction gameOver(){\n    if (world[0][4] !== 0 || world[0][5] !== 0 || world[0][6] !== 0 /* ||\n        world[1][4] !== 0 || world[1][5] !== 0 || world[1][6] !== 0 */) {\n            return true;\n        }\n        return false; \n    }\n    \n    function stop(){\n        let gameOverModal = document.querySelector(\".game-over-modal\");\n        isRunning = false;\n        startBtn.disabled = false;\n        cancelAnimationFrame(reqId);\n        gameOverModal = document.querySelector(\".game-over-modal\");\n        gameOverModal.classList.toggle(\"show-modal\");\n        pauseBtn.disabled = true;\n      document.querySelector(\"#current-player-score-span\").innerHTML = `Your Score: ${player.score}`\n      if (newHighScore()){\n          handleNewHighScore()\n        }\n  }\n  //END OF GAME STOP START\n  \n  //UPDATE TIME VARIABLE\n  let lastTime = 0\n  let dropCounter = 0\nlet dropInterval = 1000;\n//continuously draw itself\nfunction update(time = 0) {\n    const deltaTime = time - lastTime;\n    lastTime = time;\n    \n    dropCounter += deltaTime\n    if(dropCounter > dropInterval) {\n        playerDrop()\n    }\n    if (isRunning){\n        draw();\n        reqId = requestAnimationFrame(update)\n    }\n}\n\n//DRAW LOGIC\nfunction draw(){\n    //like clearing the canvas\n    context.fillStyle = 'black';\n    context.fillRect(0,0, canvas.width, canvas.height);\n    drawMatrix(world, {x:0, y: 0})\n    drawMatrix(player.matrix, player.pos)\n    drawNextPiece()\n}\n\n\nfunction drawMatrix(matrix, offset) {\n    matrix.forEach((row, y) => {\n        row.forEach((value, x) => {\n            if(value !== 0) {\n                context.fillStyle = colors[value];\n                context.fillRect((x+offset.x) * scaleamt ,(y+offset.y) * scaleamt,1*scaleamt,1*scaleamt);\n                context.fillStyle = 'black'\n                context.strokeRect((x+offset.x) * scaleamt ,(y+offset.y) * scaleamt,1*scaleamt,1*scaleamt);                \n                \n            }\n        })\n    });\n}\n\nfunction drawNextPiece(){\n    nextPieceContext.fillStyle = 'black'\n    nextPieceContext.fillRect(0,0, canvas.width, canvas.height);\n    \n    nextPiece.forEach( (row, y) => {\n        row.forEach( (value, x) => {\n            if(value !== 0 ) {\n                nextPieceContext.fillStyle = colors[value]\n                nextPieceContext.fillRect((24*x + 25),(24*y+25), scaleamt, scaleamt)\n                nextPieceContext.fillStyle = 'black';\n                nextPieceContext.strokeRect((24*x +25),(24*y +25),scaleamt,scaleamt)\n            }\n        })\n    })\n    \n}\n\n// GAME LOGICS \nfunction nextPieceToShow() {\n    const pieces = ['t','o','s','z','li','l','j']\n    let next1 = pieces[Math.floor(Math.random()*pieces.length)]\n    nextPiece = createPiece(next1);\n}\n\nfunction worldSweep(){\n    let rowCount = 1\n    outer: for (let y = world.length-1; y > 0; --y){\n        for (let x = 0; x< world[y].length; ++x) {\n            if (world[y][x] === 0) {\n                continue outer;\n            }\n        }\n        //getting here means the row is filled so you get rid of the row from the bottom and add it to the top\n        const row = world.splice(y,1)[0].fill(0);\n        world.unshift(row);\n        ++y;\n        \n        player.score += rowCount * 10;\n        rowCount *= 3\n        updateScore(); \n    }\n}\n\nfunction merge(world, player){\n    player.matrix.forEach((row,y) => {\n        row.forEach( (value, x) =>{\n            if (value !== 0 ) {\n                world[y + player.pos.y][x + player.pos.x] = value;\n            }\n        })\n    })\n    \n}\n\nfunction collide(world, player) {\n    const [matrix, pos] = [player.matrix, player.pos]\n    \n    for(let y = 0; y < matrix.length; ++y){\n        for(let x = 0; x < matrix[y].length; ++x) {\n            if(matrix[y][x] !== 0 && \n                (world[ y+pos.y ] && world[y + pos.y][x + pos.x]) !== 0) {\n                    return true;\n                }\n            }\n        }\n    \n    }\n    \n    function createPiece(type){\n        switch(type) {\n            case 't':\n                return [\n                    [1,1,1],\n                    [0,1,0],\n                    [0,0,0]\n                ]\n                \n        case 'o':\n            return [\n                [2,2],\n                [2,2]\n            ]\n            case 's':\n                return [\n                    [0,3,3],\n                    [3,3,0],\n                    [0,0,0]\n                ]\n                case 'z':\n                    return [\n                        [4,4,0],\n                        [0,4,4],\n                        [0,0,0]\n                    ]\n                    case 'li':\n                        return [\n                [0,5,0,0],\n                [0,5,0,0],\n                [0,5,0,0],\n                [0,5,0,0]\n            ]\n        case 'l': \n        return [\n            [0,6,0],\n                [0,6,0],\n                [0,6,6]\n            ]\n            case 'j':\n                return [\n                    [0,7,0],\n                    [0,7,0],\n                [7,7,0]\n            ]\n            \n            \n        }\n    }\n    \n    //PLAYER LOGIC\n    function changePlayerPos(coor, amt){\n        player.pos[coor] += amt\n        if (collide(world, player)) {\n            player.pos[coor] -= amt;\n        }\n    }\n\nfunction playerReset(){\n    if(gameOver()){\n        //game over\n        stop()\n        cancelAnimationFrame(reqId);\n    }\n    \n    player.matrix = nextPiece;\n    nextPieceToShow();\n    player.pos.y = 0;\n    player.pos.x = Math.floor(world[0].length/2 ) - Math.floor(player.matrix[0].length /2)\n    \n}\n\nfunction playerDrop(){\n    player.pos.y++;\n    if (collide(world, player)) {\n        player.pos.y--\n        merge(world, player);\n        playerReset();\n        worldSweep();\n        updateScore();\n    }\n    dropCounter = 0;\n}\n\nfunction playerRotate(direction){\n    const originalPosX = player.pos.x;\n    let offset = 1;\n    rotate(player.matrix, direction);\n    while (collide(world, player)){\n        player.pos.x += offset;\n        offset = -(offset + (offset > 0 ? 1: -1));\n        //a check to see if were bouncing out too much\n        if (offset > player.matrix[0].length) {\n            rotate(player.matrix, -direction);\n            player.pos.x = originalPosX;\n            return;\n        }\n    }\n}\n\n//turn, then reverse\nfunction rotate(matrix, direction) {\n    for (let y = 0; y < matrix.length; ++y){\n        for (let x = 0; x < y; ++x){\n            [\n                matrix[x][y],\n                matrix[y][x]\n            ] = [\n                matrix[y][x],\n                matrix[x][y]\n                \n            ];\n        }\n    }\n    //rotates cw\n    if(direction > 0) {\n        matrix.forEach(row => row.reverse())\n    } else {\n        //rotates ccw\n        matrix.reverse();\n    }\n}\n\ndocument.addEventListener('keydown', (e) =>{\n    switch(e.keyCode){\n        case 65:\n            case 37:\n                if (isRunning){\n                    changePlayerPos('x', -1)\n                }\n                break;\n                case 83:\n                    case 40:\n                        if (isRunning){\n                playerDrop();\n            }\n            break;\n            case 68:\n                case 39:\n                    if (isRunning){\n                        changePlayerPos('x', 1)\n                    }\n                    break;\n        case 81: //q\n        // console.log('rotate ccw')\n            if (isRunning) {\n                playerRotate(-1)\n            }\n            break;\n            case 69:\n                case 38:\n                    // console.log('rotate cw');\n                    if (isRunning){\n                playerRotate(1)\n            }\n            break;\n            case 80:\n                // console.log(\"pause\")\n                if (isRunning) {\n                    pause();\n                    \n            } else if(gameOver()){\n                return;\n            } else {\n                resume()\n            }\n            default:\n                break;\n            }\n        });\n        \n        function resume() {\n            requestAnimationFrame(update)\n            isRunning = true;\n            startBtn.disabled = true;\n            pauseBtn.innerHTML= \"Pause\"\n        }\n        \n        //firebase stuff\n        var highscore = 0;\n        function getHighScore(){\n            const highscorespan = document.getElementById(\"high-score\")\n            let scores; \n            ref.once('value').\n            then(function(data) {\n                scores = data.val()\n                if (scores) {\n                    let keys = Object.keys(scores)\n                    for (var i = 0; i < keys.length; i++) {\n                        let curScore = scores[keys[i]].score\n                        if (curScore > highscore) highscore = curScore;\n                    }\n                }\n                highscorespan.innerHTML = `High Score: ${highscore}`\n            });\n            \n            \n}\n\nfunction newHighScore() {\n    \n    return player.score > highscore;\n}\n\nfunction handleNewHighScore() {\n    //handle high score logic\n    document.getElementById(\"congrats-message\").style.visibility = \"visible\"\n    highscore = player.score;\n    document.getElementById(\"high-score\").innerHTML = `High Score: ${highscore}`;\n}\n\nlet scoreBtn = document.getElementById(\"submit-score-btn\")\nscoreBtn.addEventListener(\"click\", e => {\n    addScoreToDb()\n})\nfunction addScoreToDb() {\n    let name = document.getElementById(\"player-name\").value;\n    if (!name.length) {\n        name = \"Anon\";\n    }\n    \n    let score = player.score;\n    \n    Object(_firebase_js__WEBPACK_IMPORTED_MODULE_0__[\"submitScore\"])(score, name);\n    document.querySelector(\".game-over-modal\").classList.toggle(\"show-modal\");\n}\n\n}); //end\n\n//# sourceURL=webpack:///./assets/scripts/tetris.js?");

/***/ })

/******/ });