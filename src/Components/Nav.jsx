import { Link, NavLink } from "react-router-dom"

export default function  Nav() {


  return(
    <div>
      <nav>
        <ul>
          <li><NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About Us</NavLink></li>
          <li><NavLink to="/ministries" className={({isActive}) => isActive ? "active" : ""}>Ministries</NavLink></li>
          <li><NavLink to="/news-events" className={({isActive}) => isActive ? "active" : ""}>News & events</NavLink></li>
          <li><NavLink to="/contacts" className={({isActive}) => isActive ? "active" : ""}>Contacts</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}