# scribe-plugin-link-prompt-command

A Scribe plugin to simplify the process of adding valid urls in links.

## Status

[![Circle CI](https://circleci.com/gh/guardian/scribe-plugin-link-prompt-command.svg?style=svg&circle-token=8f3adca3a27c9e3007b23a51383509ff8ea14ee9)](https://circleci.com/gh/guardian/scribe-plugin-link-prompt-command)

## Options

### Validation

The `validation` key can be given a function that takes a string representing a URL the user wishes to add and which returns a object in the following format:

```
  {
    valid: boolean // whether the URL is considered valid or not
    message: string // The message to show to the user explaining why the URL is invalid
  }
```

### Transformation

The `transformation` key holds two optional keys: `pre` and `post`. Each one contains an array of transform functions that take a String representing the link value and should return a String that is transformed value of the link.

The transformations are processed "left to right" or in ascending index order.

`pre` transforms are applied before validation. `post` transforms are applied just before the link value is inserted into the DOM.

## Testing

Run unit tests with the following:

```
npm run test
```

### Running locally

First run `bower install` to add the dependencies locally. Then load `examples/amd.html` into a browser and you should have a minimal local running version of the plugin.

## Installation

```
bower install scribe-plugin-link-prompt-command
```
