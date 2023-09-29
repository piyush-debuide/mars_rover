import Plateau from "./plateau";

const validate = (x: number, y: number, plateau: Plateau) => {
    const plateauX = plateau.getX();
    const plateauY = plateau.getY();
    if((x > plateauX || x < 0) || (y > plateauY || y < 0)) {
        return false
    }
    else {
        return true
    }
}

export default validate;