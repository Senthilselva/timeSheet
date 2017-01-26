import React from "react";
import Homecard  from "./home/Homecard";

class Home extends React.Component {
	constructor(props) {
        super(props);
    }

    render() {
    	return ( 
    		<Homecard />
    		);
  	}
}

// Export the component back for use in other files
export default Home;