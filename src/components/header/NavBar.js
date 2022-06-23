import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';
import styles from './Header.module.scss';

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <nav>
      <button
        type="button"
        onClick={toggleNav}
      >
        <RiMenu3Fill color="white" fontSize="1.7em" />
      </button>
      { toggleMenu && (
      <div className={styles.navList}>
        <button
          type="button"
          onClick={toggleNav}
        >
          &times;
        </button>
        <ul>
          <li>
            <Link to="#works">Works</Link>
          </li>
          <li>
            <Link to="#aboutMe">About me</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </div>
      )}
    </nav>
  );
}

export default NavBar;
