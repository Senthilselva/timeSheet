//import react 
import React from "react";
import {Col, Card, Row, Input, Button} from "react-materialize";

class Login extends React.Component {
	constructor(props) {
    super(props);
    }

//render- function
	render() {
    	return (
    	<Row>
    		<Col m={4}></Col>	    	
  			<Col m={4}>
    			<Card className='white' textClassName='black-text' title='Login' actions={[<a href='#'>Change Password</a>]}>
    				<form id="loginUser" class="create-form" action="/user/login" method="POST">
    					<Row textClassName='white-text'>
    						<Input type="email" label="Email" s={12} />
    						<Input type="password" label="Password" s={12} />
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