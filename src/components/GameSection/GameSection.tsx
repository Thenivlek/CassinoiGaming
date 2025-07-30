import React, { useState } from "react";
import styles from "./GameSection.module.scss";
import GameCard from "../GameCard/GameCard";
import { gameSections } from "../../data/mockGameSections";

const GameSection: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={styles.section}>
      {gameSections.map((section, index) => {
        const isExpanded = expandedSections.includes(index);

        return (
          <div key={index}>
            <div className={styles.header}>
              <div>
                <img
                  src={section.icon}
                  alt={`${section.title} icon`}
                  className={styles.imageIcon}
                />
                <span className={styles.title}>{section.title}</span>
              </div>
              <button
                className={styles.button}
                onClick={() => toggleExpand(index)}
              >
                {isExpanded ? "Ver menos" : "Ver todos"}
                <span className={styles.count}>{section.games.length}</span>
              </button>
            </div>

            <div
              className={`${styles.cardList} ${
                isExpanded ? styles.expanded : styles.collapsed
              }`}
            >
              {section.games.map((game) => (
                <GameCard key={game.id} title={game.title} image={game.image} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GameSection;
