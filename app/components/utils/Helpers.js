// Include the axios package for performing HTTP requests ( based alternative to request)
import axios from "axios";


const helpers = {
_checkLogin: (email, password) => {
        console.log("checklogin"+ email + "  "+password);

    // return axios.post("/login/user", { title: title,
    //                                   url: url,
    //                                   pub_date: pub_date });
  }

}
 export default helpers;