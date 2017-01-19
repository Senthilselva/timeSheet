import Helpers from "./helpers.js";

module.exports = {
    
    _login(email, password, cb) {
        cb = arguments[arguments.length - 1]

        if (localStorage.token) {
            if (cb) cb(true)
            this._onChange(true)
            return
        }
        Helpers._checkLogin(email,password)
         .then(function(userData,err){
            if(!err){
                console.log("handle submit"+userData)
                this._setToken(userData)
                if (cb) cb(true)
                this._onChange(true)
            } else {
            console.log("error"+ err)
                if (cb) cb(false)
                this._onChange(false)
            }
        }.bind(this));
    },

    _loggedIn() {
      console.log(localStorage.token)
        return !!localStorage.token
    },

    _setToken(userData){
        console.log("_setToken"+ JSON.stringify(userData));
        localStorage.token = Math.random().toString(36).substring(7);
        localStorage.setItem("userName",userData.data.username);
        console.log("userName"+userData.data.username);
        console.log(localStorage);
    },

    _logout(cb) {
        delete localStorage.token;
          localStorage.clear();
        if (cb) cb()
        this._onChange(false)
    },

    _getToken() {
        return localStorage.token
    },

    _onChange() {}
}