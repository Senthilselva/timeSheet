import React from "react";

//import helper file
import Helpers from '../../utils/Helpers.js';

class Timecard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name : "",
			job : "",
			city: "",
			toDate: Date.now(),
			originalStartTime: Date.now(),
			yourStartTime:Date.now(),
			isUpdated: false
		};
	}

	componentWillMount() {
		console.log("componentWillMount");
		//var vTimecard = Helpers._getOneSchedule(this.props.clockInId);
		Helpers._getOneSchedule(this.props.clockInId)
			.then(function(newSchedule){
				console.log("llllllllllllllllllllllllll" + JSON.stringify(newSchedule));
			 	var newTimeSheet = {};
			 	newTimeSheet.JobId= newSchedule.data.JobId;
			 	newTimeSheet.UserId= newSchedule.data.UserId;
				newTimeSheet.clockIn = Date.now();
				Helpers._createTimecard(newTimeSheet)
					.then(function(newdata){
						console.log("newSchedule :"+ JSON.stringify(newSchedule));
						console.log("New Data :"+ JSON.stringify(newdata));
						var vTimecard = newSchedule.data;
						console.log("back from helper in componentWillMount "+ JSON.stringify(vTimecard))
						this.setState({ name : vTimecard.firstname });
						this.setState({ job : vTimecard.jobname });
						this.setState({ city : vTimecard.jobcity });
						this.setState({ todate : vTimecard.startDate });
						this.setState({ time : vTimecard.startTime });
						this.setState({ yourStartTime : Date.now()})

			 		}.bind(this));
			

		console.log(this.state.city);
      	}.bind(this));
	}//componentWillMount	

	render() {
		return(
		<div>
			<h1> Timsheets </h1>
			<p> { this.props.clockInId } </p>
			<p> Name: {this.state.name} </p>
			<p> Job: {this.state.job} </p>
			<p> Started At: {this.state.yourStartTime}</p>
		</div>
		);
	}
}
export default Timecard;