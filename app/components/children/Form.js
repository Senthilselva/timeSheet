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


      {/*
    // <div>
    //   <div>
    //         {this.state.loggedIn ? (
    //           <div>
    //           <a href="#/logout">Logout</a>
    //           </div>
    //         ) : (
    //           <a href="#/login">Login</a>
    //         )}        
    //           <a href="#/register">Register</a>

    //   </div>

      <div>

          {/* This code will dump the correct Child Component */}
        {/*  {this.props.children}

      </div>
    </div> */}