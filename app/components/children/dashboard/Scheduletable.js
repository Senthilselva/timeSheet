import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

//import helper file
import Helpers from '../../utils/Helpers.js';

const style = {
  margin: 12,
};



class ScheduleTable extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    scheduleTables:[]
  };

  this._onClockIn = this._onClockIn.bind(this)
}//Constructor

componentWillMount() {
  console.log(Helpers)
  Helpers._getSchedule()
      .then(function(userData,err){
        this.setState({scheduleTables:userData.data});
      }.bind(this));
}//componentWillMount

_onClockIn(event) {
  console.log("on Clock In  " + JSON.stringify(event.target.value));
  this.props._getScheduleClockInId(event.target.value);
}

render(){
  console.log((this.state.scheduleTables));
      var that =this;

    return (
       <table>
        <tr>
          <th>Client</th>
          <th>Date</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Address</th>
          <th></th>
        </tr>
    

          {this.state.scheduleTables.map(function(id,i){
            return(
          <tr key={i}> 
            <td>{id.jobName}</td>
            <td>{id.startDate}</td>
            <td>{id.startTime}</td>
            <td>{id.endTime}</td>
            <td>{id.jobAdd}, {id.jobCity}, {id.jobState}, {id.jobZip} </td>
            {/* <td><RaisedButton type="button" value={id.id} 
            onClick={that._onClockIn.bind(this)} label="Clock In" 
            primary={true} /> </td> 
            */}

            <td><button type="button" value={id.id} onClick={that._onClockIn} 
            style={style}>"Clock-in"</button> </td>
           
          </tr>
            );
          })}
        </table>
    );
}

}//class defination


// Export the componen back for use in other files
export default ScheduleTable;
