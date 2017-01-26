//import react 
import React from "react";
import Router from "react-router";
import {Col, Card, Row, Input, Button} from "react-materialize";

// Helper Functicon
import helpers from "../../utils/Helpers";

class Register extends React.Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	firstName:"",
	    	lastName:"",
	    	address:"",
	    	city:"",
	    	state:"",
	    	zip:"",
	    	phone:"",
	    	SSN:"",
	    	username: "",
	    	password:""
	    };

	    this._handleChange = this._handleChange.bind(this);
	    this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(event) {
        event.preventDefault();
        helpers._createUser(this.state);
        //send user to login page
        this.props.router.replace('/login');
    }

    _handleChange(event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }


//render- function
	render() {
    	return (
    	<Row>
    		<Col m={4}></Col>	    	
  			<Col m={4}>
    			<Card className='white' textClassName='black-text' title='Create User'>
    				<form onSubmit={this._handleSubmit}>
    					<Row>
    						<Input type="text" 
                            label="First Name" 
                            s={12} 
                            id="firstName"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this._handleChange}
                            required 
                            />

                            <Input type="text" 
                            label="Last Name" 
                            s={12} 
                            id="lastName"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this._handleChange}
                            required 
                            />

                            <Input type="text" 
                            label="Address" 
                            s={12} 
                            id="address"
                            name="address"
                            value={this.state.address}
                            onChange={this._handleChange}
                            required 
                            />

                            <Input type="text" 
                            label="City" 
                            s={12} 
                            id="city"
                            name="city"
                            value={this.state.city}
                            onChange={this._handleChange}
                            required 
                            />

							<Input type="text" 
                            label="State" 
                            s={12} 
                            id="state"
                            name="state"
                            value={this.state.state}
                            onChange={this._handleChange}
                            />

                            <Input type="text" 
                            label="Zip Code" 
                            s={12} 
                            id="zip"
                            name="zip"
                            value={this.state.zip}
                            onChange={this._handleChange}
                            required 
                            />

    						<Input type="email" 
                            label="Email" 
                            s={12} 
                            id="username"
                            name="usermame"
                            value={this.state.username}
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
                            required
                            />

                            <Input type="text" 
                            label="SSN"
                            id="SSN" 
                            s={12} 
                            name="SSN"
                            value={this.state.SSN}
                            onChange={this._handleChange}
                            required
                            />
    						<Button type = "submit"> Register </Button>
						</Row>
    				</form>
				</Card> 
			</Col>
		</Row>
    	);
	}//render

}//React.Component


// Export the componen back for use in other files
export default Register;