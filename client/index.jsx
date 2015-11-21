Index = React.createClass({
  componentWillMount() {
    // Update the page's title
    document.title = "SemanticBase | A meteor react boilerplate with Semantic UI";
  },
  render() {
    return (
      <div className="ui">
        <h1>Home</h1>
      </div>
    );
  }
});
