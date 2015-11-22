const {
  History
} = ReactRouter;

SignIn = React.createClass({
  mixins: [History],
  onFormSubmit(e) {
    e.preventDefault();
    let username = this.refs.username.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({username: username}, password, this.signInCallback);
  },
  signInCallback(error) {
    if (error === undefined) {
      // Navigate to the protected app since the sign in was successful
      this.history.pushState(null, "/app");
    }
    else {
      // Do something with the error in production
    }
  },
  componentWillMount() {
    // Update the page's title
    document.title = "Sign In";
  },
  render() {
    return (
      <div className="ui">
        <h2 className="ui header">
          <i className="privacy icon"></i>
          <div className="content">
            Sign In
            <div className="sub header">Log in with our Guest useraccount</div>
          </div>
        </h2>
        <div className="ui divider"></div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="username">Username</label>
            <div className="ui massive transparent input" >
              <input type="text" id="username" placeholder="Username" ref="username" value="Guest" readOnly/>
            </div>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <div className="ui massive transparent input" >
              <input type="password" id="password" placeholder="Password" ref="password" value="password" readOnly/>
            </div>
          </div>
          <button type="submit" className="ui fluid green button">Sign In</button>
        </form>
      </div>
    );
  }
});
