import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './routes/Home/Home'
import MainApp from './routes/App/App'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/app'>
            <MainApp />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
