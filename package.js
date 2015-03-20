Package.describe({
  name: 'cwohlman:emails-mandrill',
  version: "0.2.0-1",
  // Brief, one-line summary of the package.
  summary: 'Send emails using mandrill',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/cwohlman/meteor-emails-mandrill.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('cwohlman:emails@0.5.0-0');
  api.use('wylio:mandrill@0.2.1');

  api.imply('cwohlman:emails');

  api.addFiles('emails-mandrill.js', ['server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cwohlman:emails-mandrill');
  api.addFiles('emails-mandrill-tests.js');
});
