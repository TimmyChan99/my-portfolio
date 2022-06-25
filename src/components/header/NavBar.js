import React, { useState } from 'react';
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
            <a onClick={toggleNav} href="#works">Works</a>
          </li>
          <li>
            <a onClick={toggleNav} href="#aboutMe">About me</a>
          </li>
          <li>
            <a onClick={toggleNav} href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      )}
    </nav>
  );
}

export default NavBar;
