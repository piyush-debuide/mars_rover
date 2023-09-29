import Plateau from "./Components/Plateau/plateau";
import Rover from "./Components/Rover/rover";

const config = {}
const plateau1 = new Plateau(10,10)

const rover1 = new Rover(config)
const rover2 = new Rover(config)

// rover initial position is hardcoded to x: 2 y:3 direction: N
console.log('rover1', rover1.move(plateau1, 'LMRM')) // 1,4,N
console.log('rover2', rover2.move(plateau1, 'LLMMMRM')) // 1,0,W