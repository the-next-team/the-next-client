import { useEffect, useRef, useState } from "react";
import RealChart from "realchart";

const BalanceDelayRealChart = () => {
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
      grid: true,
      title: "대출잔액",
    },
    yAxis: {
      grid: true,
      title: "연체액",
      tick: {
        stepInterval: 20,
      },
    },
    type: "scatter",
    templates: {
      series: {
        shape: "circle",
      },
    },
    series: [
      {
        name: "핀다",
        data: [[200, 14]],
        template: "series",
      },
      {
        name: "이노핀",
        data: [[234, 18]],
        template: "series",
      },
      {
        name: "비바리퍼블리카",
        data: [[254, 11]],
        template: "series",
      },
      {
        name: "핀테크",
        data: [[357, 10]],
        template: "series",
      },
      {
        name: "코스콤",
        data: [[356, 25]],
        template: "series",
      },
      {
        name: "미래에셋증권",
        data: [[457, 21]],
        template: "series",
      },
      {
        name: "카카오페이",
        data: [[254, 23]],
        template: "series",
      },
      {
        name: "페이콕",
        data: [[174, 23]],
        template: "series",
      },
      {
        name: "카카오뱅크",
        data: [[54, 20]],
        template: "series",
      },
      {
        name: "마이뱅크",
        data: [[34, 12]],
        template: "series",
      },
      {
        name: "핀마트",
        data: [[94, 21]],
        template: "series",
      },
      {
        name: "부산은행",
        data: [[848, 56]],
        template: "series",
      },
      {
        name: "뱅크몰",
        data: [[44, 15]],
        template: "series",
      },
      {
        name: "토스증권",
        data: [[180, 18]],
        template: "series",
      },
      {
        name: "뱅크샐러드",
        data: [[244, 22]],
        template: "series",
      },
      {
        name: "신한은행",
        data: [[235, 23]],
        template: "series",
      },
      {
        name: "토스뱅크",
        data: [[2820, 87]],
        template: "series",
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

export default BalanceDelayRealChart;
