import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

const shapeLine1: { series: any; options: ApexOptions } = {
  series: [
    {
      data: [800, 600, 1000, 800, 600, 1000, 800, 900],
    },
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#00EBFF"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      offsetX: 0,
      offsetY: 0,
      labels: {
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        offsetX: 0,
        show: false,
      },
    },
  },
};
const shapeLine2: { series: any; options: ApexOptions } = {
  series: [
    {
      data: [800, 600, 1000, 800, 600, 1000, 800, 900],
    },
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#FB8F65"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      offsetX: 0,
      offsetY: 0,
      labels: {
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        offsetX: 0,
        show: false,
      },
    },
  },
};
const shapeLine3: { series: any; options: ApexOptions } = {
  series: [
    {
      data: [800, 600, 1000, 800, 600, 1000, 800, 900],
    },
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#5743BE"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      offsetX: 0,
      offsetY: 0,
      labels: {
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        offsetX: 0,
        show: false,
      },
    },
  },
};

const statistics = [
  {
    name: shapeLine1,
    title: "Totel revenue",
    count: "3,564",
    bg: "bg-[#E5F9FF] dark:bg-slate-900	",
  },
  {
    name: shapeLine2,
    title: "Products sold",
    count: "564",
    bg: "bg-[#FFEDE5] dark:bg-slate-900	",
  },
  {
    name: shapeLine3,
    title: "Growth",
    count: "+5.0%",
    bg: "bg-[#EAE5FF] dark:bg-slate-900	",
  },
];
const GroupChart1 = () => {
  return (
    <>
      {statistics.map((item, i) => (
        <div className={`py-[18px] px-4 rounded-[6px] ${item.bg}`} key={i}>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="flex-none">
              <Chart
                options={item.name.options}
                series={item.name.series}
                type="area"
                height={48}
                width={48}
              />
            </div>
            <div className="flex-1">
              <div className="mb-1 text-sm font-medium text-slate-800 dark:text-slate-300">
                {item.title}
              </div>
              <div className="text-lg font-medium text-slate-900 dark:text-white">
                {item.count}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default GroupChart1;
