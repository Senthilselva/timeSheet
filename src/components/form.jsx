<p>
  {this.state.loggedIn ? (
    <div>
      <a href="#" onClick={this._handleClick}>Logout</a>
      <h1> { this.state.loggedIn.userName } </h1>
    </div>
  ) : (
  <a href="#/login">Login</a>
  )}

  <a href="#/register">Register</a>
</p>
