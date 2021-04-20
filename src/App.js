import './styles/styles.scss'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './Home'
import SubPage from './SubPage'
import Band from './Band'
import Gigs from './Gigs'
import NavBar from './components/NavBar'
import AppRoute from './components/AppRoute'
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/ckn8klpe9qx2201xr3coke8io/master"
});

const app = () => {
  return (
    <div className="app">
      <ApolloProvider client={client}>
        <Router>
          <header className="app-header">
            <NavBar />
          </header>
          <Switch>
            <AppRoute exact path="/" layout={Home} component={Home} />
            <AppRoute exact path="/home" layout={Home} component={Home} />
            <AppRoute exact path="/band" layout={SubPage} component={Band} />
            <AppRoute exact path="/gigs" layout={SubPage} component={Gigs} />
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  )
}

export default app
