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
        data: [
          {
            x: "핀다",
            y: 14,
          },
          {
            x: "이노핀",
            y: 5,
          },
          {
            x: "비바리퍼블리카",
            y: 5,
          },
          {
            x: "핀테크",
            y: 5,
          },
          {
            x: "코스콤",
            y: 4,
          },
          {
            x: "미래에셋증권",
            y: 4,
          },
          {
            x: "카카오페이",
            y: 4,
          },
          {
            x: "페이콕",
            y: 3,
          },
          {
            x: "카카오뱅크",
            y: 3,
          },
          {
            x: "마이뱅크",
            y: 2,
          },
          {
            x: "핀마트",
            y: 1,
          },
          {
            x: "부산은행",
            y: 1,
          },
          {
            x: "뱅크몰",
            y: 1,
          },
          {
            x: "토스증권",
            y: 1,
          },
          {
            x: "뱅크샐러드",
            y: 1,
          },
          {
            x: "신한은행",
            y: 1,
          },
          {
            x: "토스뱅크",
            y: 1,
          },
        ],
        type: "pie",
        innerRadius: "50%",
        legendByPoint: true,
        pointStyle: {
          stroke: "none",
        },
        tooltipText: "${x} ${y}%",
        pointColors: ["#4669fa", "#FA916B", "#50C793", "#F1595C"],
        pointLabel: {
          textCallback: (arg) => {
            let total = 0;
            arg.series._visPoints.forEach((p: { yValue: number; }) => {
                total += p.yValue;
            });
            const percentage = (arg.yValue / total) * 100;
            return '${x} ' + (percentage.toLocaleString(undefined, {
                useGrouping: false,
                minimumFractionDigits: 1,
                maximumFractionDigits: 1
            }) + '%');
        },
          visible: true,
          text: "${x} ${y}%",
          effect: "background",
          position: "inside",
          backgroundStyle: {
            fillOpacity: "0.8",
            fill: "#475569",
            rx: '4',
            //@ts-expect-error
            padding: '2px 4px',
          },
          style: {
            fill: "#ffffff",
            fontSize: "10px",
          },
          visibleCallback: (args) => {
            return args.y > 1;
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
