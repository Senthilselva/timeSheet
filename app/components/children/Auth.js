module.exports = {
	_loggedIn(){
		if(localStorage.token)
			return localStorage;
		else
			return null;
	},

	_setToken(userData){
		console.log("_setToken"+ JSON.stringify(userData));
		localStorage.token = Math.random().toString(36).substring(7);
		localStorage.setItem("userName",userData.data.username);
		console.log("userName"+userData.data.username);
		//localStorage.token.authenticated = true;
		//console.log(JSON.stringify(localStorage.token.object));
		console.log(localStorage);
	},

	_logOut(){
		console.log("Log Out")
		delete localStorage.token;
		localStorage.clear();
	}
}