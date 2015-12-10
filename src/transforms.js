define([], function () {


  function run(transforms, initialLink) {
    return transforms.reduce(function(currentLinkValue, transform) {
      return transform(currentLinkValue);
      }, initialLink);
  }

  return {
    run: run
  }
});
