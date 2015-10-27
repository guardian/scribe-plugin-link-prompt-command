var assert = require("chai").assert;

require('node-amd-require')({
  baseUrl: __dirname
});

var plugin = require('../src/scribe-plugin-link-prompt-command.js');
var checks = require('../src/checks.js');

describe('Plugin', function() {
  it('should return a function', function() {
    assert.isFunction(plugin);
  });

  it('should accept options', function() {
    assert.isFunction(plugin({}));
  });

  it('should accept a validation function', function() {
    assert.isFunction(plugin({validation: function(url) {return undefined; }}));
  });
});

describe('Checks', function() {
  describe('emptyLink', function() {
    it('should reject strings containing only whitespace', function() {
      ['\n\n', '   \t', ' ', ''].forEach(function(invalidLink) {
        assert.isFalse(checks.emptyLink(invalidLink), invalidLink + ' was considered valid');
      });
    });

    it('should consider genuine links as valid', function() {
      ['http://www.theguardian.com', 'https://www.theguardian.com'].forEach(function(validLink) {
        assert.isTrue(checks.emptyLink(validLink), validLink + ' was considered invalid');
      });
    });
  });
});
