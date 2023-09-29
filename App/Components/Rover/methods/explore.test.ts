import { Directions } from "../../../Utils/Constants/contants"
import explore from "./explore"
import Plateau from "../../Plateau/plateau"

it('Should return latest position of rover', () => {
    const plateau = new Plateau(5,5)
    const position = {x: 2, y: 3, direction: Directions.N}
    expect(explore(position,'LMRMRMLMRMRMRM', plateau)).toEqual({x: 2, y: 4, direction: Directions.W})
})

it('Should throw error if position out of range', () => {
    const plateau = new Plateau(4,6)
    const position = {x: 3, y: 7, direction: Directions.N}
    expect(() => explore(position, 'LMRM', plateau)).toThrow('Out of range')
})