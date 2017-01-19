import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Col, Card, Row, Input, Button} from "react-materialize";
import Auth  from "../utils/auth.js";

class userDetail extends Component {
    constructor(props) {
        super(props);
    }

    handleRedirect(){
        browserHistory.push('/users');
    }
    
    render(){
        const token = Auth._getToken()
        const users = this.props.route.data;
        const id = this.props.params.id;
        const user = users.filter(user => {
            if(user.id == id) {
                return user;
            }
        });

        return (
            <Row>
                <Col m={4}></Col>           
                <Col m={4}>
                    <Card className='white' textClassName='black-text' title='User Details'>
                       <ul>
                           <li><strong>First Name</strong>: {user[0].firstname}</li>
                           <li><strong>Last Name </strong>: {user[0].lastname}</li>
                           <li><strong>Email</strong>: {user[0].email}</li>
                           <li><strong>Wage</strong>: {user[0].hourlywage}</li>
                        </ul>
                        <Button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to Users</Button>
                    </Card> 
                </Col>
            </Row>
        );
    }
}

export default userDetail