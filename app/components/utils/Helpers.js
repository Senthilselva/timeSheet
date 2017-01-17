// Include the axios package for performing HTTP requests ( based alternative to request)
import axios from "axios";


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

	_getSchedule: () => {
		var vEmail =localStorage.getItem('userName');
		console.log("get Schedule"+vEmail);
		return axios.get("/schedule/user/"+vEmail );
	},

	_getOneSchedule: (id) => {
		console.log("_getOneSchedule  " + id);
		axios.get("/schedule/schedule/"+id )
			.then(function(newSchedule){
				console.log(JSON.stringify(newSchedule));
				var newTimeSheet = {};
				newTimeSheet.JobId= newSchedule.data.JobId;
				newTimeSheet.UserId= newSchedule.data.UserId;
				axios.post("/timesheet/create", newTimeSheet)
					.then(function(newdata){
						console.log("newSchedule :"+ JSON.stringify(newSchedule));
						console.log("New Data :"+ JSON.stringify(newdata));
					})
			})
	} 

}

export default helpers;