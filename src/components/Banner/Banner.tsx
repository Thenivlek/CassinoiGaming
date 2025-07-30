import React from "react";
import styles from "./Banner.module.scss";
import { FaSearch } from "react-icons/fa";
import banner from "../../assets/banner.png";

export const Banner: React.FC = () => {
  return (
    <div className={styles.containerBanner}>
      <div className={styles.containerImageBanner}>
        <img src={banner} alt="Banner" className={styles.imagemLogo} />
      </div>
      <div className={styles.container}>
        <FaSearch className={styles.icon} />
        <input
          type="text"
          className={styles.input}
          placeholder="Pesquise por jogos e provedores"
        />
      </div>
    </div>
  );
};
