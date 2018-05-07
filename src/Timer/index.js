import React from 'react'

export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.tick = this.tick.bind(this)
    this.state = {
      seconds: "0",
      minutes: "0"
    }
  } 
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  } 
  
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  
  tick() {
    let sec = this.state.seconds > 0 ? this.state.seconds : 0
    let mins = this.state.minutes > 0 ? this.state.minutes : 0

    sec++;
    if (sec >= 60) {
      sec = 0;
      mins++;
    }

    let new_time = {
      seconds: sec,
      minutes: mins
    };

    this.setState((prevState) => ({
      seconds: new_time.seconds,
      minutes: new_time.minutes,
    })
  )}
  
  render () {  
    return (
      <div id="timer">
        <p>{(this.state.minutes ? (this.state.minutes > 9 ? this.state.minutes : "0" + this.state.minutes) : "00") + ":" + (this.state.seconds > 9 ? this.state.seconds : "0" + this.state.seconds)}</p>
      </div>
    )
  }
}