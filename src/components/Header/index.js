import './index.css'
import {Link, withRouter} from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'

const Header = props => {
  const {history} = props
  const searchFunction = () => {
    history.replace('/search')
  }
  const AccountFunction = () => {
    history.replace('/account')
  }

  return (
    <nav className="nav-container">
      <div className="items-container">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dxqfqtqnl/image/upload/v1714387893/Group_73991x_q8xof1.png"
            alt="movies"
            className="image-style"
          />
        </Link>
        <Link to="/" className="text-style">
          Home
        </Link>
        <Link to="/popular" className="text-style">
          Popular
        </Link>
      </div>
      <div className="items-container">
        <button type="button" onClick={searchFunction} className="search-style">
          <HiOutlineSearch />{' '}
        </button>
        <button
          type="button"
          onClick={AccountFunction}
          className="search-style"
        >
          <img
            src="https://res.cloudinary.com/dxqfqtqnl/image/upload/v1714561832/Avatar1x_y2blqp.png"
            alt="avatar"
          />
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header)
