Package.describe({
  summary: 'YouTube playback technology for Video.js',
  name: 'jrudio:youtubejs', /* Add username to this before publishing */
  version: '1.2.7'
});

Package.onUse(function(api) {
  api.versionsFrom('WINDOWS-PREVIEW@0.0.8');
  api.use('jquery', 'client');

  // Depend on my other package 'jrudio:videojs'
  api.use('jrudio:videojs', 'client');

  var path = Npm.require('path');

  var assetPath = path.join('youtubejs');

  // Add youtube.js
  api.addFiles(path.join(assetPath, 'youtube.js'), 'client');
});