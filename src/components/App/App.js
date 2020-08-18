import React, {Component} from 'react';
import Header from '../Header'
import Home from '../Home'
import Login from '../Login'
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

    return (
      <Router>
        <Header onLogin={this.onLogin}/>
        <Switch>
          <Route path='/' exact>
            {!logged ? <Redirect to='/login' /> : null}
            <Home logged={logged}/>
          </Route>
          <Route path='/login' exact>
            <Login logged={logged}/>
          </Route>
          <Route />
        </Switch>
      </Router>
    );
  }
}

export default App;