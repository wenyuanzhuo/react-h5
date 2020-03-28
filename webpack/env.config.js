const path = require('path')
const env = process.env.NODE_ENV
const config = {
  dev: {
    debug: true
  }
}[env]
module.exports = {
  ...config,
  buildPath: path.resolve(`./dist/${env}`)
}