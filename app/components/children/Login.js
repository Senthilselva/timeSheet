//import react 
import React from "react";
import {Col, Card, Row, Input, Button} from "react-materialize";
import { withRouter, Link } from 'react-router';

//auth function
import Auth  from "./Auth";
// Helper Functicon
import helpers from "../utils/Helpers";

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
        
        //check logged in   
        if (!loggedIn) {
            this.setState({ error: true });
            this.props.router.replace('/login');
          // return 
          //   this.setState({ error: true })
        }
        else {
            //redirect to the dashboard
            //Zeynep
            var userData = Auth._getData();
            if(userData.firstName != "undefined")
              this.props.router.replace('/dashboard');
            else {
              this.setState({ error: true });
              this.props.router.replace('/login');
            }  
            
        }

      })
        
    }

    //catches the entry into text box
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
                <Card className='white' textClassName='black-text' title='Login'>
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
                                <row>
                                <p><strong style={{color:'red'}}>Incorrect credentials</strong></p>
                                </row>
                            )}
                        </Row>
                        <Row>
                            <p>Not registered? <Link to="/register">Register Here</Link></p>
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