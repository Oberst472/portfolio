// vue.config.js
const path = require('path')

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
  }
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/vars.scss'),
        path.resolve(__dirname, './src/assets/scss/adaptive.scss')
      ]
    })
}
