import React from 'react'
import ReactDOM, { Root } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { store } from './redux/store'
import { App } from './App'
import { Provider } from 'react-redux'

import './index.scss'

const rootElement: HTMLElement | null = document.getElementById('root')

if (rootElement) {
  const root: Root = ReactDOM.createRoot(rootElement)

  root.render(
    <React.StrictMode>
      <HashRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>
    </React.StrictMode>,
  )
}
