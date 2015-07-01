Package.describe({
  summary: 'v1.2.12 - YouTube playback technology for Video.js',
  name: 'jrudio:youtubejs',
  version: '1.2.12'
});

Package.onUse(function(api) {
  api.versionsFrom('WINDOWS-PREVIEW@0.0.10');
  api.use('jquery', 'client');

  // Depend on my other package 'jrudio:videojs'
  api.use('jrudio:videojs@4.12.7', 'client');

  var path = Npm.require('path');

  var assetPath = path.join('youtubejs');

  // Add youtube.js
  api.addFiles(path.join(assetPath, 'youtube.js'), 'client');
});