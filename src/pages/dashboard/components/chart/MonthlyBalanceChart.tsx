import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import useDarkMode from "../../../../hooks/layout/useDarkMode";

const MonthlyBalanceChart = () => {
  const [isDark] = useDarkMode();
  const series = [
    {
      name: "Column",
      type: "column",
      data: [23, 11, 22, 27, 13, 22, 23, 12, 32, 41, 43, 37, 21, 44, 22, 30],
    },
    {
      name: "Area",
      type: "area",
      data: [44, 55, 41, 67, 22, 43, 32, 42, 12, 32, 23, 21, 41, 56, 27, 43],
    },
    {
      name: "Line",
      type: "line",
      data: [30, 25, 36, 30, 43, 24, 58, 30, 45, 35, 64, 52, 59, 36, 48, 39],
    },
  ];
  const options: ApexOptions = {
    chart: {
      zoom: {
        enabled: false,
      },
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    subtitle: {
      offsetY: 10,
      offsetX: 0,
      align: "right",
      text: "(단위: 백만원)",
    },
    stroke: {
      width: [0, 2, 4],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 0,
    },
    colors: ["#4669fa", "#FA916B", "#50C793", "#F1595C"],
    xaxis: {
      categories: [
        "2022-12",
        "2023-01",
        "2023-02",
        "2023-03",
        "2023-04",
        "2023-05",
        "2023-06",
        "2023-07",
        "2023-08",
        "2023-09",
        "2023-10",
        "2023-11",
        "2023-12",
        "2024-01",
        "2024-02",
        "2024-03",
      ],
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: "대출잔액",
      },
      min: 0,
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
      },
    },
    legend: {
      // show: false,
      labels: {
        colors: isDark ? "#CBD5E1" : "#475569",
        useSeriesColors: true,
      },
    },
    grid: {
      show: true,
      position: "back",
    },
  };
  return (
    <div>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default MonthlyBalanceChart;
