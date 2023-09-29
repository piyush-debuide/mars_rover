export default class Plateau {
    private xCoordinate: number;
    private yCoordinate: number;
    constructor(x: number, y:number) {
        this.xCoordinate = x;
        this.yCoordinate = y
    }

    getX() {
        return this.xCoordinate;
    }

    getY() {
        return this.yCoordinate;
    }
}
