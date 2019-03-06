import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import MinusIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography'

class Timer extends Component {
  constructor(){
    super()
    this.state={
      currentTimer: 'session',
      breakLength: 300,
      sessionLength: 1500,
      timerState: 'stopped', // state either stopped, running or paused
      timeLeft: 1500,
      min: '25',
      sec: '00'
    }
    this.onClickStartStop = this.onClickStartStop.bind(this)
    this.onClickReset = this.onClickReset.bind(this)
    this.onDecrementBreak = this.onDecrementBreak.bind(this)
    this.onIncrementBreak = this.onIncrementBreak.bind(this)
    this.onIncrementSession = this.onIncrementSession.bind(this)
    this.onDecrementSession = this.onDecrementSession.bind(this)
  }
  onIncrementBreak = () => {
    const length = this.state.breakLength
    length < 3600 && this.state.timerState !== 'running' ? // if timer running or length too high return 
      this.state.currentTimer === 'break' ?   // if current timer on break then reset time left to new break length
        this.setState({breakLength: length + 60, timeLeft: length + 60})  : this.setState({breakLength: length + 60}) 
      : console.log('nothing')
  }
  onIncrementSession = () => {
    const length = this.state.sessionLength
    length < 3600 && this.state.timerState !== 'running' ? // if timer running or length too high return 
      this.state.currentTimer === 'session' ? // if current timer on session then reset time left to new session length
        this.setState({sessionLength: length + 60, timeLeft: length + 60 }) : this.setState({sessionLength: length + 60})   
      : console.log('nothing')
  }
  onDecrementBreak = () => {
    const length = this.state.breakLength
    length > 59 && this.state.timerState !== 'running' ? // if timer running or length too low return
      this.state.currentTimer === 'break' ? // if current timer on break then reset time left to new break length
        this.setState({breakLength: length - 60, timeLeft: length - 60}) : this.setState({breakLength: length - 60}) 
      : console.log('nothing')
  
  }
  onDecrementSession = () =>  {
    const length = this.state.sessionLength
    length > 59 && this.state.timerState !== 'running' ? // if timer running or length too low return
      this.state.currentTimer === 'session' ? // if current timer on session then reset time left to new session length
        this.setState({sessionLength: length - 60, timeLeft: length - 60}) : this.setState({sessionLength: length - 60})
      : console.log('nothing')
      
  }

  onClickStartStop = () => {
    console.log('start or stop')
    // if timer stopped -  timer begin running from value of session length 
    if(this.state.timerState === 'stopped') {
      // setInterval ( someFunc to set state count - 1, every 1000 ms)

      this.myInterval = setInterval( () => {
        const currentTimeLeft = this.state.timeLeft
        this.setState({timeLeft: currentTimeLeft - 1})
      }, 1000)
      return this.setState({timerState:'running'})
    }
    
    else if(this.state.timerState === 'paused'){
      this.myInterval = setInterval( () => {
          const currentTimeLeft = this.state.timeLeft
          this.setState({timeLeft: currentTimeLeft - 1})
        }, 1000)
      return this.setState({timerState:'running'})
    }

    else if(this.state.timerState === 'running'){
      clearInterval(this.myInterval)
      return this.setState({timerState:'paused'})
    }
  }
  onClickReset = () => {
    console.log('reset')
    // stop audio element from playing if playing - rewind to beginning of clip
    // time left reset to default state
    return this.setState({breakLength:300,sessionLength:1500, timerState:'stopped',timeLeft:1500})
  }
  render() {
    return (
      <Paper id='timer'>
        <div id='timer-setting'>
          <div id='break-container' className='setting-container'>
            <Typography id='break-label' className='label' variant='h4'>
              Break Length
            </Typography>
            <Fab 
              id='break-decrement'
              className={'decrementBtn'}
              size='small'
              color='primary'
              onClick={this.onDecrementBreak}
            >
              <MinusIcon />
            </Fab>
            <Typography id='break-length' className='lengthDisplay' variant='h4'>
              {this.state.breakLength / 60}
            </Typography>
            <Fab
              id='break-increment'
              className={'incrementBtn'}
              onClick={this.onIncrementBreak}
              size='small'
              color='primary'
            >
              <AddIcon />
            </Fab>
          </div>
          <div id='session-container' className='setting-container'>
            <Typography id='session-label' className='label' variant='h4'>
              Session Length
            </Typography>
            <Fab
              id='session-decrement'
              onClick={this.onDecrementSession}
              className={'decrementBtn'}
              size='small'
              color='primary'
            >
              <MinusIcon />
            </Fab>
            <Typography id='session-length' className='lengthDisplay' variant='h4'>
              {this.state.sessionLength / 60}
            </Typography>
            <Fab
              id='session-increment'
              className={'incrementBtn'}
              onClick={this.onIncrementSession}
              size='small'
              color='primary'
            >
              <AddIcon />
            </Fab>
          </div>
        </div>
        <div id='timer-display'>
          <div id='time-left'>
            {this.state.timeLeft}          
          </div>
        </div>
        <div id='timer-controls'>
          <Button
            id='start_stop'
            onClick={this.onClickStartStop}
          >
            Start / Stop
          </Button>
          <Button
            id='reset'
            onClick={this.onClickReset}
          >
            Reset
          </Button>
        </div>
      </Paper>
        
    );
  }
}



export default Timer;
