import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Events from './views/events'
import TinkerHubNSSCE from './views/tinker-hub-n-s-s-c-e'
import WebTeam from './views/web-team'
import Home from './views/home'
import OurTeam from './views/our-team'
import Startups from './views/startups'
import Facilities from './views/facilities'
import IICNSSCE from './views/i-i-c-n-s-s-c-e'
import Subscription from './views/subscription'
import Contact from './views/contact'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Events} exact path="/events" />
        <Route component={TinkerHubNSSCE} exact path="/tinker-hub-n-s-s-c-e" />
        <Route component={WebTeam} exact path="/web-team" />
        <Route component={Home} exact path="/" />
        <Route component={OurTeam} exact path="/our-team" />
        <Route component={Startups} exact path="/startups" />
        <Route component={Facilities} exact path="/facilities" />
        <Route component={IICNSSCE} exact path="/i-i-c-n-s-s-c-e" />
        <Route component={Subscription} exact path="/subscription" />
        <Route component={Contact} exact path="/contact" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
