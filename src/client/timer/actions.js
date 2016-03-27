import { $timerButton } from './nodes'

export function start(watch) {
  watch.start()
  $timerButton.text('Stop')
}

export function stop(watch) {
  watch.stop()
  $timerButton.text('Start')
}
