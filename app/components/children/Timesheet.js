import React from "react";
import {Card, CardActions, CardHeader, CardText} from 'material-ui';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui'
var dateFormat = require('dateformat');
import Overview from "./dashboard/Overview.js"

//import helper file  
import Helpers from '../utils/Helpers.js';
import Auth  from "./Auth";

//alarm, alarm on, alarm off
const iconStyle = { margin: 12 };


class Timesheet extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
    		timeSheets:[],
    		userData:Auth._getData()
  		};
	}

	componentWillMount() {
  	
  		Helpers._getTimeSheets()
      		.then(function(userData,err){
        	this.setState({timeSheets:userData.data});
        	//console.log(timeSheets)
      	}.bind(this));
}//componentWillMount

	render() {
	   
		return(
			<div>
				<Card>
	        		<CardHeader title="Time Sheets" subtitle="Below are your timecards, by date" avatar="assets/images/ic_assignment_black_24dp_2x.png" />
					<Table selectable={true}>
				    	<TableBody displayRowCheckbox={false} showRowHover={true} stripedRows={false}>
				          	{this.state.timeSheets.map(function(row, i){
				            return(
				              <TableRow key={i}> 
				                <TableRowColumn>{row.jobName}</TableRowColumn>
				                <TableRowColumn>{dateFormat(row.startDate, "mm/dd/yyyy")}</TableRowColumn>
				                <TableRowColumn>{row.clockIn}</TableRowColumn>
				                <TableRowColumn>{row.clockOut}</TableRowColumn>
				                <TableRowColumn>{row.reason}</TableRowColumn>
				              </TableRow>
				            );
				          })}
				    	</TableBody>
					</Table>
				</Card>
				
        	</div>
		);
	}
}
export default Timesheet;