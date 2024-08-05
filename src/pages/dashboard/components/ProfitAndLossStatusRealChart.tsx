import { useEffect, useRef, useState } from "react";
import RealChart from "realchart";

const ProfitAndLossStatusRealChart = () => {
  const isMounted = useRef(false);
  const [chart, setChart] = useState<any>(null);
  const chartRef = useRef<any>(null);

  const config: object = {
    title: false,
    type: "bar",
    subtitle: {
      visible: true,
      text: "(단위: 백만원)",
      align: "right",
    },
    xAxis: {
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
    },
    yAxis: {
      title: "손익금액",
    },
    series: [
      {
        name: "2023 손익",
        style: {
          fill: "#4669fa",
          stroke: "#4669fa",
        },
        data: [4, 37, 37, 115, 202, 290, 397, 462, 573, 641, 717, 789],
        pointLabel: {
          visible: true,
        },
      },
      {
        name: "2024 손익",
        style: {
          fill: "#FA916B",
          stroke: "#FA916B",
        },
        data: [-36, 73, 184, 229, 0, 0, 0, 0, 0, 0, 0, 0],
        pointLabel: {
          visible: true,
        },
      },
    ],
  };

  useEffect(() => {
    if (!isMounted.current) {
      const realChart = RealChart.createChart(
        document,
        chartRef.current,
        config
      );
      setChart(realChart);
      isMounted.current = true;
    }
    return () => {
      if (chart) {
        chart.destory();
      }
    };
  }, []);

  return (
    <div
      id="realchart"
      ref={chartRef}
      style={{
        // width: "850px",
        height: "300px",
      }}
    />
  );
};

export default ProfitAndLossStatusRealChart;
