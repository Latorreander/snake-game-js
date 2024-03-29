import { onSnake, expandSnake, snakeLevelSpeed, snakeSpeed } from "./snake.js"
import { randomGridPosition } from "./grid.js"

let food = getRandomFoodPosition()

const expansionRate = 1

export function update() {
    
    if(onSnake(food)) {
        expandSnake(expansionRate)
        snakeLevelSpeed(snakeSpeed)
        food = getRandomFoodPosition()
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
        foodElement.style.gridColumnStart = food.x
        foodElement.style.gridRowStart = food.y
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)

}

 function getRandomFoodPosition() {
    let newFoodPosition 

    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }

    return newFoodPosition
}
