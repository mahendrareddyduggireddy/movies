import './App.css'
import {Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Login from './components/Login'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route exact path="/notfound" component={NotFound} />
    <Route component={NotFound} />
  </Switch>
)
export default App
