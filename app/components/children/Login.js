//import react 
import React from "react";
import {Col, Card, Row, Input} from "react-materialize";

class Search extends React.Component {
	constructor(props) {
    super(props);
    }

//render- function
	render() {
    	return (
    	<Row>	    	
  			<Col m={6}>
    			<Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
    				<Row>
    					<Input placeholder="Placeholder" s={6} label="First Name" />
    					<Input s={6} label="Last Name" />
    					<Input type="password" label="password" s={12} />
    					<Input type="email" label="Email" s={12} />
					</Row>
    			</Card>
			</Col>
		</Row>
    	);
	}//render

}//React.Component


// Export the componen back for use in other files
export default Search;