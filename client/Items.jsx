Items = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    return {
      items: ItemsCollection.find({}).fetch()
    };
  },
  getInitialState: function() {
    return {};
  },
  addItem: function(e) {
    e.preventDefault();
    var item = React.findDOMNode(this.refs.input).value;

    ItemsCollection.insert({'content': item});
    React.findDOMNode(this.refs.input).value = "";
  },
  render: function () {
    return (
      <div>
        <ul>
          {this.data.items.map(function (item) {
            return <li key={item._id}>{item.content}</li>;
          })}
        </ul>
        <form onSubmit={this.addItem}>
          <input type="text" ref="input"/>
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
});
