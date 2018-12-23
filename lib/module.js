const { resolve } = require('path')

module.exports = async function fullPageModule (moduleOptions) {
  const options = Object.assign({}, moduleOptions)

  this.options.css.unshift('fullpage.js/dist/fullpage.min.css')
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    ssr: false,
    options
  })
}

module.exports.meta = require('../package.json')
