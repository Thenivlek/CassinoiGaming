import React from "react";

import styles from "./Dashboard.module.scss";
import { Categories } from "../components/Categories/Categories";
import GameSection from "../components/GameSection/GameSection";

export const Dashboard: React.FC = () => {
  return (
    <div className={styles.container}>
      <Categories />

      <GameSection />
    </div>
  );
};
