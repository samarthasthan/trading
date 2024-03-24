import React from "react";
import styles from "./Home.module.css";
import MainHeader from "../../components/headers/main/MainHeader";
import Market from "../market/Market";

function Home() {
  return (
    <div className={styles.Portfolio}>
      <MainHeader></MainHeader>
      <Market></Market>
    </div>
  );
}

export default Home;
