import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import useDarkMode from "../../../../hooks/layout/useDarkMode";

const LoanAmountChart = ({ height = 300 }) => {
  const [isDark] = useDarkMode();
  const series = [
    {
      name: "대출금액",
      type: "column",
      data: [
        2894, 2974, 3148, 3214, 4044, 4232, 4584, 5056, 5423, 6349, 6342, 6744,
        6883, 6973, 7956, 7956,
      ],
    },
    {
      name: "대출잔액",
      type: "line",
      data: [
        4394, 4674, 4348, 4834, 6244, 5432, 6484, 6856, 6423, 6349, 7342, 7744,
        7883, 8973, 8956, 9956,
      ],
    },
    {
      name: "연체금액",
      type: "line",
      data: [
        1283, 1292, 1303, 1620, 1813, 2003, 1895, 2342, 2463, 2634, 2466, 2623,
        2634, 2273, 2546, 2546,
      ],
    },
    {
      name: "당월대출금액",
      type: "line",
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
    dataLabels: {
      background: {
        enabled: false,
      },
      enabled: true,
      enabledOnSeries: [1, 2, 3],
      offsetY: -6,
      style: { colors: [isDark ? "#CBD5E1" : "#475569"], fontWeight: 400 },
      formatter: function (val: number) {
        return `${Intl.NumberFormat().format(val)}`;
      },
    },
    stroke: {
      curve: "straight",
      width: [0, 2, 2, 2],
    },
    colors: ["#4669fa", "#FA916B", "#50C793", "#F1595C"],
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
      size: 4,
      strokeWidth: 0,
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
        text: "대출금액",
      },
      min: 0,
      max: 10000,
      stepSize: 2000,
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

export default LoanAmountChart;
