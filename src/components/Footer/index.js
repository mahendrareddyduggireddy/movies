import './index.css'
import {FaGoogle, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'

const Footer = () => (
  <div className="footer-container">
    <div className="core-container">
      <ul className="ul-list-container">
        <li>
          <FaGoogle />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaYoutube />
        </li>
      </ul>
      <p>Contact Us</p>
    </div>
  </div>
)
export default Footer
