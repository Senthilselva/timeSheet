import React, {Component} from 'react';
import { Link } from 'react-router';
import Router from 'react-router';
import {AppBar, Drawer, MenuItem, IconButton, IconMenu, FontIcon, FlatButton, Toggle} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Auth  from "./Auth";

//injectTapEventPlugin();

class Login extends Component {
  constructor(props) {
    super(props);
    this.muiName = 'FlatButton';
  }

  render() {
    return (
      <Link to="/login"><FlatButton label="Login" /></Link>
    )
  }
}

const Logged = function(props) {
  <IconMenu {...props}
    iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <Link to="/profile"><MenuItem primaryText="Profile" /></Link>
    <Link to="/logout"><MenuItem primaryText="Logout" /></Link>
  </IconMenu>
};

Logged.muiName = 'IconMenu';

class Header extends Component {
   constructor(props) {
     super(props);
     this.state = { open: false, loggedIn: Auth._loggedIn() };
     this.handleToggle = this.handleToggle.bind(this);
   }

   handleToggle() {
     this.setState({open: !this.state.open});
   }

  render() {
       return (
         <div>
           <Link to="/home">
           <AppBar title="TimeTrax" onLeftIconButtonTouchTap={this.handleToggle} 
                                    iconElementRight={this.state.loggedIn ? <Logged /> : <Login />}
                           />
             </Link>
             <Drawer containerStyle={{height: 'calc(100% - 64px)', top: 64}}
                     docked={true}
                     tapToClose={true}
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


               <Link to="/dashboard"><MenuItem>Dashboard</MenuItem></Link>
               <Link to="/timesheets"><MenuItem>Time Sheets</MenuItem></Link>
               <Link to="/schedule"><MenuItem>Schedule</MenuItem></Link>
               <Link to="/login"><MenuItem>Login</MenuItem></Link>
             </Drawer>
         </div>
       )
   }
}

export default Header;
