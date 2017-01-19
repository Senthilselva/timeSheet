import React from "react";

//import helper file
import Helpers from '../utils/Helpers.js';
import Auth  from "./Auth";

class Timesheet extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
    		timeSheets:[],
    		userData:Auth._getData()
  		};
	}

	componentWillMount() {
  		console.log("componentWillMount")
  		Helpers._getTimeSheets()
      		.then(function(userData,err){
        	this.setState({timeSheets:userData.data});
      	}.bind(this));
}//componentWillMount




	render() {
		console.log((this.state.timeSheets));
	    var that =this;
		return(
			<div>
				<p> Timseheets </p>
				<p>{this.state.userData.firstName} {this.state.userData.lastName}</p>
				<table>
        			<tr>
          			<th>Client</th>
          			<th>Date</th>
          			<th>Start Time</th>
          			<th>End Time</th>
          			</tr>
          			{this.state.timeSheets.map(function(id,i){
			            return(
			          		<tr key={i}> 
			            		<td>{id.jobName}</td>
			            		<td>{id.clockedInDate}</td>
			            		<td>{id.clockIn}</td>
			            		<td>{id.clockOut}</td>
			            	</tr>
			            );
          			})}
        		</table>
				
        	</div>
		);
	}
}
export default Timesheet;