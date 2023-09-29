import { Directions } from "../../../Utils/Constants/contants"
import Plateau from "../../Plateau/plateau";
import { IPosition } from "../rover";
import validate from "../../../Utils/Validate/validate";

const explore = (position: IPosition, instruction: string, plateau: Plateau) => {
    let x = position.x;
    let y = position.y;
    const initialDirection = position.direction;
    const compass = [Directions.N, Directions.E, Directions.S, Directions.W]
    let currentIndex = compass.indexOf(initialDirection);
    let direction: Directions = initialDirection;
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
            if(direction === 'N' ) {
                y = y + 1
            }
            else if(direction === 'S') {
                y = y - 1
            }
            else if(direction === 'E') {
                x = x + 1
            }
            else {
                x = x - 1
            }
            const isValid = validate(x, y, plateau)
            if(!isValid) {
                throw Error('Out of range')
            };
        }
    })
    // console.log(direction, x, y);
    return {x, y, direction};
}

// explore(3,3,Directions.E,'MMRMMRMRRM', new Plateau(5,5))

export default explore;