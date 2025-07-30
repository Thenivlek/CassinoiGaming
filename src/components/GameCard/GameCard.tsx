import React from "react";
import styles from "./GameCard.module.scss";

interface GameCardProps {
  title: string;
  image: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
    </div>
  );
};

export default GameCard;
