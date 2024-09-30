import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Marco Madureira</div>
      <FaBars className={styles.menuToggle} onClick={toggleMenu} />
      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
        <a href="#biografia">Biografia</a>
        <a href="#propostas">Propostas</a>
        <a href="#agenda">Agenda</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
};

export default Header;
