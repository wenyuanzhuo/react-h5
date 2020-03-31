import React from 'react'
import Header from '@/common/Header'
import Footer from '@/common/Footer'
import { renderRoutes } from 'react-router-config'
import { useRouteMatch, useLocation } from 'react-router-dom'

function UserLayout ({ route, historyCtx }) {
  const location = useLocation().pathname
  console.log('====', useRouteMatch(location) )
  return (
    <div className="main-container">
      user
      {renderRoutes(route.routes, {historyCtx})}
    </div>
  )
}

export default UserLayout