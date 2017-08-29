/**
 * @flow
 */

function timeFormatter(elapsed: number): string {
  const time = new Date(elapsed)
  const seconds = time.getSeconds().toString()
  const milliseconds = time.getMilliseconds().toString().padStart(3, '0')

  return `${seconds}.${milliseconds}`
}

export {
  timeFormatter
}
