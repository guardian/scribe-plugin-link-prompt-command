
define(['./checks',
  './init',
  './prompts',
  './transforms'], function (checks, init, prompts, transforms) {


  /**
   * This plugin adds a command for creating links, including a basic prompt.
   */

  'use strict';

  return function (options) {
    var options = init.init(options);

    return function (scribe) {
      var linkPromptCommand = new scribe.api.Command('createLink');

      linkPromptCommand.nodeName = 'A';

      linkPromptCommand.execute = function (passedLink) {
        var link;
        var selection = new scribe.api.Selection();
        var range = selection.range;
        var anchorNode = selection.getContaining(function (node) {
          return node.nodeName === this.nodeName;
        }.bind(this));

        var initialLink = anchorNode ? anchorNode.href : '';

        if (!passedLink)  {
          link = window.prompt('Enter a link.', initialLink);
        } else {
          link = passedLink;
        }

        link = transforms.run(options.transforms.pre, link);

        if(!checks.emptyLink(link)) {
          window.alert('This link appears empty');
          return;
        }

        if(options && options.validation) {
          var validationResult = options.validation(link);

          if(!validationResult.valid) {
            window.alert(validationResult.message || 'The link is not valid');
            return;
          }
        }

        if (anchorNode) {
          range.selectNode(anchorNode);
          selection.selection.removeAllRanges();
          selection.selection.addRange(range);
        }

        if (link) {

          if (! checks.hasKnownProtocol(link) ) {
            link = prompts.process(window, link);
          }

          link = transforms.run(options.transforms.post, link);

          scribe.api.SimpleCommand.prototype.execute.call(this, link);
        }
      };

      linkPromptCommand.queryState = function () {
        /**
         * We override the native `document.queryCommandState` for links because
         * the `createLink` and `unlink` commands are not supported.
         * As per: http://jsbin.com/OCiJUZO/1/edit?js,console,output
         */
        var selection = new scribe.api.Selection();
        return !! selection.getContaining(function (node) {
          return node.nodeName === this.nodeName;
        }.bind(this));
      };

      scribe.commands.linkPrompt = linkPromptCommand;
    };
  };

});
