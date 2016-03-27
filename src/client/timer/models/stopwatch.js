class Stopwatch {
  constructor($elem) {
    this.time = 0
    this.isOn = false
    this.$elem = $elem
    this.update = this.update.bind(this)
  }

  start() {
    if (!this.isOn) {
      this.reset()
      this.offset = Date.now()
      this.interval = setInterval(this.update, 10)
      this.isOn = true
    }
  }

  stop() {
    if (this.isOn) {
      clearInterval(this.interval)
      this.isOn = false
    }
  }

  reset() {
    this.time = 0
    this.update()
  }

  update() {
    if (this.isOn) {
     this.time += this.delta()
    }

    const formattedTime = this.timeFormatter(this.time)
    this.$elem.text(formattedTime)
  }

  delta() {
    const now = Date.now()
    const timePassed = now - this.offset
    this.offset = now
    return timePassed
  }

  timeFormatter(milliseconds) {
    const padZero = (time) => `0${time}`.slice(-2)

    const minutes = padZero(milliseconds / 60000 | 0)
    const seconds = padZero((milliseconds / 1000 | 0) % 60)
    const centiseconds = padZero((milliseconds / 10 | 0) % 100)

    return `${minutes} : ${seconds} . ${centiseconds}`
  }
}

export default Stopwatch
