import generateScramble from './scramble'
import { $timer, $timerButton, $scramble, $nav, $select } from './nodes'
import { start, stop } from './actions'
import Stopwatch from './models/stopwatch'

function init() {
  initMaterialize()
  initScramble()
  initStopwatch()
}

function initMaterialize() {
  $nav.sideNav()
  $select.material_select()
}

function initScramble() {
  const randScramble = generateScramble()
  $scramble.text(randScramble)
}

function initStopwatch() {
  const watch = new Stopwatch($timer)
  $timerButton.click(() => {
    watch.isOn ? stop(watch) : start(watch)
  })
}

export default init
