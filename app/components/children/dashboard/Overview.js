import React from "react";
import Auth  from "../Auth";
import {Card, CardActions, CardHeader, CardText} from 'material-ui';

//import helper file
import Helpers from '../../utils/Helpers.js';

class Overview extends React.Component {
	constructor(props) {
        super(props);
	    const userData = Auth._getData();
    	this.state = { 
    		name: userData.firstName
    		// totalNumberHoursWorked : 0
    	}
    }

    // componentWillMount() {
    // 	Helpers._getTotalHoursWorked()
	  	// 	.then(function(userData,err){
	  	// 		console.log(userData);
	   //      	this.setState({totalNumberHoursWorked: userData.data});
	   //  }.bind(this));
   	// }

    
    render() {
    	return ( 
	      <Card>
	        <CardHeader title={this.state.name + "'s Overview"} subtitle="" avatar="assets/images/ic_account_circle_black_24dp_2x.png" />
	        <CardText>
	          This section will display an overview of total hours worked for the current week. Needs to be worked on.
	        </CardText>
	      </Card>
    	);
  	}
}

// Export the component back for use in other files
export default Overview;