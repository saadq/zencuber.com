export function randEl(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function removeEl(arr, el) {
  let index = arr.indexOf(el)
  arr.splice(index, 1)
}

export function repeat(count, cb) {
  for (let i = 0; i < count; i++) {
    cb(i)
  }
}

export function formatTime(time) {
  time = new Date(time)

  const pad = (timeStr) => {
    return (timeStr.length < 2) ? `0${timeStr}` : timeStr
  }

  let minutes = pad(time.getMinutes().toString())
  let seconds = pad(time.getSeconds().toString())
  let milliseconds = ~~pad(time.getMilliseconds() / 10)

  // Fix for edge case where timer goes from something like
  // 12.99 => 12.100 instead of 12.99 => 13.00
  if (milliseconds.length === 3) {
    milliseconds = milliseconds.slice(1)
    seconds = pad(Number(seconds) + 1)
  }

  return `${minutes} : ${seconds} . ${milliseconds}`
}
