Emails.provider = {
  send: function (email, updates) {
    var request = _.pick(email, 
      "to",
      "from",
      "subject",
      "html"
      );
    var result = Meteor.Mandrill.send(request);
  }
  , reject: function () {}
};

