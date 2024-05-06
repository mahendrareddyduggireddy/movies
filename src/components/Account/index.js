import './index.css'
import Cookies from 'js-cookie'
import Header from '../Header'
import Footer from '../Footer'

const Account = props => {
  const {history} = props
  const btnFunction = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="account-route--container">
      <Header />
      <div className="account-container">
        <h1 className="account-head">Account</h1>
        <hr />
        <div className="key-value">
          <p className="keys">Member ship </p>
          <div>
            <p>rahul@gmail.com</p>
            <p>Password:************</p>
          </div>
        </div>
        <hr />
        <div className="key-value">
          <p className="keys">plan details </p>
          <p>
            Premium<span className="span-container">Ultra HD</span>
          </p>
        </div>
        <hr />
        <button type="button" onClick={btnFunction} className="logout-style">
          Logout
        </button>
      </div>
      <div className="account-footer-container">
        <Footer />
      </div>
    </div>
  )
}
export default Account
