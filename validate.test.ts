import Plateau from "./plateau"
import validate from "./validate"

describe('Validate', () => {
    const plateau = new Plateau(5,7)

    it('Should return true if x and y co-ordinates lie within plateau', () => {
        expect(validate(3,7, plateau)).toEqual(true)
    })

    it('Should return false if x and y co-ordinates lie out of the plateau', () => {
        expect(validate(3,10, plateau)).toEqual(false)
    })
})
