Meteor.methods({
  addItem(item) {
    ItemsCollection.insert({'content': item});
  }
});
