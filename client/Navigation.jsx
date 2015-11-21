const {
  Link,
  History
} = ReactRouter;

// Navigation bar for the public app
AppNavBar = React.createClass({
  render() {
    return (
      <NavBar brandRoute="/">
        <NavLink to="/" index>Home</NavLink>
        <NavLink to="/items">Items</NavLink>
        <div className="right menu">
          <NavLink to="/signin">Sign In</NavLink>
        </div>
      </NavBar>
    );
  }
});


// Navigation bar the authentication-protected app
AuthenticatedAppNavBar = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    Meteor.subscribe('users');
    return {
      currentUser: Meteor.user()
    };
  },
  render() {
    return (
      <NavBar brandRoute="/app">
        <NavLink to="/app" index>Private</NavLink>
        <div className="right menu">
          <div className="item">{this.data.currentUser.username}</div>
          <a className="item" onClick={this.props.signOut}>Sign Out</a>
        </div>
      </NavBar>
    );
  }
});

// A reusable component for creating navigation bars
var NavBar = React.createClass({
  render() {
    return (
      <nav className="ui secondary pointing menu">
        <Link className="header item" to={this.props.brandRoute}>SemanticBase</Link>
        {/* Components of the navigation bar will be rendered here */}
        {this.props.children}
      </nav>
    );
  }
});

var NavLink = React.createClass({
  mixins: [History],
  render() {
    let isIndex = this.props.index !== undefined;
    let isActive = this.history.isActive(this.props.to, this.props.query, isIndex);
    let className = isActive ? 'active' : '';

    return (
      <a className={className}><Link className="item" to={this.props.to}>{this.props.children}</Link></a>
    );
  }
});
