import React from 'react'
import {Link} from "react-router-dom";
import './navbar.css'

const Navbar = () => {

	return (
		<>
		<div className="navbar">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Article">Article</Link>
            </li>
            <li>
              <Link to="/Forum">Forum</Link>
            </li>
            <li>
              <Link to="/Message">Message</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>

          </div>
        </>
		)
}


export default Navbar;