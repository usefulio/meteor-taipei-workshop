Package.describe({
  name: 'core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.0.3.2');

  // ====== BUILT-IN PACKAGES =======

  

  // ====== 3RD PARTY PACKAGES =======

  api.use('iron:router@1.0.0');
  api.imply('iron:router');

  api.use('alanning:roles@1.2.12');
  api.imply('alanning:roles');

  api.use('ostrio:iron-router-title@0.1.1');

  api.use('okgrow:iron-router-autoscroll@0.0.7');
  api.imply('okgrow:iron-router-autoscroll');

  api.use('dburles:collection-helpers@1.0.3');
  api.imply('dburles:collection-helpers');

  api.use('matb33:collection-hooks@0.7.11');
  api.imply('matb33:collection-hooks');

  api.use('meteorhacks:subs-manager@1.3.0');
  api.imply('meteorhacks:subs-manager');

  api.use('aldeed:collection2@2.3.3');
  api.imply('aldeed:collection2');

  api.use('aldeed:autoform@5.1.2');
  api.imply('aldeed:autoform');

  api.use('materialize:materialize@0.96.1');
  api.imply('materialize:materialize');

  // ====== BOTH =======

  api.addFiles('lib/app.js');

  // ====== SERVER =======

  // ====== CLIENT =======

  // ====== EXPORTS =======

  api.export('App');

});

Package.onTest(function(api) {
  api.use('tinytest');
});
