Index = React.createClass({
  componentWillMount() {
    // Update the page's title
    document.title = "Meteor And React Demo";
  },
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <p>This is the index route.</p>
        </div>
      </div>
    );
  }
});
