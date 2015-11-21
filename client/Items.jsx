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
      <div className="ui">
        <h2 className="ui header">
          <i className="puzzle icon"></i>
          <div className="content">
            Items
            <div className="sub header">Enter your items into the ItemCollection</div>
          </div>
        </h2>
        <div className="ui divider"></div>
        <div className="ui stackable grid">
          <div className="ui five wide column">
            <form onSubmit={this.addItem}>
              <div className="ui action fluid input">
                <input type="text" placeholder="Item" ref="input"/>
                <button className="ui button" type="submit">Add Item</button>
              </div>
            </form>
          </div>
          <div className="ui eleven wide column">
            <div className="ui list">
              {this.data.items.map((item) => {
                return <div className="item" key={item._id}>{item.content}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
});
