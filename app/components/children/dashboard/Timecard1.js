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
			endTime:null,
			yourStartTime:Date.now(),
			jobId:0,
			userId:0,
			isClockOut : false
		};
		this._onClockOut = this._onClockOut.bind(this);
	}

	_onClockOut(){
		console.log("_onClockOut");
		console.log("User Id "+ this.state.userId)
		console.log("Job Id "+ this.state.jobId)
		var timeNow=Date.now();
		this.setState({ endTime : timeNow });

		//alert("time Now "+ timeNow )
		//alert("endTime "+ this.state.endTime);
		
	}

	componentDidUpdate(){
		console.log("componentDidUpdate  "+this.state.endTime)
		if(this.state.endTime != null ) {
			Helpers._updateTimecard(this.state.userId,this.state.jobId,this.state.endTime)
			.then(function(data){
				console.log("data after update ");
				// console.log("data after update "+JSON.stringify(data));
				//this.setState({ isClockOut:true })
				Helpers._getTimeSheets();
			})//.bind(this))
		}
	}
	componentWillMount() {
		console.log("componentWillMount");
		//var vTimecard = Helpers._getOneSchedule(this.props.clockInId);
		Helpers._getOneSchedule(this.props.clockInId)
			.then(function(newSchedule){
				//console.log("llllllllllllllllllllllllll" + JSON.stringify(newSchedule));
			 	var newTimeSheet = {};
			 	newTimeSheet.JobId= newSchedule.data.JobId;
			 	newTimeSheet.UserId= newSchedule.data.UserId;
			 	
				newTimeSheet.clockIn = Date.now();
				Helpers._createTimecard(newTimeSheet)
					.then(function(newdata){
						//console.log("newSchedule :"+ JSON.stringify(newSchedule));
						//console.log("New Data :"+ JSON.stringify(newdata));
						var vTimecard = newSchedule.data;
						//console.log("back from helper in componentWillMount "+ JSON.stringify(vTimecard))
						this.setState({ name : vTimecard.firstname });
						this.setState({ job : vTimecard.jobname });
						this.setState({ city : vTimecard.jobcity });
						this.setState({ todate : vTimecard.startDate });
						this.setState({ time : vTimecard.startTime });
						this.setState({ yourStartTime : Date.now()})
						this.setState({jobId : vTimecard.JobId});
			 		 	this.setState({userId : vTimecard.UserId});
			 		 	this.setState({endTime : null})
						console.log("after set state in componentWillMount "+ JSON.stringify(vTimecard))


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
				<button type="button" onClick={this._onClockOut}>Clock-out</button>
				
				<p> You worked from {this.state.yourStartTime} 
					to {this.state.endTime} </p>
		
		</div>
		);
	}
}
export default Timecard;