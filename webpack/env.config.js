const path = require('path')
const env = process.env.NODE_ENV || 'development'
const config = {
  dev: {
    debug: true
  }
}[env]
module.exports = {
  ...config,
  buildPath: path.resolve(`./dist/${env}`)
}