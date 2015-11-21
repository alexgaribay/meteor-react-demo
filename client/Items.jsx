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
      <div className="ui grid">
        <div className="ui column">
          <form onSubmit={this.addItem}>
            <div className="ui action fluid input">
              <input type="text" placeholder="Item" ref="input"/>
              <button className="ui button" type="submit">Add Item</button>
            </div>
          </form>
          <div className="ui list">
            {this.data.items.map((item) => {
              return <div className="item" key={item._id}>{item.content}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }
});
