import React from "react";

//auth function
import Auth  from "./Auth";

// Helper Functicon
import helpers from "../utils/Helpers";

class Logout extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      email: "",
      password:""
    };
     this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(event) {
        event.preventDefault();
        console.log("CLICK");
        console.log(this.state.email + "  "+this.state.password);
        var userData = helpers._checkLogin(this.state.email,this.state.password);
        Auth._setToken(userData)
        console.log(userData)
    }

    _handleChange(event) {
        var newState = {};
        console.log(event.target.id +"   "+event.target.value);
        newState[event.target.id] = event.target.value;
        this.setState(newState);
        
    }


//render- function
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
						</Row>
    				</form>
				</Card> 
			</Col>
		</Row>
    	);
	}//render

}//React.Component


// Export the componen back for use in other files
export default Login;