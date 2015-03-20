Emails.providerSend = function (email, updates) {
  var request = _.pick(email, 
    "to",
    "from",
    "subject",
    "html"
    );
  var result = Meteor.Mandrill.send(request);
};

Meteor.startup(function () {
  if (Meteor.settings && Meteor.settings.mandrill)
    Meteor.Mandrill.config({
      username: Meteor.settings.mandrill.username
      , key: Meteor.settings.mandrill.key
    });
});