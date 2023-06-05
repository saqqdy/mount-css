<div style="text-align: center;" align="center">

# mount-css

> **This project was moved to [mount-css](https://github.com/saqqdy/browsers/tree/master/packages/mount-css#readme)**

A simple function for mounting css

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]
[![gzip][gzip-image]][gzip-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

<div style="text-align: center; margin-bottom: 20px;" align="center">

</div>

## Installing

```bash
# use pnpm
$ pnpm install mount-css

# use npm
$ npm install mount-css --save

# use yarn
$ yarn add mount-css
```

## Usage

### General use

```js
import mountCss from 'mount-css'

mountCss('css url', options)
```

2. by require

```js
const mountCss = require('mount-css')

mountCss('css url', options)
```

### Use CDN resource

```html
<!-- head -->
<script src="https://unpkg.com/mount-css@1.0.0/dist/index.global.prod.js"></script>
```

## Support & Issues

Please open an issue [here](https://github.com/saqqdy/mount-css/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/mount-css.svg?style=flat-square
[npm-url]: https://npmjs.org/package/mount-css
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/mount-css/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/mount-css&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/mount-css.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/mount-css?branch=master
[download-image]: https://img.shields.io/npm/dm/mount-css.svg?style=flat-square
[download-url]: https://npmjs.org/package/mount-css
[gzip-image]: http://img.badgesize.io/https://unpkg.com/mount-css/dist/index.global.prod.js?compression=gzip&label=gzip%20size:%20JS
[gzip-url]: http://img.badgesize.io/https://unpkg.com/mount-css/dist/index.global.prod.js?compression=gzip&label=gzip%20size:%20JS
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_mount-css
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_mount-css
