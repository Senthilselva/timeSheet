// Include the axios package for performing HTTP requests ( based alternative to request)
import axios from "axios";


const helpers = {

	_checkLogin: (email, password) => {
	    console.log("checklogin"+ email + "  "+password);

	    return axios.post("/user/login", { username: email,
	                                      password: password });
	  },

	_createUser: (userInfo) => {
	    console.log("create user"+JSON.stringify(userInfo));

	    return axios.post("/user/create", userInfo);
	  }

}

export default helpers;