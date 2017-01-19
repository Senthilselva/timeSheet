import React from "react";
//auth function

import Homecard  from "./home/Homecard";




class Home extends React.Component {
	constructor(props) {
        super(props);
    }

    render() {

    	return ( <div>
    				<h3> Welcome Time Trax!! </h3>
    				<Homecard />
    			</div>
    			);

  	}
}

// Export the component back for use in other files
export default Home;