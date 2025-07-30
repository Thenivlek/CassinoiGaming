import React from "react";
import styles from "./Sidebar.module.scss";
import { FaBell } from "react-icons/fa";

export const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <h2 className={styles.logo}>UX</h2>
        <h2 className={styles.logoBet}>BET</h2>
      </div>
      <div>
        <a href="#" className={styles.link}>
          AO VIVO
        </a>

        <a href="#" className={styles.link}>
          ESPORTES
        </a>

        <a href="#" className={styles.link}>
          CASSINO
        </a>

        <a href="#" className={styles.link}>
          CASSINOS AO VIVO
        </a>
      </div>
      <div>
        <FaBell className={styles.icon} />
        <button className={styles.registerButton}>Registre-se</button>
        <button className={styles.loginButton}>Entrar</button>
      </div>
    </aside>
  );
};
