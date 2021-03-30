import './styles/styles.scss'
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom'
import Home from './Home'
import SubPage from './SubPage'
import Band from './Band'
import Gigs from './Gigs'
import NavBar from './components/NavBar'
import AppRoute from './components/AppRoute'

const app = () => {
  return (
    <div className="app">
      <Router>
        <header className="app-header">
          <NavBar />
        </header>
        <Switch>
          <AppRoute exact path="/home" layout={Home} component={Home} />
          <AppRoute exact path="/band" layout={SubPage} component={Band} />
          <AppRoute exact path="/gigs" layout={SubPage} component={Gigs} />
        </Switch>
      </Router>
    </div>
  )
}

export default app
