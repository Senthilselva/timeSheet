//import react 
import React from "react";
import {Col, Card, Row, Input, Button} from "react-materialize";
import { withRouter } from 'react-router'
//auth function
import Auth  from "./Auth";

// Helper Functicon
import helpers from "../utils/Helpers";
//const Login = withRouter(
class Login extends React.Component {
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

        // const { location } = this.props

        // if (location.state && location.state.nextPathname) {
        //   //this.props.router.replace(location.state.nextPathname)
        //     this.props.router.replace('/dashboard');
        // } else {
        //   this.props.router.replace('/')
        // }
      })
        
    }
//*******************Changed 0n 1/11/17 
// *******few changed from 
// *********https://github.com/ReactTraining/react-router/blob/master/examples/auth-flow
        // event.preventDefault();
        // console.log("CLICK");
        // //console.log(this);
        // //console.log(this.props);
        // console.log(this.props.route);
        // console.log(this.state.email + "  "+this.state.password);
        // helpers._checkLogin(this.state.email,this.state.password)
        // .then(function(userData,err){
        //     console.log("handle submit"+userData)
        //     Auth._setToken(userData)
        //     console.log(err)
        //     // this.props._setLog("akakakakaka")
        //})
        
    //}

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
                            {this.state.error && (
                                <p>Bad login information</p>
                            )}
						</Row>
    				</form>
				</Card> 
			</Col>
		</Row>
    	);
	}//render

}//React.Component
//)

// Export the componen back for use in other files
export default Login;