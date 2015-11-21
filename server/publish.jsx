Meteor.publish("items", function () {
  return ItemsCollection.find();
});
