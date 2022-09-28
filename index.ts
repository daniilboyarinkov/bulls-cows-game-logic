import Game from "./src/Entities/Game"
import { ALREADY_TRIED_MESSAGE } from "./src/constants"

let game = Game.getInstance()

try {
  console.log(game.guess("1234"))
  console.log(game.guess("5678"))
  // console.log(game.guess("1234"))
  console.log(game.moves)
  console.log(game.attempts)
  game = Game.setWithRepetitions(true)
  console.log(game.moves)
  console.log(game.attempts)
} catch (e) {
  if ((e as Error).message === ALREADY_TRIED_MESSAGE)
    console.log(ALREADY_TRIED_MESSAGE)
  else console.log("Непредвиденная ошибка")
}
