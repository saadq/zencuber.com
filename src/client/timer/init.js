import generateScramble from './scramble'
import Stopwatch from './models/stopwatch'
import { createBreakpoints } from './services'
import { isSpaceKey } from '../../util/keys'
import * as nodes from './nodes'
const $ = window.$

const state = {
  step: 0,
  mode: null,
  inspection: null
}

function init() {
  initMaterialize()
  initScramble()
  initMenus()

  const watch = new Stopwatch(nodes.$timer)
  initStopwatch(watch)
}

function initMaterialize() {
  nodes.$nav.sideNav()
  nodes.$select.material_select()
}

function initMenus() {
  nodes.$mode.on('change', e => {
    state.mode = $(e.currentTarget).val()

    if (state.mode !== 'normal') {
      createBreakpoints(state.mode)
    }
  })

  nodes.$inspection.on('change', e => {
    state.inspection = $(e.currentTarget).val()
  })
}

function initScramble() {
  const randScramble = generateScramble()
  nodes.$scramble.text(randScramble)
}

function initStopwatch(watch) {
  nodes.$timerButton.on('click', () => {
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
  nodes.$timerButton.text('Stop')
}

function stop(watch) {
  watch.stop()
  nodes.$timerButton.text('Start')
  sendSolve()
}

function sendSolve() {
  const solve = {
    scramble: nodes.$scramble.text(),
    time: nodes.$timer.text(),
    date: new Date().toLocaleString()
  }

  const timeEntry = $(`<li>${solve.time}</li>`)
  const closeIcon = $('<i class="material-icons right">close</i>')
  timeEntry.append(closeIcon)
  nodes.$times.prepend(timeEntry)

  const newScramble = generateScramble()
  nodes.$scramble.text(newScramble)

  $.ajax({
    type: 'POST',
    url: '/solve',
    dataType: 'json',
    data: solve
  })
}

export default init
