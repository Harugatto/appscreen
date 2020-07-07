import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Profile, NotFound, Blogs, BlogPost } from './pages'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Profile } />
        <Route exact path="/blog" component={ Blogs } />
        <Route exact path="/blog/:blogTitle" component={ BlogPost } />
        <Route path="/notfound" component={ NotFound } />
        <Redirect path="*" to="/notfound"/>
      </Switch>
    </div>
  )
}