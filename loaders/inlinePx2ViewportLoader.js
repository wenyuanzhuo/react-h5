const loaderUtils = require('loader-utils')

const defaultOptions = {
  viewportUnit: 'vw',
  viewportWidth: 750,
  viewportHeight: 1334,
  unitPrecision: 2,
  minPixelValue: 1,
}
// const ZPXRegExp = /(\d+)px/
const ZPXRegExp = /\b(\d+(\.\d+)?)SUPX\b/;
module.exports = function (source) {
  // 获取用户配置的options
  const opts = loaderUtils.getOptions(this);
  const options = Object.assign({}, defaultOptions, opts)
  console.log('***options***', options, opts)

  let pxGlobalRegExp = new RegExp(ZPXRegExp.source, 'g')
  // what is this
  if (this.cacheable) {
    this.cacheable();
  }
  // 匹配出 px目标
  if (pxGlobalRegExp.test(source)) {
    const viewportSize = options.viewportUnit === 'vw' ? options.viewportWidth : options.viewportHeight
    return source.replace(pxGlobalRegExp, createPxReplace(viewportSize, options.minPixelValue, options.unitPrecision, options.viewportUnit))
  } else {
    return source
  }
}

function createPxReplace (viewportSize, minPixelValue, unitPrecision, viewportUnit) {
  return function ($0, $1) {
    if (!$1) return
    var pixels = parseFloat($1)
    if (pixels <= minPixelValue) return
    return toFixed((pixels / viewportSize * 100), unitPrecision) + viewportUnit
  }
}
function toFixed (number, precision) {
  var multiplier = Math.pow(10, precision + 1),
    wholeNumber = Math.floor(number * multiplier)
  return Math.round(wholeNumber / 10) * 10 / multiplier
}
