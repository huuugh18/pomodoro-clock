import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import MinusIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography'

import {convertTime,defaultState} from './calcs'

class Timer extends Component {
  constructor(){
    super()
    this.state = defaultState 
    this.onClickStartStop = this.onClickStartStop.bind(this)
    this.onClickReset = this.onClickReset.bind(this)
    this.onDecrementBreak = this.onDecrementBreak.bind(this)
    this.onIncrementBreak = this.onIncrementBreak.bind(this)
    this.onIncrementSession = this.onIncrementSession.bind(this)
    this.onDecrementSession = this.onDecrementSession.bind(this)
  }
  onIncrementBreak = () => {
    const length = this.state.breakLength
    length < 3600  ? //  length too high return 
      this.state.currentTimer === 'break' ?   // if current timer on break then reset time left to new break length
        this.setState({breakLength: length + 60, timeLeft: length + 60})  : this.setState({breakLength: length + 60}) 
      : console.log('max duration reached')
  }
  onIncrementSession = () => {
    const length = this.state.sessionLength
    length < 3600  ? //  length too high return 
      this.state.currentTimer === 'session' ? // if current timer on session then reset time left to new session length
        this.setState({sessionLength: length + 60, timeLeft: length + 60 }) : this.setState({sessionLength: length + 60})   
      : console.log('max duration reached')
  }
  onDecrementBreak = () => {
    const length = this.state.breakLength
    length > 60  ? //  length too low return
      this.state.currentTimer === 'break' ? // if current timer on break then reset time left to new break length
        this.setState({breakLength: length - 60, timeLeft: length - 60}) : this.setState({breakLength: length - 60}) 
      : console.log('min duration reached')
  
  }
  onDecrementSession = () =>  {
    const length = this.state.sessionLength
    length > 60  ? //  length too low return
      this.state.currentTimer === 'session' ? // if current timer on session then reset time left to new session length
        this.setState({sessionLength: length - 60, timeLeft: length - 60}) : this.setState({sessionLength: length - 60})
      : console.log('min duration reached')
      
  }

  onClickStartStop = () => {
    // if timer stopped -  timer begin running from value of session length 
    if(this.state.timerState === 'stopped') {
      this.myInterval = setInterval( () => {
        const timeLeft = this.state.timeLeft
        // check if timer done
        if(timeLeft === 0) {
            this.audio.play()
          // check which timer was used then reset timer with other timer (session / break)
          return this.state.currentTimer === 'session' ? this.setState({timeLeft: this.state.breakLength, currentTimer: 'break'}) : this.setState({timeLeft: this.state.sessionLength, currentTimer: 'session'})
        }
        // if timer not done count down 1 off of current time
        this.setState({timeLeft: timeLeft - 1})
      }, 1000)
      return this.setState({timerState:'running'})
    }
    else {
      clearInterval(this.myInterval)
      return this.setState({timerState:'stopped'})
    }
  }
  onClickReset = () => {
    clearInterval(this.myInterval)
    this.audio.pause()
    this.audio.currentTime = 0
    return this.setState( defaultState )
  }
  render() {
    const displaySession = this.state.sessionLength / 60
    const displayBreak = this.state.breakLength / 60
    const timeDisplay = convertTime(this.state.timeLeft)
    const isTimerRunning = this.state.timerState === 'running'
    return (
      <Paper id='timer'>
        <div id='timer-setting'>
          <div id='break-container' className='setting-container'>
            <audio id={'beep'} preload='auto'src={'https://goo.gl/65cBl1'} ref={ref => this.audio = ref}/>
            <Typography id='break-label' className='label' variant='h4'> Break Length </Typography>
            <Fab  id='break-decrement' className={'decrementBtn'} size='small' color='primary'
              onClick={this.onDecrementBreak}
              disabled={isTimerRunning}
            >
              <MinusIcon />
            </Fab>
            <Typography id='break-length' className='lengthDisplay' variant='h4'> {displayBreak} </Typography>
            <Fab id='break-increment' className={'incrementBtn'}size='small'color='primary'
              onClick={this.onIncrementBreak}
              disabled={isTimerRunning}
            >
              <AddIcon />
            </Fab>
          </div>
          <div id='session-container' className='setting-container'>
            <Typography id='session-label' className='label' variant='h4'> Session Length </Typography>
            <Fab id='session-decrement' className={'decrementBtn'} size='small' color='primary'
              onClick={this.onDecrementSession}
              disabled={isTimerRunning}
            >
              <MinusIcon />
            </Fab>
            <Typography id='session-length' className='lengthDisplay' variant='h4'> {displaySession} </Typography>
            <Fab id='session-increment' className={'incrementBtn'} size='small' color='primary'
              onClick={this.onIncrementSession}
              disabled={isTimerRunning}
            >
              <AddIcon />
            </Fab>
          </div>
        </div>
        <div id='timer-display'>
          <Typography id='timer-label'> {this.state.currentTimer.toUpperCase()} </Typography>
          <div id='time-left'> { timeDisplay } </div>
        </div>
        <div id='timer-controls'>
          <Button  id='start_stop' onClick={this.onClickStartStop} color='primary' variant='contained'> Start / Stop </Button>
          <Button  id='reset' onClick={this.onClickReset} color='secondary' variant='contained'> Reset </Button>
        </div>
      </Paper>
        
    );
  }
}


export default Timer;
