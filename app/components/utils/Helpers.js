// Include the axios package for performing HTTP requests ( based alternative to request)
import axios from "axios";

//This files make calls the controller
const helpers = {

	_checkLogin: (email, password) => { 
	    return axios.post("/user/login", { username: email,
	                                      password: password });
	  },

	_createUser: (userInfo) => {
	    return axios.post("/user/create", userInfo);
	},

	//gets all the schedule for the user. the user is stored in localStorage
	_getSchedule: () => {
		var vEmail = localStorage.getItem('userName');
		return axios.get("/schedule/user/" + vEmail );
	},

	//gets all the schedule for the user. the user is stored in localStorage
	_getTodaySchedule: () => {
		var vEmail = localStorage.getItem('userName');
		return axios.get("/schedule/user/today/" + vEmail );
	},

	_getOneSchedule: (id) => {
		return axios.get("/schedule/schedule/" + id );
	}, 

	_getScheduleDays: () => {
		var userName = localStorage.getItem('userName');

		return axios.get("/schedule/days/user/" + userName );
	}, 

	_getScheduleForTheDay: (date) => {
		var userName = localStorage.getItem('userName');

		return axios.get("/schedule/userforday/" + userName + "/" + date );
	}, 

	 //to enter the data into the timesheet table
	 //calls timesheet controller
	_createTimecard: (newTimeSheet) => {
		return axios.post("/timesheet/create", newTimeSheet);
	},

	//update the timesheet from endtime
	_updateTimecard:(cardId, time) => {
		return axios.post("/timesheet/update", 
			{ cardId:cardId,
			  clockOut:time });
	},

	_updateInvalidTimecard:(cardId, dis) => {
		var _reason = "Clocked in from "+dis+"Km away."
		return axios.post("/timesheet/invalid", 
			{ cardId:cardId,
			  reason:_reason });
	},

	//gets all the finished jobs for the user the user is got from localStorage
	_getTimeSheets: () => {
		var vEmail =localStorage.getItem('userName');

		//calling the controller and returing the value
		return axios.get("/timesheet/user/" + vEmail );
	}
}

export default helpers;