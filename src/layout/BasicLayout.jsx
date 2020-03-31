import React, { useState, useEffect, useRef} from 'react'
import Header from '@/common/Header'
import Footer from '@/common/Footer'
import { renderRoutes } from 'react-router-config'

function useScrollTop({
  maxHeight
}) {
  const [height, setHeight] = useState(0)
  const oldHeight = useRef(0)
  const listener = () => {
    // 相当于老的setState 回调里的setState
    if (oldHeight.current < maxHeight) {
      setHeight(document.documentElement.scrollTop)
    }
    oldHeight.current = document.documentElement.scrollTop
  }
  useEffect(() => {
    window.addEventListener('scroll', listener)
    return () => window.removeEventListener('scroll', listener)
  }, [])
  return [ height ]
}

function BasicLayout ({ route, historyCtx }) {
  const maxHeight = 80
  const [ height ] = useScrollTop({ maxHeight })
  return (
    <div id="wrapper" className="main-container">
      <Header height={height} maxHeight={maxHeight}/>
      {renderRoutes(route.routes, {historyCtx})}
      <Footer/>
    </div>
  )
}

export default BasicLayout