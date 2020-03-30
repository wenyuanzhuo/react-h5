import React from 'react'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
export const HistoryContext = React.createContext(history)