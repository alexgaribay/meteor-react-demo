const {
  History
} = ReactRouter;

SignIn = React.createClass({
  mixins: [History],
  getInitialState: function () {
    return {};
  },
  onFormSubmit: function(e) {
    e.preventDefault();
    let username = React.findDOMNode(this.refs.username).value.trim();
    let password = React.findDOMNode(this.refs.password).value.trim();

    Meteor.loginWithPassword({username: username}, password, this.signInCallback);
  },
  signInCallback: function(error) {
    if (error === undefined) {
      // Navigate to the protected app since the sign in was successful
      this.history.pushState(null, "/app");
    }
    else {
      // Do something with the error in production
    }
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Username" ref="username" value="demo" readOnly/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" ref="password" value="password" readOnly/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
});