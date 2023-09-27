import { Directions } from "./contants"
import Plateau from "./plateau";
import validate from "./validate";

const explore = (currentX: number, currentY: number, currentDirection: Directions, instruction: string, plateau: Plateau) => {
    let x = currentX;
    let y = currentY;
    const compass = ['N', 'E', 'S', 'W']
    let currentIndex = compass.indexOf(currentDirection);
    let direction: any = currentDirection;
    const instructions = [...instruction]
    instructions.forEach((currentInstruction) => {
        if(currentInstruction === 'L') {
            if(currentIndex === 0) {
                direction = compass[compass.length-1]
                currentIndex = compass.length-1
            }
            else{
                direction = compass[currentIndex-1]
                currentIndex = currentIndex - 1
            }
        }
        else if(currentInstruction === 'R') {
            if(currentIndex === (compass.length - 1)) {
                direction = compass[0]
                currentIndex = 0
            }
            else {
                direction = compass[currentIndex+1]
                currentIndex = currentIndex + 1
            }
        }
        else {
            if(direction === 'N' ) y = y + 1
            else if(direction === 'S') y = y - 1
            else if(direction === 'E') x = x + 1
            else x = x - 1
            const isValid = validate(x, y, plateau)
            if(!isValid) throw Error('Out of range');
        }
    })
    console.log(direction, x, y);
    return {x, y, direction};
}

// explore(3,3,Directions.E,'MMRMMRMRRM')

export default explore;