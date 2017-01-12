import React from "react";
//auth function
import Auth  from "./Auth";


class Logout extends React.Component {
	constructor(props) {
        super(props);
    }

    componentDidMount() {
        Auth._logout()
    }

    render() {
        return <p>You are now logged out</p>
    }
};

// Export the componen back for use in other files
export default Logout;