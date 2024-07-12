import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import useDarkMode from "../../../../hooks/layout/useDarkMode";

const BalanceDelayChart = () => {
  const [isDark] = useDarkMode();
  const series = [
    {
      name: "핀다",
      data: [[200, 14]],
    },
    {
      name: "이노핀",
      data: [[234, 18]],
    },
    {
      name: "비바리퍼블리카",
      data: [[254, 11]],
    },
    {
      name: "핀테크",
      data: [[357, 10]],
    },
    {
      name: "코스콤",
      data: [[356, 25]],
    },
    {
      name: "미래에셋증권",
      data: [[457, 21]],
    },
    {
      name: "카카오페이",
      data: [[254, 23]],
    },
    {
      name: "페이콕",
      data: [[174, 23]],
    },
    {
      name: "카카오뱅크",
      data: [[54, 20]],
    },
    {
      name: "마이뱅크",
      data: [[34, 12]],
    },
    {
      name: "핀마트",
      data: [[94, 21]],
    },
    {
      name: "부산은행",
      data: [[848, 56]],
    },
    {
      name: "뱅크몰",
      data: [[44, 15]],
    },
    {
      name: "토스증권",
      data: [[180, 18]],
    },
    {
      name: "뱅크샐러드",
      data: [[244, 22]],
    },
    {
      name: "신한은행",
      data: [[235, 23]],
    },
    {
      name: "토스뱅크",
      data: [[2820, 87]],
    },
  ];
  const options: ApexOptions = {
    chart: {
      zoom: {
        enabled: false,
      },
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
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: ["#FA916B"],
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      labels: {
        colors: isDark ? "#CBD5E1" : "#475569",
      },
    },
    xaxis: {
      min: 0,
      max: 3000,
      tickAmount: 3,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      title: {
        offsetY: -10,
        text: "대출잔액",
      },
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
        formatter(val: any) {
          return val / 1000 > 0 ? `${val / 1000}K` : val;
        },
      },
    },
    yaxis: {
      min: -20,
      title: {
        text: "연체액",
      },
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
      },
    },
  };
  return (
    <div>
      <Chart options={options} series={series} type="scatter" height="350" />
    </div>
  );
};

export default BalanceDelayChart;
