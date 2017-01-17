import React from "react";
import { Link } from 'react-router'
// Import sub-components
 import Auth  from "./children/Auth";
// import Register  from "./children/Register";


// Helper Function
//import helpers from "./utils/Helpers";


//define class
class Main extends React.Component {

constructor(props) {
	super(props);
  this.state = {
    loggedIn : Auth._loggedIn()
  }
  this._handleClick = this._handleClick.bind(this);
  this._setLogin = this._setLogin.bind(this);
  this._updateAuth = this._updateAuth.bind(this);
}

  _updateAuth(loggedIn) {
    this.setState({
      loggedIn 
    })
  }

  componentWillMount() {
    Auth._onChange = this._updateAuth
    Auth._login()
  }

  _handleClick(event) {
    console.log(this.state.loggedIn);
    event.preventDefault();
    Auth._logOut();
    //this.setState(loggedIn,false);
  }

  _setLogin(newLog){
    console.log(newLog);
  }

 render() {
    return (

      <div>
        <ul>
          <li>
            {this.state.loggedIn ? (
              <Link to="logout">Log out</Link>
            ) : (
              <Link to="/login">Sign in</Link>
            )}
          </li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link> (authenticated)</li>
        </ul>
        {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
      </div>
      
    );
  }
}

// Export the componen back for use in other files
export default Main;



