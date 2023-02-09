 import { getInputDirection } from "../js/input.js";
 import { accumulateScore } from "./score.js";
 import { accumulateLevel } from "./level.js";

 
 
 export let snakeSpeed = 4;

 const snakeBody = [
     { x: 11, y: 9 } 
]

let newSegments = 0
 

 export function update() {
    addSegments()
    const inputDirection = getInputDirection()

    for(let i = snakeBody.length - 2; i >= 0; i-- ) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
 }

  export function draw(gameBoard) {
    snakeBody.forEach(square =>{
        const snakeElement = document.createElement('div')
        snakeElement.style.gridColumnStart = square.x
        snakeElement.style.gridRowStart = square.y
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)

    })
 }

 export function expandSnake(amount) {
    newSegments += amount
    
 }

 export function addSegments() {
    for(let i = 0; i < newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
        accumulateScore(snakeBody.length -1)
        accumulateLevel(snakeBody.length - 1)
    }
    
    newSegments = 0
    
 }

 export function onSnake(position, {ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) =>{
        if(ignoreHead && index === 0) return

        return position.x === segment.x && position.y === segment.y
    })
 }

  export function getSnakeHead() {
     return snakeBody[0]
 }

 export function snakeIntersection() {
    return onSnake(getSnakeHead(), {
        ignoreHead: true
    })
 }

 export function snakeLevelSpeed(speed) {
     return speed = snakeSpeed += 1.5
 }