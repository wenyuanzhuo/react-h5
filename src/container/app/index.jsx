import React, { useState, useEffect, useContext } from 'react'
import { HistoryContext } from '@/common/context'
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { router } from '@/common/nav'
import { getLayout } from '@/routes'

import Login from '@/pages/Login.jsx'
import Register from '@/pages/Register.jsx'

function App() {
  const historyCtx = useContext(HistoryContext)
  const basicLayoutRoute = getLayout(router, 'BasicLayout')
  const userLayoutRoute = getLayout(router, 'UserLayout')
  const BasicLayout = basicLayoutRoute[0].component
  const UserLayout = userLayoutRoute[0].component
  const state = {
    basicLayout: {
      route: basicLayoutRoute[0],
      historyCtx
    },
    userLayout: {
      route: userLayoutRoute[0],
      historyCtx
    },
  }
  return (
    <div className="container">
      <Switch>
        <Route path="/user"
          render={(props) => <UserLayout {...props} {...state.userLayout}/>}/>
        <Route path="/"
          render={(props) => <BasicLayout {...props} {...state.basicLayout}/>}/>
      </Switch>
        {/* {renderRoutes(router, {historyCtx})} */}
    </div>
  )
}

export default App