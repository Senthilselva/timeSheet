import React from "react";
import Scheduletable from "./dashboard/Scheduletable.js"
import Timecard from "./dashboard/Timecard.js"
//auth function
import Auth  from "./Auth";


class Dashboard extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      clockInId : 0,
      isClockOut : false
    };

    this._getScheduleClockInId = this._getScheduleClockInId.bind(this);
  }
    _getScheduleClockInId(id){
      console.log("_getScheduleClockInId " + id)
      this.setState({clockInId:id});
      console.log("_getScheduleClockInId " + this.state.clockInId)
    
    }
    render() {
    	 const userData = Auth._getData();

    	return (
      		<div>
	        	<h1>Dashboard</h1>
	        	<p>Hello!</p>
	        	<p>{userData.firstName} {userData.lastName}</p>

            {this.state.clockInId == 0 ? (
            <Scheduletable _getScheduleClockInId = {this._getScheduleClockInId} /> 
            ) : (
            <Timecard scheduleClockInId = {this.state.clockInId}/>
            ) }
      		</div>
    )
  	}
}

// Export the component back for use in other files
export default Dashboard;