import React, { Component } from 'react';
import { Link } from 'react-router';
import Auth  from "../utils/auth.js";

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const token = Auth._getToken()
        // Get data from route props
        const users = this.props.route.data;
        // Map through users and return linked users
        const userNode = users.map((user) => {
            return (
                <Link
                    to={"/user/"+user.id}
                    className="list-group-item"
                    key={user.id}>
                    {user.firstname}
                </Link>
            )
        });
        return (
            <div>
                <h1>Users page</h1>
                <div className="list-group">
                    {userNode}
                </div>
            </div>
        );
    }
}

export default User
