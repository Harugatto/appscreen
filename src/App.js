import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Profile, Home, NotFound, Blogs, BlogPost } from './pages'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/blog" component={ Blogs } />
        <Route exact path="/blog/:blogTitle" component={ BlogPost } />
        <Route path="/profile" component={ Profile } />
        <Route path="/notfound" component={ NotFound } />
        <Redirect path="*" to="/notfound"/>
      </Switch>
    </div>
  )
}

export default App
