import React from "react";

//auth function
import Auth  from "./Auth";

class Timecard extends React.Component {
	constructor(props) {
		super(props);
	};
}

render() {
	return(
		<div>
			<h1> Timsheets </h1>
			<p> { this.props.scheduleClockInId } </p>
		<div>
	);
}

}
export default Timecard;