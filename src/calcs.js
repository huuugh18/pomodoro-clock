export const convertTime = time => {
  let min = Math.floor(time / 60)
  let sec = time - (min*60)
  min = min < 10 ? `0${min}` : min
  sec = sec < 10 ? `0${sec}` : sec
  const displayTime = `${min}:${sec}`
  if (displayTime === '00:00'){
    console.log(displayTime)
  }
  return displayTime
}

export const defaultState = {
    currentTimer: 'session',
    breakLength: 300,
    sessionLength: 1500,
    timerState: 'stopped', // state either stopped or running
    timeLeft: 1500,
}