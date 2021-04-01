// See http://brunch.io for documentation.
//
// 1. Dependencies and current project directories to watch
// 2. Where to compile files to
// 3. Custom functions are only supported in 'native' mode

exports.overrides = {
  production: {
    paths: {public: "build/assets"}
  }
};

exports.paths = {
  watched: ["app", "../frame"], // 1
  public: ".tmp/assets", // 2
};

exports.files = {
  javascripts: {
    joinTo: {
      //'javascripts/vendor.js': '../frame/*.js',
      'javascripts/scripts.js': 'app/scripts/*.js'
    }
  },
  stylesheets: {
    joinTo: {
      'stylesheets/styles.css': 'app/styles/styles.scss',
      'stylesheets/theme.css': 'app/styles/theme.scss'
    }
  }
};

exports.plugins = {
  sass: {
    mode: 'native', // 3
    options: {includePaths: ['app', '../frame']}
  },
  postcss: {processors: [ require('autoprefixer') ]}
};

exports.modules = {
  autoRequire: {
    "javascripts/scripts.js": ["scripts/application"]
  }
};

exports.npm = {
  enabled: true
};
