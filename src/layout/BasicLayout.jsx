import React from 'react'
import Header from '@/common/Header'
import Footer from '@/common/Footer'
import { renderRoutes } from 'react-router-config'
import { Switch, Route, Redirect } from 'react-router-dom'
function BasicLayout ({ route, historyCtx }) {
  console.log(route, renderRoutes(route.routes))
  return (
    <div className="main-container">
      <Header/>
      {renderRoutes(route.routes, {historyCtx})}

      <Footer/>
    </div>
  )
}

export default BasicLayout