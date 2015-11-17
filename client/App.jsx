// A container component for basic views to be rendered in
App = React.createClass({
  render() {
    return (
      <div>
        <AppNavBar/>
        <div className="container">
          {/* Views will be rendered here */}
          {this.props.children}
        </div>
      </div>
    );
  }
});
