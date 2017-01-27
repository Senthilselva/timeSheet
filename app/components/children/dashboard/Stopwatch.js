var React = require("react");
import Chip from 'material-ui/Chip';
import {blue200, indigo900} from 'material-ui/styles/colors';
import Moment from "moment"

const leftPad = (width, n) => {
  if ((n + '').length > width) {
    return n;
  }
  const padding = new Array(width).join('0');
  return (padding + n).slice(-width);
};

const styles = {
  chip: {
    margin: 4
  },
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  }
}

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    
    ["lap", "update", "reset"].forEach((method) => {
      this[method] = this[method].bind(this);
    });

    this.state = this.initialState = {
      isRunning: true,
      lapTimes: [],
      timeElapsed: 0,
    };
  }
  
  componentWillMount() {
      this.state.isRunning ? this.startTimer() : this.reset()
  }
  
  componentWillUnmount () {
    //console.log("umount...............");
    this.reset();
  }
  lap() {
    const {lapTimes, timeElapsed} = this.state;
    this.setState({lapTimes: lapTimes.concat(timeElapsed)});
  }
  reset() {
    clearInterval(this.timer); 
    this.setState(this.initialState);
  }
  startTimer() {

    //this.startTime = Date.now();
    console.log("this.props.clockIn" + this.props.clockIn)
    this.startTime = this.props.clockIn;

    this.timer = setInterval(this.update, 10);
  }
  update() {
    const delta = Date.now() - this.startTime;
    this.setState({timeElapsed: this.state.timeElapsed + delta});
    this.startTime = Date.now();
  }
  render() {
    const {isRunning, lapTimes, timeElapsed} = this.state;
    return (
      <Chip
        style={styles.chip}
        backgroundColor={blue200} >
       
          <TimeElapsed id="timer" timeElapsed={timeElapsed} />
       
      </Chip>
    );
  }
}

class TimeElapsed extends React.Component {
  getUnits() {
    const seconds = this.props.timeElapsed / 1000;
    return {
      hr: Math.floor(seconds / 3600).toString(),
      min: Math.floor(seconds / 60).toString(),
      sec: Math.floor(seconds % 60).toString(),
    };
  }
  render() {
    const units = this.getUnits();
    return (
      <div id={this.props.id}>
        <span>{leftPad(2, units.hr)}:</span>
        <span>{leftPad(2, units.min)}:</span>
        <span>{leftPad(2, units.sec)}</span>
      </div>
    );
  }
}

module.exports = Stopwatch;