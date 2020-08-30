import React, { Component } from 'react';
import Header from '../Header'
import Home from '../Home'
import Login from '../Login'
import Personal from '../Personal'
import News from '../News'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.scss';

class App extends Component {

  state = {
    logged: false
  }

  onLogin = () => {
    this.setState({
      logged: true
    })
  }

  render() {
    const { logged } = this.state
    const redirectToLogin = !logged ? <Redirect to='/login/' /> : null
    return (
      <Router>
        <Header logged={logged} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/news' exact>
            {redirectToLogin}
            <News />
          </Route>
          <Route path='/personal' exact>
            {redirectToLogin}
            <Personal/>
          </Route>
          <Route path='/login'>
            {logged ? <Redirect to='/personal/' /> : null}
            <Login onLogin={this.onLogin} />
          </Route>
          <Route />
        </Switch>
      </Router>
    );
  }
}

export default App;