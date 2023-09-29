import { Directions } from "./contants"
import explore from "./explore"
import Plateau from "./plateau"

it('Should return latest position of rover', () => {
    const plateau = new Plateau(4,4)
    expect(explore(2,3,Directions.N,'LMRMRMRMRMRM', plateau)).toEqual({x: 1, y: 4, direction: Directions.N})
})

it('Should throw error if position out of range', () => {
    const plateau = new Plateau(4,6)
    expect(() => explore(3,7,Directions.N,'LMRM', plateau)).toThrow('Out of range')
})