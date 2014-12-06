# Flattening NPM modules for use in node

## Setup

```
$ git clone https://github.com/jesstelford/browserify-node-example.git && cd browserify-node-example
$ npm install
```

## Usage

```
$ npm run prepublish
```

This will use [browserify](http://browserify.org) to generate a flattened /
bundled version of your code and all its dependancies, saved as `bundle.js`.

The entry point for `bundle.js` is defined as `index.js` (so have a look there
for the actual code being executed).

To run the bundle, just require it, and execute like any other module. This is
already done for you in `use-bundle.js`:

```
$ node ./use-bundle.js
[ 1, 2, 3]
```

Enjoy your flattened node module! :D
