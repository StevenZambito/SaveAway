import React from 'react'
import { SaveAway } from './pages/SaveAway'
import { CreateGoal } from './pages/CreateGoal'
import { Goal } from './pages/Goal'
import { Checking } from './pages/Checking'
import { Route, Switch } from 'react-router-dom'
import './custom.scss'

export function App() {
  return (
    <Switch>
      <Route exact path="/">
        <SaveAway />
      </Route>
      <Route exact path="/creategoal">
        <CreateGoal />
      </Route>
      <Route exact path="/goal">
        <Goal />
      </Route>
      <Route exact path="/checking">
        <Checking />
      </Route>
      <Route path="*">
        <p>Not Found</p>
      </Route>
    </Switch>
  )
}
