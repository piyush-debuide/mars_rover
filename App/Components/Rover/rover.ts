import { Directions } from "../../Utils/Constants/contants";
import explore from "./methods/explore";
import Plateau from "../Plateau/plateau";

export interface IPosition {
    x: number;
    y: number;
    direction: Directions;
}

export default class Rover {
    private config: object;
    private position: IPosition = {x: 2, y: 3, direction: Directions.N} // current position hardcoded for demo
    constructor(config: object) {
        this.config = config;
    }

    move(plateau: Plateau, instruction: string) {
        return explore(this.position, instruction, plateau)
    }

    // dummy method for demonstration
    setup(){
        // uses config
        return `Setup successfull`
    }

    // dummy method for demonstration
    takePhoto() {
        // get location logic
        return 'Photo taken'
    }
}