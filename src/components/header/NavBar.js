import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import {RiMenu3Fill } from 'react-icons/ri'

function NavBar() {
	const [toggleMenu, setToggleMenu] = useState(false)

	const toggleNav = () => {
    setToggleMenu(!toggleMenu)
		console.log(toggleMenu);
  }
		return (
		<nav>
			<button type='button'
			onClick={toggleNav}
			>
				<RiMenu3Fill />
			</button>
		{ toggleMenu && (<ul>
			<li>
				<Link to="#works">Works</Link>
			</li>
			<li>
				<Link to="#aboutMe">About me</Link>
			</li>
			<li>
				<Link to="#contact">Contact</Link>
			</li>
		</ul>)}
		</nav>
	)
}

export default NavBar
