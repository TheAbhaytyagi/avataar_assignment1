import React, { useState } from "react";

import styles from "./Header.module.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>E-commerce</span>
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            <a className={styles.nav__item} href={"/"}>
              HOME
            </a>
            <a className={styles.nav__item} href={"/"}>
              ELECTRONICS
            </a>
            <a className={styles.nav__item} href={"/"}>
              BOOKS
            </a>
            <a className={styles.nav__item} href={"/"}>
              MUSIC
            </a>
            <a className={styles.nav__item} href={"/"}>
              CLOTIHNG
            </a>
            <a className={styles.nav__item} href={"/"}>
              GAMES
            </a>
            <a className={styles.nav__item} href={"/"}>
              MORE
            </a>

            <div className={styles.nav__button__container}></div>
          </nav>
        </div>
        <div>
          <div className={styles.header__button__container}></div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
