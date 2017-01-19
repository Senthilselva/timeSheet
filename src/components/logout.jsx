import React, {Component} from "react";
import Auth  from "../utils/auth.js";

class Logout extends Component {
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

export default Logout;