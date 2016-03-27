import { randEl } from '../../util'

function generateScramble() {
  const faces = ['U', 'L', 'F', 'D', 'R', 'B']
  const numTurns = 25
  const numFaces = faces.length
  const suffixes = ['', '\'', '2']

  let turns = []
  let lastIndex = Math.floor(Math.random() * numFaces)
  let randIndex

  for (let i = 0; i < numTurns; i++) {
    do {
      let n = Math.floor(Math.random() * (numFaces - 1)) + 1
      randIndex = (lastIndex + n) % numFaces
    } while (
      (lastIndex % 3) === (randIndex % 3) &&
      turns[i - 2] &&
      (turns[i - 2].face % 3) === (randIndex % 3)
    )

    lastIndex = randIndex
    turns.push({
      face: randIndex,
      suffix: randEl(suffixes)
    })
  }

  let scramble = turns.map(turn => faces[turn.face] + turn.suffix)
  return scramble.join(' ')
}

export default generateScramble
