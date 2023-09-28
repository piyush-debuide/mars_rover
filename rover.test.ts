import Plateau from "./plateau"
import Rover from "./rover"

const explore = jest.requireActual('./explore')
const mockedExplore = jest.spyOn(explore, 'default')

describe('Rover', () => {
    const config = {name: 'rover1', id: '0001'}
    const plateau1 = new Plateau(3,5) 
    const rover1 = new Rover(config)

    // ignore
    it('Should setup successfully', () => {
        expect(rover1.setup()).toEqual('Setup successfull')
    })

    // ignore
    it('Should get location successfully', () => {
        expect(rover1.getLocation()).toEqual(expect.anything())
    })

    it('Should explore plateau', () => {
        rover1.move(plateau1, 'LMLLM')
        expect(mockedExplore).toHaveBeenCalled()
    })
})