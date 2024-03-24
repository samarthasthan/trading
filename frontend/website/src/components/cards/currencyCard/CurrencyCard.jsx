import React, { useState, useEffect } from "react";
import styles from "./CurrencyCard.module.css";
import ReactApexChart from "react-apexcharts";

function CurrencyCard() {
  const [chartData, setChartData] = useState([100, 300, 50, 400, 200, 250]);

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      // Generate a new random data point
      const newDataPoint = Math.floor(Math.random() * 500) + 100;
      // Update the data array, keeping only the latest 6 data points
      setChartData((prevData) => [...prevData.slice(-5), newDataPoint]);
    }, 2000); // Update every 3 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

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
        data: chartData,
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
    selection: {
      enabled: true,
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
