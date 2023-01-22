import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Startups from './views/startups'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Startups} exact path="/startups" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
