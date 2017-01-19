import React from "react";
//auth function
import Auth  from "./Auth";


class Home extends React.Component {
	constructor(props) {
        super(props);
    }

    render() {

    	return ( <h3> Welcome Time Trax!! </h3>);

  	}
}

// Export the component back for use in other files
export default Home;