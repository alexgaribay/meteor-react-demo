AuthenticatedAppIndex = React.createClass({
  componentWillMount() {
    // Update the page's title
    document.title = "Authenticated App";
  },
  render() {
    return (
      <div className="ui">
        <h1>Private Area</h1>
      </div>
    );
  }
});
