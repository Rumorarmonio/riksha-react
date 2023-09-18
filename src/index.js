import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import {HashRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        {/*TODO: fix routing (BrowserRouter or HashRouter)*/}
        <HashRouter>
            <App/>
        </HashRouter>
    </React.StrictMode>
)