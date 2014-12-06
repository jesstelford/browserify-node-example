# Flattening node modules for use as single bundle

**A new cli tool has been created to do this for you**: [`flattenify`](https://www.npmjs.org/package/flattenify)

```
$ npm install -g flattenify
$ flattenify <module> --outfile <filename>
```

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

## Explanation

[Browserify](http://browserify.org) is a tool for walkind the dependency tree of
your node project and combining all the files into a single runable bundle.

Normally, this bundle would be run in a browser (hence the name), however, there
is an option (`--standalone`) which will instruct browserify to insert a tiny
shim that checks for existence of a module system. Since node comes with this
module system built-in, a bundle that has this shim will seamlessly work in node
by simply doing `var bundled = require('./bundle.js');`.

### How

This is done by running browserify like so:

```
./node_modules/.bin/browserify -e index.js -o bundle.js --standalone foo --bare
```

See the [browserify docs](https://github.com/substack/node-browserify#usage) for
explanation of the individual options.

Note that when using the bundle with node, the `foo` option to `--standalone` is
never referenced or used, however browserify still requires it.

The above command is what is executed when you run `npm run prepublish`, and can
be seen in the `package.json` file.
