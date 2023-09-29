import Plateau from "./plateau"

describe('Plateau', () => {
    const plateau = new Plateau(5,7)
    it('Should return x co-cordinate of plateau', () => {
        expect(plateau.getX()).toEqual(5)
    })
    
    it('Should return xy co-cordinate of plateau', () => {
        expect(plateau.getY()).toEqual(7)
    })
})