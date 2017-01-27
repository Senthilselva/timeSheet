import React from "react";
import Auth  from "./Auth";
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardText} from 'material-ui';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui'
import {IconButton, FontIcon} from 'material-ui';
import Helpers from '../utils/Helpers.js';
import SchedulebyDay from './schedule/SchedulebyDay.js'
import Header from './schedule/Header.js'
import dateFormat from "dateformat";

//var dateFormat = require('dateformat');
var today = new Date();

//alarm, alarm on, alarm off
const iconStyle = { margin: 12 };

class Schedule extends React.Component {
	constructor(props) {
        super(props);
	    const userData = Auth._getData();
    	this.state = { 
    		name: userData.firstName,
    		today: today,
    		scheduleDays:[]
		}
  	};

	componentWillMount() {
	  Helpers._getScheduleDays()
	  	.then(function(userData,err){
	        this.setState({scheduleDays: userData.data});
	    }.bind(this));

	}

    render() {
	   	var that = this;
	   	console.log(this.state.scheduleDays)
    	return ( 
    	<div>
    		<Header />
			{this.state.scheduleDays.length <= 0 ? ( 
				<Card>
					<CardText>
			        	No jobs are scheduled for you at this time
			        </CardText>
		        </Card>
		    ): (
		    <div>
		    <Card>
				{this.state.scheduleDays.map(function(row, i){
					return (
						<Card key = {i}>
							{/*<CardHeader title={dateFormat(row.startDate,"mm/dd/yyyy")} 
									subtitle="You have x jobs scheduled for this day" actAsExpander={true} showExpandableButton={true}/>
								<CardText expandable={true}> */}
									<SchedulebyDay day = {row.startDate}/>
								{/*</CardText>*/}
						</Card>
					);
				})}
			</Card>
			<br/>
			</div>
			)}
		
    	</div>
    	);
  	}
}

// Export the component back for use in other files
export default Schedule;