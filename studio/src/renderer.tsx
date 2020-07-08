import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from "react-router-dom"

import { App } from './App'

const props = {
    name: "Carmel",
    routes: [{
        path: "/",
        id: "main"
    }]
}

ReactDOM.render((<HashRouter basename={"/"}>
   <App {...props} basename={"/"}/>
</HashRouter>), document.getElementById('app'))
