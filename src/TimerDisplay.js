import React, { Component } from 'react';

import NumPadButton from './NumPadBtn'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Alert from 'react-bootstrap/Alert'
import {numbers,operators} from './constants'

class Timer extends Component {
  constructor(){
    super()
    this.state={
        something: 'default state',
    }
    this.someFunction = this.someFunction.bind(this)
  }
  someFunction = () => {
    console.log('do something')
  }
  
  render() {
    return (
        <Paper id='timer-display'>
                    
      </Paper>
        
    );
  }
}



export default Timer;
