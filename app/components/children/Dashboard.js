import React from "react";
//auth function
import Auth  from "./Auth";


class Dashboard extends React.Component {
	constructor(props) {
        super(props);
    }

    render() {
    	 const token = Auth._getToken()

    	return (
      		<div>
	        	<h1>Dashboard</h1>
	        	<p>You made it!</p>
	        	<p>{token}</p>
      		</div>
    )
  	}
}

// Export the component back for use in other files
export default Dashboard;