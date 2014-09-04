// This packkage is using an older version of video.js - v4.7.3
// There is an error if it is updated to the latest version
Package.describe({
  summary: "Meteor v0.8.3: Use this package to control youtube & locally hosted videos on your site. Credits to eXon(youtubejs) & Brighthouse(videojs)",
  version: "1.0.0",
  name: "jrudio",
  git: "https://github.com/jrudio/meteor-youtubejs.git"
});

Package.on_use(function(api){
  api.use(['jquery'], 'client');
  api.add_files([
  'lib/video-js.min.css',
  'lib/video.js',
  'lib/video-js.swf',
  'lib/youtube.js'
  ], 'client');

  api.add_files([
    'dist/font/vjs.eot',
    'dist/font/vjs.svg',
    'dist/font/vjs.ttf',
    'dist/font/vjs.woff'
  ], 'client', {
    isAsset: true
  });

  api.add_files([
    'video-js-override.min.css'
  ], 'client');
});