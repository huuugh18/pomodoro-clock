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
    this.onClickStartStop = this.onClickStartStop.bind(this)
    this.onClickReset = this.onClickReset.bind(this)
    this.onDecrementBreak = this.onDecrementBreak.bind(this)
    this.onIncrementBreak = this.onIncrementBreak.bind(this)
    this.onIncrementSession = this.onIncrementSession.bind(this)
    this.onDecrementSession = this.onDecrementSession.bind(this)
  }
  onIncrementBreak = () => this.state.breakLength < 60 && this.state.timerState !== 'running' ? this.setState({breakLength: this.state.breakLength + 1}) : console.log('nothing')
  onDecrementBreak = () => this.state.breakLength > 0 && this.state.timerState !== 'running' ? this.setState({breakLength: this.state.breakLength - 1}) : console.log('nothing')
  onIncrementSession = () => this.state.sessionLength < 60 && this.state.timerState !== 'running' ? this.setState({sessionLength: this.state.sessionLength + 1 }) : console.log('nothing')
  onDecrementSession = () =>  this.state.sessionLength > 0 && this.state.timerState !== 'running' ? this.setState({sessionLength: this.state.sessionLength - 1}) : console.log('nothing')

  onClickStartStop = () => {
    console.log('start or stop')
    // if timer stopped -  timer begin running from value of session length 
    if(this.state.timerState === 'stopped') {return this.setState({timerState:'running'})}

    else if(this.state.timerState === 'paused'){return this.setState({timerState:'running'})}

    else if(this.state.timerState === 'running'){return this.setState({timerState:'paused'})}
  }
  onClickReset = () => {
    console.log('reset')
    // stop audio element from playing if playing - rewind to beginning of clip
    // time left reset to default state
    return this.setState({breakLength:5,sessionLength:25, timerState:'stopped',timeLeft:25})
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
