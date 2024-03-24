import React from "react";
import styles from "./Market.module.css";
import MarketCap from "../../components/marketCap/MarketCap";
function Market() {
  return (
    <div className={styles.market}>
      <MarketCap></MarketCap>
    </div>
  );
}

export default Market;
