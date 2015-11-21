AuthenticatedAppIndex = React.createClass({
  componentWillMount() {
    // Update the page's title
    document.title = "Authenticated App";
  },
  render() {
    return (
      <div className="ui">
        <h2 className="ui header">
          <i className="lock icon"></i>
          <div className="content">
            Private Area
            <div className="sub header">Dashboard & Settings</div>
          </div>
        </h2>
        <div className="ui divider"></div>
      </div>

    );
  }
});
