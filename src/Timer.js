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
        breakLength: 5,
        sessionLength: 25,
        timerState: 'stopped', // state either stopped, running or paused
        timeLeft: 'mm:ss'
    }
    this.onIncrementBreak = this.onIncrementBreak.bind(this)
    this.onDecrementBreak = this.onDecrementBreak.bind(this)
    this.onIncrementSession = this.onIncrementSession.bind(this)
    this.onDecrementSession = this.onDecrementSession.bind(this)
  }
  onIncrementBreak = () => {
    // disable if timer running
    const currentLength = this.state.breakLength
    if(currentLength < 60){
      return this.setState({breakLength: currentLength + 1})
    }
    
  }
  onDecrementBreak = () => {
    // disable if timer running
    const currentLength = this.state.breakLength
    if(currentLength > 0){
      return this.setState({breakLength: currentLength - 1})
    }
  }
  onIncrementSession = () => {
    // disable if timer running
    const currentLength = this.state.sessionLength
    if(currentLength < 60){
      return this.setState({sessionLength: currentLength + 1})
    }
  }
  onDecrementSession = () => {
    // disable if timer running
    const currentLength = this.state.sessionLength
    if(currentLength > 0){
      return this.setState({sessionLength: currentLength - 1})
    }
  }
  onClickStartStop = () => {
    console.log('start or stop')
    // if timer stopped -  timer begin running from value of session length 
    // if timer running - pause timer
  }
  onClickReset = () => {
    console.log('reset')
    // stop audio element from playing if playing - rewind to beginning of clip
    // break length back to 5 & session length to 25
    // time left reset to default state
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
              {this.state.breakLength}
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
              {this.state.sessionLength}
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
