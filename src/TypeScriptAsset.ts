export = parseInt(process.versions.node, 10) < 8
  ? require('parcel-bundler/lib/assets/TypeScriptAsset.js')
  : require('parcel-bundler/src/assets/TypeScriptAsset.js');
