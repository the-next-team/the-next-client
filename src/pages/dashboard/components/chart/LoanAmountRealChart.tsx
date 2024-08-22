import { useEffect, useRef, useState } from "react";
import RealChart from "realchart";

const LoanAmountRealChart = ({ height = 300 }) => {
  const isMounted = useRef(false);
  const [chart, setChart] = useState<any>(null);
  const chartRef = useRef<any>(null);

  const config: object = {
    title: false,
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
      title: "대출금액",
      grid: true,
      //   strictMax: 1000,
      //   strictMin: -200,
      tick: {
        stepInterval: 2000,
      },
    },
    series: [
      {
        type: "bar",
        name: "대출금액",
        data: [
          2894, 2974, 3148, 3214, 4044, 4232, 4584, 5056, 5423, 6349, 6342,
          6744, 6883, 6973, 7956, 7956,
        ],
        color: "#4669fa",
      },
      {
        type: "line",
        name: "대출잔액",
        data: [
          4394, 4674, 4348, 4834, 6244, 5432, 6484, 6856, 6423, 6349, 7342,
          7744, 7883, 8973, 8956, 9956,
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
        type: "line",
        name: "연체금액",
        data: [
          1283, 1292, 1303, 1620, 1813, 2003, 1895, 2342, 2463, 2634, 2466,
          2623, 2634, 2273, 2546, 2546,
        ],
        color: "#50C793",
        marker: {
          shape: "circle",
        },
        pointLabel: {
          visible: true,
        },
      },
      {
        type: "line",
        name: "당월대출금액",
        data: [0, 0, 0, 0, 0, 0, 0, 873, 0, 0, 0, 934, 1035, 0, 0, 0],
        color: "#F1595C",
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
export default LoanAmountRealChart;
