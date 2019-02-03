# shella

Tagged template to run shell script with [`execa`](https://github.com/sindresorhus/execa).

[![npm version][npm-image]][npm-url]
![Node.js Version Support][node-version]
[![build status][circleci-image]][circleci-url]
[![dependency status][deps-image]][deps-url]
![License][license]

## Install

```console
$ npm i shella
```

## Usage

`shella` returns a value that [`execa`](https://github.com/sindresorhus/execa) returns.

```js
const shella = require('shella');

(async () => {
  // async by default
  await shella`
    echo abcde | sed -e 's/bcd/!!!/' > ./result.txt
    grep a ./result.txt`;

  // interporation (shell-escaped)
  const msg = `Bob's pen`;
  await shella`echo ${msg}`;

  // sync
  shella.sync`echo foo`;
})();
```

## Options

You can specify options for [`execa`](https://github.com/sindresorhus/execa).
`shella` specify `stdio: 'inherit'` by default, but the other options are `execa`'s default.

```js
// with execa options
const {stdout, stderr} = await shella({stdio: 'pipe'})`echo foo`;
console.log(stdout);

// sync with execa options
shella.sync({stdio: 'pipe'})`echo foo`;
```

## Related

- [execa](https://www.npmjs.com/package/execa): A better `child_process`
- [@tehshrike/shell\-escape\-tag](https://www.npmjs.com/package/@tehshrike/shell-escape-tag): shell-escape-tag, but with a much smaller install size

## License

MIT License: Teppei Sato &lt;teppeis@gmail.com&gt;

[npm-image]: https://img.shields.io/npm/v/shella.svg
[npm-url]: https://npmjs.com/package/shella
[npm-downloads-image]: https://img.shields.io/npm/dm/shella.svg
[deps-image]: https://img.shields.io/david/teppeis/shella.svg
[deps-url]: https://david-dm.org/teppeis/shella
[node-version]: https://img.shields.io/badge/Node.js%20support-v8,v10,v11-brightgreen.svg
[license]: https://img.shields.io/npm/l/shella.svg
[circleci-image]: https://circleci.com/gh/teppeis/shella.svg?style=shield
[circleci-url]: https://circleci.com/gh/teppeis/shella
