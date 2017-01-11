import React from "react";

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
}


  _handleClick(event) {
    console.log(this.state.loggedIn);
    event.preventDefault();
    Auth._logOut();
    //this.setState(loggedIn,false);
  }

 render() {
    return (
    <div>
      <p>
            {this.state.loggedIn ? (
              <div>
              <a href="#" onClick={this._handleClick}>Logout</a>
              <h1> { this.state.loggedIn.userName } </h1>
              </div>
            ) : (
              <a href="#/login">Login</a>
            )}
          
          <a href="#/register">Register</a>
      </p>

      <div>

          {/* This code will dump the correct Child Component */}
          {this.props.children}

      </div>
    </div>
    );
  }
}

// Export the componen back for use in other files
export default Main;



