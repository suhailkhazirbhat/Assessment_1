import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loginpage from '../pages/Loginpage'

import Pomodro_timer_app from '../pages/Pomodro_timer_app'
import Registerpage from '../pages/Registerpage'


export default function AppRouter(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Loginpage} />
          <Route exact path='/login' component={Loginpage} />
          <Route exact path='/register' component={Registerpage} />
          <Route exact path='/pomodro_timer_app' component={Pomodro_timer_app} />
        </Switch>
      </Router>
    </>
  )
}
