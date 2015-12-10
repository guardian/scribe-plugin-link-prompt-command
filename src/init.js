define([], function () {

  function init(options) {
    var options = options || {};

    if(!options.transforms) {
      options.transforms = {};
    }

    ['pre', 'post'].forEach(function(key) {
      if(!options.transforms[key]) {
        options.transforms[key] = [];
      }
    });

    return options;
  }

  return {
    init: init
  }
});
