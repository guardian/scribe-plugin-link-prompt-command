var assert = require("chai").assert;

require('node-amd-require')({
  baseUrl: __dirname
});

var transforms = require('../src/transforms.js');

describe('Transforms', function() {
  var link = 'http://www.guardian.co.uk';

  beforeEach(function() {
    link = 'http://www.guardian.co.uk';
  });

  describe('with no transforms', function() {
    it('should return the link unchanged', function() {

      var result = transforms.run([], link);
      assert.equal(result, link);
    });
  });

  describe('with a transform', function() {
    it('should apply the transform', function() {
      var transform = function(link) { return link.replace('guardian.co.uk', "theguardian.com")};
      var result = transforms.run([transform], link);

      assert.equal(result, 'http://www.theguardian.com');
    });
  });

  describe('with multiple transforms', function() {
    it('transforms should be applied in order', function() {
      var a = function(link) { return link.replace('guardian.co.uk', "theguardian.com")};
      var b = function(link) { return link.replace('theguardian', 'thegarden')};

      var result = transforms.run([a, b], link);

      assert.equal(result, 'http://www.thegarden.com');
    });
  });
});
