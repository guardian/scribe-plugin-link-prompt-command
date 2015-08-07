var assert = require("chai").assert;

require('node-amd-require')({
  baseUrl: __dirname
});

var plugin = require('../src/scribe-plugin-link-prompt-command.js');

describe('Plugin', function() {
  it('should return a function', function() {
    assert.isFunction(plugin);
  });

  it('should accept options', function() {
    assert.isFunction(plugin({}));
  });
});
