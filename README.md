# nuxt-fullpage.js

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

> Nuxt module for [fullpage.js](https://www.npmjs.com/package/fullpage.js) library with official [vue wrapper](https://www.npmjs.com/package/vue-fullpage.js)

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

- Add `nuxt-fullpage.js` dependency using yarn or npm to your project
- Add `nuxt-fullpage.js` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-fullpage.js',

    // With options
    ['nuxt-fullpage.js', { /* module options */ }],
 ]
}
```
## Usage
This plugin creates a `<full-page>` component, used with `ssr: false` option. It's done because of `window` usage 
by core Fullpage plugin. This won't be fixed, as you can read in this [Github issue](https://github.com/alvarotrigo/vue-fullpage.js/issues/73).
There is two points to notice: css classes will be applied only at client side and you will get warning in the console saying:
```
[Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.
```
You can safely ignore this warning, but you might want to mitigate load flicker between your server and client versions
of markup. For this you can apply css classes on server like this, they'll be replaced as soon as fullpage.js kicks in:
```html
<full-page :options="options" id="fullpage">
    <div class="section fp-table active">
        <div class="fp-tableCell">
            <h3>Section 1</h3>
        </div>
    </div>
    <div class="section">
        ...
    </div>
</full-page>
```

You can find more details under `example` folder. 
Otherwise this fullpage module is excellent, have fun!

## License

GPL-3.0, made by [GALSD Web Development](https://galsd.com/)

<!-- Badges -->
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-fullpage.js.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-fullpage.js
[npm-version-src]: https://img.shields.io/npm/v/nuxt-fullpage.js/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-fullpage.js
