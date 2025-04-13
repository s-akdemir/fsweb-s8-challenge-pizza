import React from 'react'
import './App.css'  
import Home from './components/Home'
import Order from './components/Order'
import Success from './components/Success' 
import OrderSummary from './components/OrderSummary'  
//import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import { BrowserRouter, Switch, Route, Link  } from 'react-router-dom'  
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  

  return (
    <div>
     <Switch>
      <Route path="/" exact>
       <Home />
      </Route> 
      <Route path="/order/:userName">
       <Order />
      </Route>
      <Route path="/success"> 
       <Success />
      </Route>
     </Switch>
     </div>
  )
}

export default App
