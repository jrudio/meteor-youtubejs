Package.describe({
  summary: 'YouTube playback technology for Video.js; credit to eXon',
  name: 'jrudio:youtubejs',
  version: '0.0.4_8'
});

Npm.depends({
  path: "0.4.9"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use('jquery', 'client');

  var path = Npm.require('path');

  var assetPath = path.join('youtubejs');

  api.addFiles(path.join(assetPath, 'lib', 'video-js.min.css'), 'client');
  api.addFiles(path.join(assetPath, 'lib', 'video.js'), 'client');
  api.addFiles(path.join(assetPath, 'lib', 'video-js.swf'), 'client');
  api.addFiles(path.join(assetPath, 'lib', 'youtube.js'), 'client');

  api.addFiles(path.join(assetPath, 'fonts', 'vjs.eot'), 'client', { isAsset: true });
  api.addFiles(path.join(assetPath, 'fonts', 'vjs.svg'), 'client', { isAsset: true });
  api.addFiles(path.join(assetPath, 'fonts', 'vjs.ttf'), 'client', { isAsset: true });
  api.addFiles(path.join(assetPath, 'fonts', 'vjs.woff'), 'client', { isAsset: true });

  api.addFiles(path.join('video-js-override.css'), 'client');
});