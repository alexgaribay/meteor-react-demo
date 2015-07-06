var {
  Router,
  Route
} = ReactRouter;


Routes = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function () {
    return (
      <Router history={ReactRouter.lib.BrowserHistory.history}>
        <Route component={App}>
          <Route path="items" component={Items}/>
        </Route>
      </Router>
    );
  }
});
