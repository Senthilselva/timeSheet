import React from "react";
import Auth  from "../Auth";
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardText} from 'material-ui';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui'
import {IconButton, FontIcon} from 'material-ui';
import Helpers from '../../utils/Helpers.js';
import dateFormat from "dateformat";

class ScheduleByDay extends React.Component {
	constructor(props) {
        super(props);
	    const userData = Auth._getData();
    	this.state = { 
    		scheduleListOfDay : [],
    		noOfJobs : 0
		}
  	};

  	componentWillMount() {
  		//console.log("hihihih "+ this.props.day)
  		Helpers._getScheduleForTheDay(this.props.day)
	  	.then(function(userData,err){
	        this.setState({scheduleListOfDay: userData.data});
	        this.setState({noOfJobs : userData.data.length})
	    }.bind(this));

  	}


  	render(){
  		var subtitleString = "You have "+this.state.noOfJobs+" jobs scheduled for this day"
  		return(
  			<Card>
  				<CardHeader title={dateFormat(this.props.day,"fullDate")} 
					subtitle={subtitleString} actAsExpander={true} showExpandableButton={true}/>
				<CardText expandable={true}>
  					<Table selectable={true}>
						<TableBody displayRowCheckbox={false} showRowHover={true} stripedRows={false}>
							{this.state.scheduleListOfDay.map(function(row, j){
								return(
				        			<TableRow key={j}> 
				         				<TableRowColumn>{row.jobName}</TableRowColumn>
				            			<TableRowColumn>{dateFormat(row.startDate, "mm/dd/yyyy")}</TableRowColumn>
				            			<TableRowColumn>{row.startTime}</TableRowColumn>
				            			<TableRowColumn>{row.endTime}</TableRowColumn>
				        			</TableRow>
				    			);
							})}
						</TableBody>
					</Table>
				</CardText>
			</Card>
  		);
  	}

}

// Export the component back for use in other files
export default ScheduleByDay;