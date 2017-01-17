import React from "react";

//import helper file
import Helpers from '../../utils/Helpers.js';

class Timecard extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		console.log("componentWillMount");
		Helpers._getOneSchedule(this.props.clockInId);
      	// .then(function(userData,err){
      	// 	console.log(JSON.stringify(userData))
       //  	//this.setState({scheduleTables:userData.data});
      	// }.bind(this));
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