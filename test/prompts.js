var assert = require("chai").assert;

require('node-amd-require')({
  baseUrl: __dirname
});

var prompts = require('../src/prompts.js');

var fakeAgreeableWindow = {
  confirm: function(prompt) { return true; }
}

var fakeDisagreeableWindow = {
  confirm: function(prompt) { return false; }
}

describe('Generic links', function() {

  describe('add http protocol', function() {
    it('if user agrees', function() {
      var result = prompts.process(fakeAgreeableWindow, 'www.example.com');
      assert.equal(result, 'http://www.example.com');
    });

    it('but not if the user disagrees', function() {
      var result = prompts.process(fakeDisagreeableWindow, 'www.example.com');
      assert.equal(result, 'www.example.com');
    });
  });
});

describe('Email links', function() {
  describe('add the mailto protocol', function() {
    it('if user agrees', function() {
      var result = prompts.process(fakeAgreeableWindow, 'user@example.com');
      assert.equal(result, 'mailto:user@example.com');
    });

    it('but not if the user disagrees', function() {
      var result = prompts.process(fakeDisagreeableWindow, 'user@example.com');
      assert.equal(result, 'user@example.com');
    });
  })
});

