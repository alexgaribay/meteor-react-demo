Meteor.startup(function(){
  // Create a demo user
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({'username': 'demo', 'password': 'password'});
  }
});