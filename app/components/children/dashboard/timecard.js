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
			time: Date.now()
		};
	}

	componentWillMount() {
		console.log("componentWillMount");
		//var vTimecard = Helpers._getOneSchedule(this.props.clockInId);
		Helpers._getOneSchedule(this.props.clockInId).then(function(vTimecard){
		console.log("back from helper in componentWillMount "+ JSON.stringify(vTimecard))
		this.setState({ name : vTimecard.firstname });
		this.setState({ job : vTimecard.jobname });
		this.setState({ city : vTimecard.city });
		this.setState({ todate : vTimecard.startDate });
		this.setState({ time : vTimecard.startTime });

		console.log(this.state.city);
      	});
	}//componentWillMount	

	render() {
		return(
		<div>
			<h1> Timsheets </h1>
			<p> { this.props.clockInId } </p>
		</div>
		);
	}
}
export default Timecard;