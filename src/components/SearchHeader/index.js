import './index.css'
import {Link, withRouter} from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'

const SearchHeader = props => {
  const {history, inputFunc, userInput, searchFunc} = props

  const AccountFunction = () => {
    history.replace('/account')
  }

  const inpFunc = event => {
    inputFunc(event)
  }

  const searchFunction = () => {
    searchFunc()
  }

  return (
    <nav className="nav-container">
      <div className="items-container">
        <img
          src="https://res.cloudinary.com/dxqfqtqnl/image/upload/v1714387893/Group_73991x_q8xof1.png"
          alt="movies"
          className="image-style"
        />
        <Link to="/" className="text-style">
          Home
        </Link>
        <Link to="/popular" className="text-style">
          Popular
        </Link>
      </div>
      <div className="items-container">
        <div className="input-search">
          <input
            type="search"
            onChange={inpFunc}
            value={userInput}
            className="search-input-style"
          />
          <button
            type="button"
            onClick={searchFunction}
            className="search-icon"
          >
            <HiOutlineSearch />
          </button>
        </div>
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
export default withRouter(SearchHeader)
