export function repeat(times, callback) {
  for (let i = 0; i < times; i++) {
    callback(i)
  }
}

export function randEl(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function getSteps(mode) {
  switch (mode) {
    case 'beginner':
      return ['Layer 1', 'Layer 2', 'Edges', 'Corners']

    case 'cfop':
      return ['Cross', 'F2L', 'OLL', 'PLL']

    case 'roux':
      return ['Block 1', 'Block 2', 'CMLL', 'L6E']
  }
}
