import React from "react";

// Import sub-components
// import Login  from "./children/Login";
// import Register  from "./children/Register";


// Helper Function
//import helpers from "./utils/Helpers";


//define class
class Main extends React.Component {

constructor(props) {
	super(props);
}

 render() {
    return (
    <div>
      <p>
          <a href="#/login">Login</a>
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



