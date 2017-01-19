// Include the axios package for performing HTTP requests ( based alternative to request)
import axios from "axios";

//This files make calls the controller
const helpers = {

	_checkLogin: (email, password) => {
		console.log( arguments.length+"  "+JSON.stringify(arguments[0])+" "
			        +JSON.stringify(arguments[1]));
	    console.log("checklogin"+ email + "  "+password);

	    return axios.post("/user/login", { username: email,
	                                      password: password });
	  },

	_createUser: (userInfo) => {
	    console.log("create user"+JSON.stringify(userInfo));

	    return axios.post("/user/create", userInfo);
	},

	//gets all the schedule for the user the user is got from localStorage
	_getSchedule: () => {
		var vEmail =localStorage.getItem('userName');
		console.log("get Schedule"+vEmail);
		return axios.get("/schedule/user/"+vEmail );
	},

	_getOneSchedule: (id) => {
		console.log("_getOneSchedule  " + id);
		return axios.get("/schedule/schedule/"+id );
	}, 

	 //to enter the data into the timesheet table
	 //calls timesheet controller
	_createTimecard: (newTimeSheet) => {
		console.log("_createTimecard" + JSON.stringify(newTimeSheet));
		return axios.post("/timesheet/create", newTimeSheet);
	},

	_updateTimecard:(cardId, time) => {
		console.log("_updateTimecard "+cardId+ " "+ time)
		return axios.post("/timesheet/update", 
			{ cardId:cardId,
			  clockOut:time })
	},

	//gets all the finished jobs for the user the user is got from localStorage
	_getTimeSheets: () => {
		var vEmail =localStorage.getItem('userName');
		console.log("get Schedule"+vEmail);

		//calling the controller and returing the value
		return axios.get("/timesheet/user/"+vEmail );
	}

}

export default helpers;