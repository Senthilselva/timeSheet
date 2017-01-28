import React from "react";
import Auth  from "../Auth";
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardText} from 'material-ui';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui'
import {IconButton, FontIcon} from 'material-ui';
import Paper from 'material-ui/Paper';
import Stopwatch from "./Stopwatch.js"
import Distance from "./Distance.js"
import Helpers from '../../utils/Helpers.js';

var dateFormat = require('dateformat');
var today = new Date();

//alarm, alarm on, alarm off
const iconStyle = { margin: 12 };

const style = {
  height: 25,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


class TodaySchedule extends React.Component {
	constructor(props) {
        super(props);
	    const userData = Auth._getData();
    	this.state = { 
    		name: userData.firstName,
    		today: today,
    		scheduleList:[],
    		clockedRow: 0,
    		disableClock:true,
    		distanceBetween:0,
    		cardId:0,
    		clockIn:Date.now(),
    		tCard:"" //this Id is the Id of the timesheet database
		}
		this.handleClockIn = this.handleClockIn.bind(this);
		this.handleClockOut = this.handleClockOut.bind(this);
		this.setDistanceBetween = this.setDistanceBetween.bind(this);

  	};

	componentWillMount() {
		console.log(localStorage.cardId);
		if(localStorage.cardId){
			console.log("inside------------localStorage.cardId---------componentWillMount  "+localStorage.cardId)
			this.setState({cardId : localStorage.cardId});
			this.setState({disableClock : false});
			this.setState({clockedRow : localStorage.clockedRow});
			this.setState({tCard : localStorage.tCard});
			this.setState({distanceBetween : localStorage.distanceBetween});
			this.setState({clockIn : localStorage.clockIn});
		}
	  	Helpers._getTodaySchedule()
	  		.then(function(userData,err){
	        	this.setState({scheduleList: userData.data});
	    	}.bind(this));
	}

 	handleClockIn(index, event){ 
 		event.preventDefault();

    	Helpers._getOneSchedule(index)
			.then(function(newSchedule){
				console.log(newSchedule.database);

				//tCard holds all the information needed to create a time card.
				this.setState({tCard : newSchedule.data});

			 	var newTimeSheet = {};
			 	newTimeSheet.JobId= newSchedule.data.JobId;
			 	newTimeSheet.UserId= newSchedule.data.UserId;
				newTimeSheet.clockIn = Date.now();
    			localStorage.setItem("clockIn", newTimeSheet.clockIn);
    			this.setState({clockIn : newTimeSheet.clockIn});

				Helpers._createTimecard(newTimeSheet)
					.then(function(newdata){
						//this Id is the Id of the timesheet database
						this.setState({ cardId : newdata.data.id});
						//Clock is used to disable the clockIn buttons once logged in
						var tempClock = this.state.disableClock;
						this.setState({ disableClock : !tempClock });
						this.setState({clockedRow : index })
						
						//setting all local storage
						localStorage.setItem("cardId" , this.state.cardId);
    					localStorage.setItem("clockedRow", this.state.clockedRow);
    					localStorage.setItem("tCard",this.state.tCard);
    					localStorage.setItem("distanceBetween", this.state.distanceBetween);
			 		}.bind(this));
			
      	}.bind(this));
  	}

  	componentWillUnmount() {
    	if(this.state.cardId != 0){
    	console.log("componentWillUnmount");
    		
    		localStorage.setItem("distanceBetween", this.state.distanceBetween);

    		//***************************************
    		//Attempting to fix the bug 
    		//moved this code to clock in clock out
    		//****************************************
    		// localStorage.setItem("cardId" , this.state.cardId);
    		// //localStorage.setItem("disableClock",false);
    		// localStorage.setItem("clockedRow", this.state.clockedRow);
    		// localStorage.setItem("tCard",this.state.tCard);
    		// localStorage.setItem("distanceBetween", this.state.distanceBetween);
    	}
  	}

  	setDistanceBetween(dist){
  		dist=Math.floor(dist)
  		this.setState({distanceBetween: dist});
    	localStorage.setItem("distanceBetween", this.state.distanceBetween);

  		Helpers._updateInvalidTimecard(this.state.cardId,dist)
  			.then(function(data,err){
  			//need to add a set time out 
  			}.bind(this));

  	}

  	handleClockOut(index, event){ 
 		event.preventDefault();
 		console.log("Clock In event : " + event);
    	console.log("Clock In Id  : " + index);
    	var clockOutTime = Date.now(); 
    	Helpers._updateTimecard(this.state.cardId, clockOutTime)
				.then(function(data,err){
					this.setState({clockedRow : 0})
					var tempClock = this.state.disableClock;
					this.setState({ disableClock : !tempClock });
					
					//setting all local storage
						localStorage.setItem("cardId" , 0);
    					localStorage.setItem("clockedRow", 0);
    					localStorage.setItem("tCard", 0);
    					localStorage.setItem("distanceBetween", 0);
    					delete localStorage.cardId;

    					console.log("handleClockOut --------------localStorage.cardId---"+localStorage.cardId)

		}.bind(this));
		//delete localStorage.cardId;

  	}
  	
    render() {
	   	console.log ("Today's Schedule:", this.state.scheduleList);
	   	var that = this;

    	return ( 
    	<div>
	      <Card>
	        <CardHeader title="Today's Schedule" subtitle="Below is your schedule for today" avatar="assets/images/ic_schedule_black_24dp_2x.png" />
			{this.state.scheduleList.length == 0 ? (
		        <CardText>
		        	No jobs scheduled for today, {dateFormat(this.state.today, "dddd, mmm dd, yyyy")}
          			<p><Link to="/schedule">View Full Schedule</Link></p>
		        </CardText>

			) : (
		        <CardText>
					<Table selectable={true}>
					    <TableBody displayRowCheckbox={false} showRowHover={true} stripedRows={false}>
					          {this.state.scheduleList.map(function(row, i){

					            return(
					              <TableRow key={i}> 
					                <TableRowColumn>{row.jobName}</TableRowColumn>
					                <TableRowColumn>{row.startTime} to {row.endTime}</TableRowColumn>
					                <TableRowColumn>
										<IconButton onClick={that.handleClockIn.bind(that, row.id)} 
					            					iconClassName="material-icons" tooltip="Clock In" 
					            					tooltipPosition="top-center" disabled={!that.state.disableClock} >alarm</IconButton>
										{/* keeping all clock-out disabled except the one clocked in */}
										{ that.state.clockedRow == row.id ? (
										<span>
											{/* Check for distance */}
											{that.state.distanceBetween < 2 ? (
											<span>
												<IconButton onClick={that.handleClockOut.bind(that, row.id)} 
						          						iconClassName="material-icons" tooltip="Clock Out" 
						          						tooltipPosition="top-center" disabled={that.state.disableClock}>alarm_off</IconButton>
					                			<Stopwatch clockIn = {that.state.clockIn} />
					                			<Distance longitude = {that.state.tCard.joblng}
					                			  	  latitude = {that.state.tCard.joblat} 
					                			  	  setDistanceBetween = {that.setDistanceBetween} />
					                			
					                		</span>
					                		) : (
					                		<Distance longitude = {that.state.tCard.joblng}
					                			  	  latitude = {that.state.tCard.joblat} 
					                			  	  setDistanceBetween = {that.setDistanceBetween} />
					                		
					                		)}
					                	</span>
					                	) : (
					          			<span>
						          			<IconButton onClick={that.handleClockOut.bind(that, row.id)} 
						          						iconClassName="material-icons" tooltip="Clock Out" 
						          						tooltipPosition="top-center" disabled={true}>alarm_off</IconButton>
					                	</span>
					                	
					          			)}	
					          			
				                	</TableRowColumn>
					              </TableRow>
					            );
					          })}
					    </TableBody>
					</Table>		        	
				    <p><Link to="/schedule">View Full Schedule</Link></p>
		        </CardText>
			) }

	      </Card>
    	</div>
    	);
  	}
}

// Export the component back for use in other files
export default TodaySchedule;