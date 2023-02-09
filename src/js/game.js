import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead,  snakeIntersection } from "../js/snake.js";
import { update as updateFood, draw as drawFood } from "../js/food.js"

import { outSideGrid } from "./grid.js";

const gameBoard = document.getElementById('game-board')


let lastRenderTime = 0;
let gameOver = false

requestAnimationFrame(main);

 export function main(currentTime) {

    if(gameOver) {
        if(confirm('GAME OVER!')){
            location = '/'
        }
        return
    }
    requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

    if (secondsSinceLastRender < 1 / snakeSpeed) return;

    lastRenderTime = currentTime;
    
    update()
    draw()
}

function update() {
    updateSnake()
    updateFood()
    checkDeath()
   
}

function draw() {
    gameBoard.innerHTML = ""
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersection()
}

