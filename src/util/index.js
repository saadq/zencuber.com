export function repeat(times, callback) {
  for (let i = 0; i < times; i++) {
    callback(i)
  }
}

export function randEl(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function timeFormatter(milliseconds) {
  const padZero = (time) => `0${time}`.slice(-2)

  const minutes = padZero(milliseconds / 60000 | 0)
  const seconds = padZero((milliseconds / 1000 | 0) % 60)
  const centiseconds = padZero((milliseconds / 10 | 0) % 100)

  return `${minutes} : ${seconds} . ${centiseconds}`
}

export function getElapsedTime(startedAt, stoppedAt = Date.now()) {
  return startedAt ? (stoppedAt - startedAt) : 0
}

export function generateScramble() {
  const faces = ['U', 'L', 'F', 'D', 'R', 'B']
  const numTurns = 25
  const numFaces = faces.length
  const suffixes = ['', '\'', '2']

  let turns = []
  let lastIndex = Math.floor(Math.random() * numFaces)
  let randIndex

  repeat(numTurns, (i) => {
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
  })

  let scramble = turns.map(turn => faces[turn.face] + turn.suffix)

  return scramble.join(' ')
}

export function isSpaceKey(keyCode) {
  return keyCode === 32
}
