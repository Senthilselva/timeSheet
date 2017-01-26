
import React from "react";
import Auth  from "../Auth";
import {Card, CardActions, CardHeader, CardText} from 'material-ui';

class Header extends React.Component {
	constructor(props) {
        super(props);
	    const userData = Auth._getData();
    	this.state = { name: userData.firstName }
    }
    
    render() {
    	return ( 
	      <Card>
	        <CardHeader title={this.state.name + "'s Full Schedule"} subtitle="Below is your full schedule from today onwards" avatar="assets/images/ic_event_note_black_24dp_2x.png" />
	        <CardText>
	        	If you are scheduled to work, select a date below to view the job sites and times you are assigned for that day. To view the list, click the down arrow to the right of the date.
	        </CardText>
	      </Card>
    	);
  	}
}

// Export the component back for use in other files
export default Header;