Meteor.publish("items", function () {
  return ItemsCollection.find();
});

Meteor.publish("users", function () {
  return Meteor.users.find();
});
