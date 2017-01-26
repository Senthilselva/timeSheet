import axios from "axios";

/** Converts numeric degrees to radians */
if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}

const GeoLocation ={


_getDistance:(lon2, lat2) =>{
	console.log("_getDistance")
	var lon1 =0;
  	var lat1 =0;

  	var geo=navigator.geolocation;

  	if (!geo) {
        alert("Geolocation is not supported by this browser.");
  	} else {
        geo.getCurrentPosition(function(position){
        	lon1 = position.coords.longitude;
        	lon2 = position.coords.latitude;

// ---------------to find the distance between-----------------------

        	var R = 6371; // Radius of the earth in km

  			var dLat = (lat2-lat1).toRad();  // Javascript functions in radians
  			var dLon = (lon2-lon1).toRad(); 
  			var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        	Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
        	Math.sin(dLon/2) * Math.sin(dLon/2); 
  
  			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  			var d = R * c; // Distance in km
  			console.log (d)
  			return d;
        });
    }
}

}

export default GeoLocation;