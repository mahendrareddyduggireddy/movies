import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Home = props => {
  const {history} = props

  const btnFunc = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  if (Cookies.remove('jwt_token') !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <>
      <h1>hi</h1>
      <button type="button" onClick={btnFunc}>
        Logout
      </button>
    </>
  )
}
export default Home
