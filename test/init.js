var assert = require("chai").assert;

require('node-amd-require')({
  baseUrl: __dirname
});

var init = require('../src/init.js');

describe('Init', function() {

  describe('with no options supplied', function() {
    it('should initialise the options', function() {

      var result = init.init();
      var expected = {
        transforms: {
          pre: [],
          post: []
        }
      };

      assert.deepEqual(result, expected);
    });
  });

  describe('with all options supplied', function() {
    it('should respect the users options', function() {
      var myOptions = {
        validation: function(link) { return true; },
        transforms: {
          pre: [function(link) { return "http://www.theguardian.com"}],
          post: [function(link) { return link; }]
        }
      };

      assert.deepEqual(init.init(myOptions), myOptions);
    });
  });

    describe('with some options supplied', function() {
    it('should respect the users options', function() {
      var exampleFunction = function(link) { return link; };

      var myOptions = {
         transforms: {
          post: [exampleFunction]
        }
      };
      var expected = {
         transforms: {
          pre: [],
          post: [exampleFunction]
        }
      };

      var result = init.init(myOptions);
      assert.property(result, 'transforms');
      // We don't care about the order the attributes occur in
      assert.property(result.transforms, 'pre');
      assert.property(result.transforms, 'post');

      assert.sameMembers(result.transforms.pre, expected.transforms.pre);
      assert.sameMembers(result.transforms.post, expected.transforms.post);
    });
  });
});
