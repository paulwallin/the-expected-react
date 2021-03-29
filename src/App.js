import './styles/styles.scss'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Home from './Home'
import SubPage from './SubPage'
import Notes from './Notes'
import logo from './expected_logo.svg'

const Users = () => (
  <div>
    {' '}
    <h2>Users</h2>{' '}
  </div>
)

const app = () => {
  return (
    <div className="app">
      <Router>
        <header className="app-header">
          <nav className="nav">
            <div className="nav__container">
              <Link to="/" className="nav__brand">
                <img src={logo} className="app-logo" alt="logo" />
              </Link>
              <div className="nav__right">
                <ul className="nav__item-wrapper">
                  <li className="nav__item">
                    <Link to="/">home</Link>
                  </li>
                  <li className="nav__item">
                    <Link to="/notes">notes</Link>
                  </li>
                  <li className="nav__item">
                    <Link to="/users">users</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <Switch>
          <Home>
            <Route path="/">
              <Home />
            </Route>
          </Home>
          <SubPage>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/notes">
              <Notes />
            </Route>
          </SubPage>
        </Switch>
      </Router>
    </div>
  )
}

export default app
