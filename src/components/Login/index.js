import './index.css'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {
  state = {username: '', password: '', errMsg: '', em: false}

  userFunc = event => {
    this.setState({username: event.target.value})
  }

  passwordFunc = event => {
    this.setState({password: event.target.value})
  }

  submitFunc = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const object = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(object),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.setState({em: false})
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      const errorMessage = data.error_msg
      this.setState({errMsg: errorMessage, em: true})
      console.log(data)
    }
  }

  render() {
    const {username, password, errMsg, em} = this.state
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <img
          src="https://res.cloudinary.com/dxqfqtqnl/image/upload/v1714387893/Group_73991x_q8xof1.png"
          alt="login website logo"
          className="logo-style"
        />
        <form onSubmit={this.submitFunc} className="form-container">
          <h1 className="login-sub-heading">Login</h1>
          <label htmlFor="username">USERNAME</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={this.userFunc}
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={this.passwordFunc}
          />
          <button type="submit" className="submit-style">
            Login
          </button>
          <p className="error">{em ? errMsg : ''}</p>
        </form>
      </div>
    )
  }
}

export default Login
