import generateScramble from './scramble'
import { $timer, $scramble, $nav, $select } from './nodes'
import initButton from './button'
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
  initButton(watch)
}

export default init
