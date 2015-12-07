# scribe-plugin-link-prompt-command

A Scribe plugin to simplify the process of adding valid urls in links.

## Options

### Validation

The `validation` key can be given a function that takes a string representing a URL the user wishes to add and which returns a object in the following format:

```
  {
    valid: boolean // whether the URL is considered valid or not
    message: string // The message to show to the user explaining why the URL is invalid
  }
```

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
