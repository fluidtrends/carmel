import React, { useState } from 'react'

import {
   Switch,
   withRouter,
   useHistory,
   Route
} from "react-router-dom"

import { AppProps } from './types'
import { MainScreen, NewProductScreen } from './screens'
import { ipcRenderer } from 'electron'

 /**
 * 
 * @param props 
 */
export const App = withRouter((props: any) => {
    const[path, setPath] = useState("/")
    const history = useHistory()

    ipcRenderer.on('onNewUrl', (event, arg) => {
        const newPath = arg.url.substring(9)
        console.log(newPath)
        history.push(newPath)
    })
    
  return (<Switch>
       <Route strict sensitive exact key="main" path="/">
           <MainScreen {...props} />
       </Route>
       <Route strict sensitive exact key="newProduct" path="/newProduct">
           <NewProductScreen {...props} />
       </Route>
       <Route key="any">
           <MainScreen {...props} />
       </Route>
 </Switch>)
})