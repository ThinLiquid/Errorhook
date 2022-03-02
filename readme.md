<h1>errorhook</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-cornflowerblue.svg?cacheSeconds=2592000&style=for-the-badge" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge&color=royalblue" />
  </a>
  <a href="https://twitter.com/liquidpc" target="_blank">
    <img alt="Twitter: liquidpc" src="https://img.shields.io/twitter/follow/liquidpc.svg?style=for-the-badge&color=2a52be" />
  </a>
</p>

> A simple way to track errors using Discord.

## 📓 Prerequisites

- node >= 9.0.0
- npm >= 5.0.0

## 📁 Install

```sh
npm i errorhook
```

## 📗 Usage

### Normal Errors

```js
var errorhook = require('errorhook');

try {
    // your code
} catch(e) {
    errorhook(e, discord_webhook_url)
}
```

### Unhandled Rejections

```js
var errorhook = require('errorhook');

// your code

process.on('unhandledRejection', (e) => {
    errorhook(e, discord_webhook_url)
})
```

## 👤 Author

**LiquidDev#5169**

* Website: [liquid.gq](https://liquid.gq/)
* Twitter: [@liquidpc](https://twitter.com/liquidpc)
* Github: [@ThinLiquid](https://github.com/ThinLiquid)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!<br>
Feel free to check [issues page]().

## ⭐ Support the package

Support the package by giving it a 🌟.

## 📝 License

Copyright :copyright: 2022 [LiquidDev](https://github.com/ThinLiquid).<br>
This project is under the [MIT](https://github.com/ThinLiquid/Errorhook/blob/main/LICENSE) License.
