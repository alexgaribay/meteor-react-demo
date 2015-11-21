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
      <div className="ui one column stackable center aligned page grid">
        <div className="column eight wide">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Username" ref="username" value="demo" readOnly/>
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" ref="password" value="password" readOnly/>
            </div>
            <button type="submit" className="ui fluid blue button">Sign In</button>
          </form>
        </div>
      </div>
    );
  }
});
