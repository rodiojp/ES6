##

### Setting up the project
- `mkdir functional-es6`
- `cd functional-es6`
- `npm init -y`
- `git init`

Install Babel to translate ES6
- `npm install --save-dev @babel/core` Babel compiler core
- `npm install --save-dev @babel/node` Babel command line
- `npm install --save-dev @babel/preset-env` A Babel preset for each environment.

Create a file: `.babelrc`
```json
{
    "presets":["@babel/preset-env"]
}
```
Run the application:

Create a file: **`hello-world.js`**
```js
const sayHello = name => console.log(`Hello, ${name}!`);

sayHello('John');
```
`npx babel-node hello-world.js`

### Ensuring immutability: Install ESLint
ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.    
- `npm install eslint --save-dev`

You should then set up a configuration file:
- `npx eslint --init`
```
After running `npx eslint --init`, you'll have some questionare:
? How would you like to use ESLint? · [style]
? What type of modules does your project use? · [esm]
? Which framework does your project use? · [none]
? Does your project use TypeScript? · [No] / Yes
? Where does your code run? · [browser]
? How would you like to define a style for your project? · [guide]
? Which style guide do you want to follow? · [airbnb]
? What format do you want your config file to be in? · [JavaScript]
Checking peerDependencies of eslint-config-airbnb-base@latest
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.2
? Would you like to install them now with npm? · No / [Yes]
```

There is  **.eslintrc.js** file in your directory. In it, you'll see some rules configured like this:

```js
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    rules: {
    },
};
```

This ESLint plugin is needed to disable all mutation in JavaScript:

- `npm install eslint-plugin-immutable --save-dev`

```js
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    "plugins": [
        "immutable"
    ],
    "rules": {
    	"immutable/no-mutation": 2,
    },
};
```
**2** means: throw an error. There are some more rules:
```js
    "rules": {
    	"immutable/no-let": 2,
    	"immutable/no-this": 2,
    }
```

### Ensuring immutability: Finalize ESLint. Examples

**hello-world.js**
```js
const sayHello = name => console.log(`Hello, ${name}!`);

sayHello('John');
```

- `npx eslint hello-world.js`
```
1:18  error    Expected parentheses around arrow function argument  arrow-parens
1:26  warning  Unexpected console statement                         no-console
1:57  error    Expected linebreaks to be 'LF' but found 'CRLF'      linebreak-style
2:1   error    Expected linebreaks to be 'LF' but found 'CRLF'      linebreak-style
3:18  error    Newline required at end of file but not found        eol-last
```

- `npx eslint --fix hello-world.js`

**hello-world.js** after:
```js
const sayHello = (name) => console.log(`Hello, ${name}!`);

sayHello('John');
```

create a file **example.js**

```js
const person = {
  name: 'Bob',
  age: 35,
};

person.name = 'John';
```
- `npx eslint example.js`
```
6:1  error  No object mutation allowed  immutable/no-mutation
```

### Run the code:

- `npx babel-node example.js`
