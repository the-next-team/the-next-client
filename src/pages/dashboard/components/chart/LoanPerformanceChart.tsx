import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import useDarkMode from "../../../../hooks/layout/useDarkMode";
const LoanPerformanceChart = ({ height = 300 }) => {
  const [isDark] = useDarkMode();
  const series = [
    {
      name: "Agency",
      data: [
        1394, 1674, 2148, 2814, 3244, 3432, 3484, 3856, 4423, 5349, 5342, 5744,
        5883, 5973, 5956, 5956,
      ],
    },
    {
      name: "다이렉트",
      data: [
        683, 692, 703, 720, 1813, 2003, 1895, 2342, 2463, 2634, 2466, 2623,
        2634, 2273, 2546, 2546,
      ],
    },
    {
      name: "은행연계",
      data: [0, 0, 0, 0, 0, 0, 0, 873, 0, 0, 0, 934, 1035, 0, 0, 0],
    },
  ];
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
    },
    subtitle: {
      offsetY: 0,
      offsetX: 0,
      align: "right",
      text: "(단위: 백만원)",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "top",
        },
      },
    },
    colors: ["#4669fa", "#FA916B", "#50C793", "#F1595C"],
    dataLabels: {
      background: {
        enabled: false,
      },
      enabled: true,
      offsetY: -6,
      style: { colors: [isDark ? "#CBD5E1" : "#475569"], fontWeight: 400 },
      formatter: function (val: number) {
        return `${Intl.NumberFormat().format(val)}`;
      },
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    tooltip: {
      theme: "dark",
    },
    legend: {
      offsetY: 6,
      show: true,
      labels: {
        colors: isDark ? "#CBD5E1" : "#475569",
      },
    },
    markers: {
      size: 5,
      strokeWidth: 1,
      shape: "circle",
      hover: {
        sizeOffset: 1,
      },
    },
    grid: {
      show: true,
      strokeDashArray: 10,
      position: "back",
    },
    yaxis: {
      title: {
        text: "대출잔액",
      },
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
        formatter: function (val: number) {
          return `${Intl.NumberFormat().format(val)}`;
        },
      },
    },
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
  };
  return (
    <>
      <Chart options={options} series={series} type="line" height={height} />
    </>
  );
};

export default LoanPerformanceChart;
