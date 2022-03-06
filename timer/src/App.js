import React, { Component } from "react";
import "./timer.css";
import Timer from "./timer.js";
class App extends Component {
  constructor(props) {
    super(props);
    let now = new Date()
    this.state = {
      time: {
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
      }
    }
  }
  interval;
  componentDidMount() {
    this.interval = setInterval(() => {
      this.now = new Date();
      this.setState({
        time: {
          hours: this.now.getHours(),
          minutes: this.now.getMinutes(),
          seconds: this.now.getSeconds()
        }
      })
      console.log('time');
    });
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
      <Timer time={this.state.time}></Timer>
    )
  }
}

export default App;
