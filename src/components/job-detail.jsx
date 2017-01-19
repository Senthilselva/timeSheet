import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Auth  from "../utils/auth.js";

class jobDetail extends Component {
    constructor(props) {
        super(props);
    }

    handleRedirect(){
        browserHistory.push('/jobs');
    }

    render() {
        const token = Auth._getToken()
        const jobs = this.props.route.data;
        const id = this.props.params.id;
        const job = jobs.filter(job => {
            if(job.id == id) {
                return job;
            }
        });

        return (
            <div>
                <h1>{job[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Name</strong>: {job[0].name}</li>
                       </ul>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to Jobs</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default jobDetail