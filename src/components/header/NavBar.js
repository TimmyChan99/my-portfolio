import React, { useState, useEffect } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import styles from './Header.module.scss';

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav>
      <button
        type="button"
        onClick={toggleNav}
        className={styles.mobile_btn}
      >
        <RiMenu3Fill color="white" fontSize="1.7em" />
      </button>
      { (toggleMenu || screenWidth > 500) && (
      <div className={styles.navbar_underlayout}>
        <div className={styles.navList}>
          <button
            type="button"
            onClick={toggleNav}
            className={styles.mobile_btn}
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
      </div>
      )}
    </nav>
  );
}

export default NavBar;
