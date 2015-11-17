const {
  History
} = ReactRouter;

// A container component for views requiring authentication to be rendered in
AuthenticatedApp = React.createClass({
  mixins: [ReactMeteorData, History],
  getMeteorData() {
    // Reactively know if the user is authenticated
    return {
      isAuthenticated: Meteor.userId() !== null
    };
  },

  signOut(e) {
    e.preventDefault();

    // Log out the user and navigate back to the home page on success
    Meteor.logout(this.signOutCallback);
  },
  signOutCallback(error) {
    if (error === undefined) {
      this.history.pushState(null, "/");
    }
  },

  componentWillMount() {
    // Check that the user is logged in before the component mounts
    if (!this.data.isAuthenticated) {
      this.history.pushState(null, '/signin');
    }
  },
  // When the data changes, this method is called
  componentDidUpdate(prevProps, prevState) {
    // Now check that they are still logged in. Redirect to sign in page if they aren't.
    if (!this.data.isAuthenticated) {
      this.history.pushState(null, '/signin');
    }
  },
  render() {
    return (
      <div>
        <AuthenticatedAppNavBar signOut={this.signOut}/>
        <div className="container">
          {/* Views will be rendered here */}
          {this.props.children}
        </div>
      </div>
    );
  }
});