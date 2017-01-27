import React from "react";
import Paper from 'material-ui/Paper';

/** Converts numeric degrees to radians */
if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}

const style = {
  height: 25,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Distance extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	dist : 0
    	}
  	};

  	componentWillMount() {
  		console.log(this.props.longitude)
  		var lon2 = this.props.longitude;
  		var lat2 = this.props.latitude;
  		//console.log("hbfkaejwewngewnjn")
  		console.log( lon2 + lat2)
  		var geo=navigator.geolocation;

  		if (!geo) {
        	alert("Geolocation is not supported by this browser.");
  		} else {
        	geo.getCurrentPosition(function(position){
        		var lon1 = position.coords.longitude;
        		var lat1 = position.coords.latitude;

				// ---------------to find the distance between-----------------------

        		var R = 6371; // Radius of the earth in km

  				var dLat = (lat2-lat1).toRad();  // Javascript functions in radians
  				var dLon = (lon2-lon1).toRad(); 
  				var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        		Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
        		Math.sin(dLon/2) * Math.sin(dLon/2); 
  
  				var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  				var d = R * c; // Distance in km
          d = d*0.621; //miles
  				console.log (d)
  				this.props.setDistanceBetween(d)
  				this.setState({dis : d})
        	}.bind(this));
        }
    }

    render(){
      	return(
        	<Paper style={style} zDepth={1}>
       		You are {Math.floor(this.state.dis)} Miles away </Paper>
   		)
    }
}

// Export the component back for use in other files
export default Distance;