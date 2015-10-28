define([], function () {

  'use strict';

  function emptyLink(string) {
    return /\w/.test(string);
  }

  return {
    emptyLink: emptyLink
  };
});
