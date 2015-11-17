Items = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      items: ItemsCollection.find({}).fetch()
    };
  },
  componentWillMount() {
    // Update the page's title
    document.title = "Items";
  },
  addItem(e) {
    e.preventDefault();
    var item = this.refs.input.value;

    ItemsCollection.insert({'content': item});
    this.refs.input.value = "";
  },
  render() {
    return (
      <div className="row">
        <ul>
          {this.data.items.map((item) => {
            return <li key={item._id}>{item.content}</li>;
          })}
        </ul>
        <div className="col-xs-8 col-sm-6 col-md-4">
          <form onSubmit={this.addItem}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Item" ref="input"/>
            </div>
            <button className="btn btn-primary" type="submit">Add Item</button>
          </form>
        </div>
      </div>
    );
  }
});
