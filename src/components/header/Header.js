import React from 'react';
import NavBar from './NavBar';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Fatima
        <span>ZZ</span>
        .
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
