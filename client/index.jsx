Index = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function () {
    return (
      <div>
        <p>This is the index route.</p>
        <ReactRouter.Link to="/items">Show me the items.</ReactRouter.Link>
      </div>
    );
  }
});
