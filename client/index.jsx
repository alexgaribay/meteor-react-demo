Index = React.createClass({
  componentWillMount() {
    // Update the page's title
    document.title = "SemanticBase | A meteor react boilerplate with Semantic UI";
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
