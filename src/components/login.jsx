import React, { Component } from 'react';
import { withRouter } from 'react-router'
import Auth  from "../utils/auth.js";
import helpers from "../utils/helpers.js";
import {Col, Card, Row, Input, Button} from "react-materialize";

class Login extends Component {
	constructor(props) {
        super(props);

        this.state = {
          email: "",
          password:"",
          error: false
        };
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(event) {
        event.preventDefault();
        Auth._login(this.state.email, this.state.password, (loggedIn) => {
        console.log("logedIn "+ loggedIn);
        console.log("props_route" + this.props.route);

        if (!loggedIn)
          return this.setState({ error: true })
        else {
            this.props.router.replace('/dashboard');
        }
      })  
    }

    _handleChange(event) {
        var newState = {};
        console.log(event.target.id + "   " + event.target.value);
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    _handleRedirect() {
        browserHistory.push('/');
    }

	render() {
    	return (
    	<Row>
    		<Col m={4}></Col>	    	
  			<Col m={4}>
    			<Card className='white' textClassName='black-text' title='Login' actions={[<a href='/register'>Change Password</a>]}>
    				<form onSubmit={this._handleSubmit}>
    					<Row>
    						<Input type="email" 
                            label="Email" 
                            s={12} 
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this._handleChange}
                            required 
                            />

    						<Input type="password" 
                            label="Password"
                            id="password" 
                            s={12} 
                            name="password"
                            value={this.state.password}
                            onChange={this._handleChange}
                            />

    						<Button type = "submit"> Login </Button>
                            {this.state.error && (
                                <p>Bad login information</p>
                            )}
						</Row>
    				</form>
				</Card> 
			</Col>
		</Row>
    	);
	}
}

export default Login;
