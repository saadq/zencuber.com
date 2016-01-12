export function timeFormatter(milliseconds) {
  const padZero = (time) => `0${time}`.slice(-2)

  const minutes = padZero(milliseconds / 60000 | 0)
  const seconds = padZero((milliseconds / 1000 | 0) % 60)
  const centiseconds = padZero((milliseconds / 10 | 0) % 100)

  return `${minutes} : ${seconds} . ${centiseconds}`
}

export function getElapsedTime(baseTime, startedAt, stoppedAt = Date.now()) {
   return startedAt ? (stoppedAt - startedAt + baseTime) : 0
}
