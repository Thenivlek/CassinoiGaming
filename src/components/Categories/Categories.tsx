import React from "react";
import styles from "./Categories.module.scss";

export const Categories: React.FC = () => {
  return (
    <div className={styles.containerButtons}>
      <button className={styles.buttonAll}>Todos</button>
      <button>Melhores Jogos ao vivo</button>
      <button>Roletas</button>
      <button>Baccarat</button>
      <button>Blackjack</button>
      <button>Dados</button>
    </div>
  );
};
