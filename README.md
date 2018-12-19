# pilfer-package

Tiny command line utility for plucking fields from a JSON file


## Installation

1. `npm install --save-dev pilfer-package` or `yarn add --dev pilfer-package`
2. Add to your npm scripts, or use in the CLI directly


## Usage

`pilfer-package <field1> <field2> ... <fieldN>`

e.g. `pilfer-package version > version.json` will create a file called `version.json` in the current directory containing:

```
{
  version: "1.0.0"
}
```
