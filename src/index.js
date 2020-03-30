import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'
import { HistoryContext } from '@/common/context'
import '@/styles/app.scss'

import App from '@/container/app'

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <App/>
  </Router>,
  document.getElementById('app')
)
// ReactDOM.render(
//   <HistoryContext.Provider value={history}>
//     <App/>
//   </HistoryContext.Provider>,
//   document.getElementById('app')
// )
// 不使用hooks 的函数式context 仍需要一层一层往下传
// ReactDOM.render(
//   <HistoryContext.Consumer>
//     { value => (<App context={value}/>) }
//   </HistoryContext.Consumer>,
//   document.getElementById('app')
// )