import './index.css'
import {Link} from 'react-router-dom'

const NotFound = () => (
  <div
    style={{
      backgroundImage:
        'url(' +
        'https://res.cloudinary.com/dxqfqtqnl/image/upload/v1714220075/n2g2owanwtep3pr4gcf0.jpg' +
        ')',
    }}
    className="not-found-container"
  >
    <h1 className="heading">Lost Your Way ?</h1>
    <p className="para">
      we are sorry, the page you requested could not be found Please go back to
      the homepage.
    </p>
    <Link to="/">
      <button type="button" className="btn-style">
        <img
          src="https://res.cloudinary.com/dxqfqtqnl/image/upload/v1714221014/Button1x_qp5cm5.jpg"
          alt="btn"
        />
      </button>
    </Link>
  </div>
)

export default NotFound
