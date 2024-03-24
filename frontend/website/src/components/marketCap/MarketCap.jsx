import React from "react";
import styles from "./MarketCap.module.css";
import { Calendar, CaretDown, Funnel } from "@phosphor-icons/react";
import CurrencyCard from "../cards/currencyCard/CurrencyCard";
function MarketCap() {
  return (
    <div className={styles.marketCap}>
      <div className={styles.marketCapUpper}>
        <div className={styles.headings}>
          <h2>Cryptocurreny Prices by Market Cap</h2>
          <p className={`greyText ${styles.subHeading}`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            nobis consequuntur. Doloremque hic commodi maxime facere quasi
            excepturi iusto.
          </p>
        </div>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <Funnel className="icon" />
            <p className={styles.iconTitle}>Filter</p>
            <CaretDown className={`icon ${styles.caretDown}`} />
          </div>
          <div className={styles.icon}>
            <Calendar className="icon" />
            <p className={styles.iconTitle}>Today</p>
            <CaretDown className={`icon ${styles.caretDown}`} />
          </div>
        </div>
      </div>
      <div className={styles.currencies}>
        <CurrencyCard></CurrencyCard>
        <CurrencyCard></CurrencyCard>
        <CurrencyCard></CurrencyCard>
        <CurrencyCard></CurrencyCard>
      </div>
    </div>
  );
}

export default MarketCap;
