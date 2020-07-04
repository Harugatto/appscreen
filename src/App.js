import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Blog, Profile, Home, NotFound } from './pages'

function App() {
  return (
    <div>
      <Fragment>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/blog" component={ Blog } />
          <Route path="/profile" component={ Profile } />
          <Route path="/notfound" component={ NotFound } />
          <Redirect path="*" to="/notfound"/>
        </Switch>
      </Fragment>  
    </div>
  )
}

export default App
