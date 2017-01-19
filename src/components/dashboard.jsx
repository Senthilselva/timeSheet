import React, {Component} from "react";
import Auth  from "../utils/auth.js";


class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const token = Auth._getToken()

        return (
            <div>
                <h1>Dashboard</h1>
                <p>You made it!</p>
                <p>token: {token}</p>
            </div>
    )
    }
}

// Export the component back for use in other files
export default Dashboard;