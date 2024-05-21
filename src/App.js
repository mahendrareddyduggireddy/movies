import './App.css'
import {Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Login from './components/Login'
import Account from './components/Account'
import Search from './components/Search'
import Popular from './components/Popular'
import MovieItemDetails from './components/MovieItemDetails'

const App = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/search" component={Search} />
    <ProtectedRoute exact path="/account" component={Account} />
    <ProtectedRoute exact path="/popular" component={Popular} />
    <ProtectedRoute exact path="/movies/:id" component={MovieItemDetails} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/notfound" component={NotFound} />
    <Route component={NotFound} />
  </Switch>
)
export default App
