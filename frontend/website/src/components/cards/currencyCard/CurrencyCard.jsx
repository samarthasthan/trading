import React from "react";
import styles from "./CurrencyCard.module.css";
import ReactApexChart from "react-apexcharts";
function CurrencyCard() {
  const chartOptions = {
    // Define your chart options here
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: "Price",
        data: [100, 300, 50, 400, 200, 250],
      },
    ],
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["#18181b"],
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 2,
      dashArray: 0,
    },
    grid: {
      show: false,
    },
  };
  return (
    <div className={styles.currencyCard}>
      <div className={styles.leftPart}>
        <div className={styles.currencyDetails}>
          <img
            className={`${styles.currenyLogo} icon`}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
            alt="curreny"
          />
          <p className={styles.currenyName}>Bitcoin</p>
        </div>
        <div className={styles.currenyValue}>
          <p className={styles.currentPrice}>$38,40.54</p>
          <p className={styles.change}>+7.0%</p>
        </div>
      </div>
      <div className={styles.rightPart}>
        <ReactApexChart
          // @ts-ignore
          options={chartOptions}
          series={chartOptions.series}
          type="line"
          width={"110px"}
        />
      </div>
    </div>
  );
}

export default CurrencyCard;
