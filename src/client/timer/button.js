import { $timerButton } from './nodes'
import { isSpaceKey } from '../../util/keys'
const $ = window.$

function initButton(watch) {
  $timerButton.click(() => {
    watch.isOn ? stop(watch) : start(watch)
  })

  let justStopped = false

  $(window).keyup(e => {
    const key = e.which

    if (watch.isOn) {
      return
    }

    if (justStopped) {
      justStopped = false
    } else if (isSpaceKey(key)) {
      e.preventDefault()
      start(watch)
    }
  })

  $(window).keydown(e => {
    const key = e.which

    if (isSpaceKey(key)) {
      e.preventDefault()
    }

    if (watch.isOn) {
      stop(watch)
      justStopped = true
    }
  })
}

function start(watch) {
  watch.start()
  $timerButton.text('Stop')
}

function stop(watch) {
  watch.stop()
  $timerButton.text('Start')
}

export default initButton
