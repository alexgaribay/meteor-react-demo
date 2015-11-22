// A container component for basic views to be rendered in
App = React.createClass({
  render() {
    return (
      <div>

        <div className="ui fluid main container">
          {/* Views will be rendered here */}
          {this.props.children}
        </div>
        <AppNavBar/>
      </div>
    );
  }
});
