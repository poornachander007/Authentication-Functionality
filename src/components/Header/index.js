// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav_container">
    <ul className="ul_container">
      <Link to="/" className="link_item">
        <li className="li_item">Home</li>
      </Link>
      <Link to="/about" className="link_item">
        <li className="li_item">About</li>
      </Link>
    </ul>
  </nav>
)

export default Header
