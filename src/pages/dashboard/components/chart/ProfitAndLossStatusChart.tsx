import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import useDarkMode from "../../../../hooks/layout/useDarkMode";

const ProfitAndLossStatusChart = () => {
  const [isDark] = useDarkMode();
  const series = [
    {
      name: "2023 손익",
      data: [4, 37, 37, 115, 202, 290, 397, 462, 573, 641, 717, 789],
    },
    {
      name: "2024 손익",
      data: [-36, 73, 184, 229, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ];
  const options: ApexOptions = {
    chart: {
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
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: -18,
      style: { colors: [isDark ? "#CBD5E1" : "#475569"], fontWeight: 400 },
      formatter: function (val: number) {
        return `${Intl.NumberFormat().format(val)}`;
      },
    },
    legend: {
      labels: {
        colors: isDark ? "#CBD5E1" : "#475569",
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
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
        text: "손익금액",
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
    colors: ["#4669fa", "#FA916B", "#50C793", "#F1595C"],
    grid: {
      show: true,
      position: "back",
    },
  };
  return (
    <div>
      <Chart options={options} series={series} type="bar" height="350" />
    </div>
  );
};

export default ProfitAndLossStatusChart;
