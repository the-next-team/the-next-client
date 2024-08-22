import { useEffect, useRef, useState } from "react";
import RealChart from "realchart";

const MonthlyBalanceRealChart = ({ height = 300 }) => {
  const isMounted = useRef(false);
  const [chart, setChart] = useState<any>(null);
  const chartRef = useRef<any>(null);

  const config = RealChart.configure({
    title: "",
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
      tick: {
        stepInterval: 10,
      },
    },
    options: {
      colors: ["#4669fa", "#FA916B", "#50C793", "#F1595C"],
    },
    series: [
      {
        type: "area",
        lineType: "spline",
        name: "name2",
        data: [44, 55, 41, 67, 22, 43, 32, 42, 12, 32, 23, 21, 41, 56, 27, 43],
        color: "#FA916B",
        areaStyle: {
          fillOpacity: "0.3",
        },
        style: {
          strokeWidth:"2"
        }
      },
      {
        type: "line",
        lineType: "spline",
        name: "name3",
        data: [30, 25, 36, 30, 43, 24, 58, 30, 45, 35, 64, 52, 59, 36, 48, 39],
        color: "#50C793",
        style: {
          strokeWidth:"3"
        },
        marker: {
          visible:false
        }
      },
      {
        type: "bar",
        name: "name1",
        data: [23, 11, 22, 27, 13, 22, 23, 12, 32, 41, 43, 37, 21, 44, 22, 30],
        color: "#4669fa",
      },
    ],
  });

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
export default MonthlyBalanceRealChart;
