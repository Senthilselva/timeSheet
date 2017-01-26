import React, {Component} from 'react';
import Router from 'react-router';
import { Link } from 'react-router'
import {AppBar, Drawer, MenuItem, IconButton, IconMenu, FontIcon, FlatButton, Toggle} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Auth  from "./children/Auth";

injectTapEventPlugin();

class LoginLink extends Component {
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

const PulldownMenu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <Link to="#"><MenuItem primaryText="My Profile" /></Link>
    <Link to="/logout"><MenuItem primaryText="Sign out" /></Link>
  </IconMenu>
);

PulldownMenu.muiName = 'IconMenu';

//define class
class Main extends Component {
   constructor(props) {
    super(props);
    this.state = { open: false, loggedIn: Auth._loggedIn() };
    this.handleClose = this.handleClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this._updateAuth = this._updateAuth.bind(this);
  }

  _updateAuth(loggedIn) {
    this.setState({
      loggedIn 
    })
  }

  componentWillMount() {
    Auth._onChange = this._updateAuth
  }

  _handleClick(event) {
    event.preventDefault();
    Auth._logOut();
  }

  handleToggle() {
     this.setState({open: !this.state.open});
   }

  handleClose() {
    this.setState({open: false});
  }

 render() {
    return (

      <div className="mainContainer">
         <AppBar title="TimeTrax" onLeftIconButtonTouchTap={this.handleToggle} iconElementRight={this.state.loggedIn ? <PulldownMenu /> : <LoginLink />} />
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
             <Link to="timesheet"><MenuItem onTouchTap={this.handleClose}>Timesheets</MenuItem></Link>
           </Drawer>
          {this.props.children}
      </div>
      
    );
  }
}
// Export the componen back for use in other files
export default Main;
