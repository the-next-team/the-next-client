import { useEffect, useRef, useState } from "react";
import RealChart from "realchart";

const PerformanceStatusRealChart = ({ name = "", data = [{}] }) => {
  const isMounted = useRef(false);
  const [chart, setChart] = useState<any>(null);
  const chartRef = useRef<any>(null);

  const config = RealChart.configure({
    title: "",
    legend: false,
    series: [
      {
        name: name,
        data: data,
        type: "pie",
        innerRadius: "50%",
        legendByPoint: true,
        pointStyle: {
          stroke: "none",
        },
        pointColors: ["#4669fa", "#FA916B", "#50C793", "#F1595C"],
        pointLabel: {
          //   visible: true,
          text: "${x} ${y}%",
          effect: "background",
          position: "inside",
          backgroundStyle: {
            fillOpacity: "0.8",
            fill: "#475569",
            stroke: "",
            rx: "1px",
          },
          style: {
            fill: "#ffffff",
            fontSize: "10px",
          },
          visibleCallback: (args) => {
            return args.y > 1; // 값이 20이상일 경우에는 pointLabel 표시
          },
        },
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
        height: "200px",
      }}
    />
  );
};
export default PerformanceStatusRealChart;
