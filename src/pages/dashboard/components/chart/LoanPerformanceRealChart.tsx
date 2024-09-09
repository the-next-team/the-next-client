import { useEffect, useRef, useState } from "react";
import RealChart from "realchart";

const LoanPerformanceRealChart = ({ height = 300 }) => {
  const isMounted = useRef(false);
  const [chart, setChart] = useState<any>(null);
  const chartRef = useRef<any>(null);

  const config: object = {
    title: false,
    type: "line",
    subtitle: {
      visible: true,
      text: "(단위: 백만원)",
      align: "right",
    },
    xAxis: {
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
    },
    yAxis: {
      title: "대출잔액",
      grid: true,
      //   strictMax: 1000,
      //   strictMin: -200,
      tick: {
        stepInterval: 1000,
      },
    },
    series: [
      {
        name: "Agency",
        data: [
          1394, 1674, 2148, 2814, 3244, 3432, 3484, 3856, 4423, 5349, 5342,
          5744, 5883, 5973, 5956, 5956,
        ],
        color: "#4669fa",
        marker: {
          shape: "circle",
        },
        pointLabel: {
          visible: true,
        },
      },
      {
        name: "다이렉트",
        data: [
          683, 692, 703, 720, 1813, 2003, 1895, 2342, 2463, 2634, 2466, 2623,
          2634, 2273, 2546, 2546,
        ],
        color: "#FA916B",
        marker: {
          shape: "circle",
        },
        pointLabel: {
          visible: true,
        },
      },
      {
        name: "은행연계",
        data: [0, 0, 0, 0, 0, 0, 0, 873, 0, 0, 0, 934, 1035, 0, 0, 0],
        color: "#50C793",
        marker: {
          shape: "circle",
        },
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
export default LoanPerformanceRealChart;
