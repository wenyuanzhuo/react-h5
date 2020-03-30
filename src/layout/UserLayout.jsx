import React from 'react'
import Header from '@/common/Header'
import Footer from '@/common/Footer'
import { renderRoutes } from 'react-router-config'
import { Switch, Route } from 'react-router-dom'
function UserLayout ({ route, historyCtx }) {
  console.log(route.routes)
  return (
    <div className="main-container">
      user
      {renderRoutes(route.routes, {historyCtx})}
    </div>
  )
}

export default UserLayout