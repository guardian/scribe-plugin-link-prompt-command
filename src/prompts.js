define([], function() {

  var userPrompts = [
    {
      // For emails we just look for a `@` symbol as it is easier.
      regexp: /@/,
      message: 'The URL you entered appears to be an email address. ' +
      'Do you want to add the required “mailto:” prefix?',
      action: function(link) {
        return 'mailto:' + link;
      }
    },
    {
      // For tel numbers check for + and numerical values
      regexp: /\+?\d+/,
      message: 'The URL you entered appears to be a telephone number. ' +
                'Do you want to add the required “tel:” prefix?',
      action: function(link) {
        return 'tel:' + link;
      }
    },
    {
      regexp: /.+/,
      message: 'The URL you entered appears to be a link. ' +
                'Do you want to add the required “http://” prefix?',
      action: function(link) {
        return 'http://' + link;
      }
    }
  ];

  function process(window, link) {
    for (var i = 0; i < userPrompts.length; i++) {
      var prompt = userPrompts[i];

      if(prompt.regexp.test(link)) {
        var userResponse = window.confirm(prompt.message);

        if(userResponse) {
          // Only process the first prompt
          return prompt.action(link);
        }
      }

    };

    return link;
  }

  return {
    process: process
  }

});
