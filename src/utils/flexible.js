const refresh = (d, w) => {
  let width = d.documentElement.getBoundingClientRect().width
  let dpr = w.devicePixelRatio || 1
  
  const setBodyFontSize = () => {
    if (d.body) {
      d.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      d.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  const setRemUnit = () => {
    const rem = width / 10
    d.documentElement.style.fontSize = rem + 'px'
  }
  const reset = () => {
    // const event = 'addEventListener' in window ? window.addEventListener ? window.attachEvent
    w.addEventListener('resize', setRemUnit)
    w.addEventListener('pagshow', function (e) {
      if (e.persisted || (window.performance && 
        w.performance.navigation.type == 2)) {
          setRemUnit()
        }
    })
  }
  setBodyFontSize()
  setRemUnit()
  reset()
}

refresh(document, window)