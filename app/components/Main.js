import React from "react";

// Import sub-components
import Login  from "./children/Login";


// Helper Function
//import helpers from "./utils/Helpers";


//define class
class Main extends React.Component {
constructor(props) {
	super(props);
//we will need this to check if logged in
    // this.state = {
    // 	isDatabaseChanged:false
    // };

    // this.databaseChanged = this.databaseChanged.bind(this);

}

	// databaseChanged() {
	// 	var isChange = -(this.state.isDatabaseChanged);
	// 	this.setState({ isDatabaseChanged : isChange });
	// }

 render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

// Export the componen back for use in other files
export default Main;



