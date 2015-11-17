AuthenticatedAppIndex = React.createClass({
  componentWillMount() {
    // Update the page's title
    document.title = "Authenticated App";
  },
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <p>This is the index page for the authenticated app.</p>
        </div>
      </div>
    );
  }
});