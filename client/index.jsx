Index = React.createClass({
  componentWillMount() {
    // Update the page's title
    document.title = "SemanticBase | A meteor react boilerplate with Semantic UI";
  },
  render() {
    return (
      <div className="ui">
        <h2 className="ui header">
          <i className="home icon"></i>
          <div className="content">
            Home
            <div className="sub header">Welcome to Semantic Base</div>
          </div>
        </h2>
        <div className="ui divider"></div>
      </div>
    );
  }
});
