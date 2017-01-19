import React, {Component} from 'react';
import Router from 'react-router';
import { Link } from 'react-router'
import {AppBar, Drawer, MenuItem, IconButton, IconMenu, FontIcon, FlatButton, Toggle} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Auth  from "./children/Auth";
import Header from "./children/Header";

injectTapEventPlugin();

class Login extends Component {
  constructor(props) {
    super(props);
    this.muiName = 'FlatButton';
  }

  render() {
    return (
      <Link to="/login"><FlatButton {...this.props} label="Login" /></Link>
    )
  }
}

class Logged extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <IconMenu {...props}
        iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <Link to="/profile"><MenuItem primaryText="Profile" /></Link>
        <Link to="/logout"><MenuItem primaryText="Logout" /></Link>
      </IconMenu>    
    )
  }
};

Logged.muiName = 'IconMenu';

//define class
class Main extends Component {
   constructor(props) {
    super(props);
    this.state = { open: false, loggedIn: Auth._loggedIn() };
    this.handleClose = this.handleClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this._setLogin = this._setLogin.bind(this);
    this._updateAuth = this._updateAuth.bind(this);
  }

  _updateAuth(loggedIn) {
    this.setState({
      loggedIn 
    })
  }

  componentWillMount() {
    Auth._onChange = this._updateAuth
    Auth._login()
    console.log("In Main.js: Augh._loggedIn=" + Auth._loggedIn());
  }

  _handleClick(event) {
    console.log(this.state.loggedIn);
    event.preventDefault();
    Auth._logOut();
    //this.setState(loggedIn,false);
  }

  handleToggle() {
     this.setState({open: !this.state.open});
   }

  handleClose() {
    this.setState({open: false});
  }


 _setLogin(newLog){
    console.log(newLog);
  }

 render() {
    return (

      <div className="mainContainer">
         <AppBar title="TimeTrax" onLeftIconButtonTouchTap={this.handleToggle} iconElementRight={<Login />} />
           <Drawer containerStyle={{height: 'calc(100% - 64px)', top: 64}}
                   docked={false}
                   openDrawerOffset={0.2} // 20% gap on the right side of drawer
                   panCloseMask={0.2}
                   closedDrawerOffset={-3}
                   styles={{
                     main: {paddingLeft: 3}
                   }}
                   tweenHandler={(ratio) => ({
                     main: { opacity:(2-ratio)/2 }
                   })}
                   width={200}
                   open={this.state.open}
                   onRequestChange={(open) => this.setState({open})}
                   >


             <Link to="dashboard"><MenuItem onTouchTap={this.handleClose}>Dashboard</MenuItem></Link>
             <Link to="schedule"><MenuItem onTouchTap={this.handleClose}>Schedule</MenuItem></Link>
             <Link to="timesheet"><MenuItem onTouchTap={this.handleClose}>Time Sheets</MenuItem></Link>
           </Drawer>
          {this.props.children}
      </div>
      
    );
  }
}

// Export the componen back for use in other files
export default Main;



