import { Directions } from "./contants";
import explore from "./explore";
import Plateau from "./plateau";

export default class Rover {
    private config: object;
    constructor(config: object) {
        this.config = config;
    }

    // dummy method for demonstration
    setup(){
        // uses config
        return `Setup successfull`
    }

    // dummy method for demonstration
    getLocation() {
        // get location logic
        return {x: 2, y: 3, direction: Directions.N}
    }

    move(plateau: Plateau, instruction: string) {
        const {x, y, direction} = this.getLocation()
        return explore(x, y, direction, instruction, plateau)
    }
}