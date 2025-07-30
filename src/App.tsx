import React from "react";
import "./styles/global.scss";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from "./App.module.scss";
import { Banner } from "./components/Banner/Banner";
import { Dashboard } from "./pages/Dashboard";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <Banner />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default App;
