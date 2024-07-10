import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { colors } from "../../constants/data";
const columnCharthome2: { series: any; options: ApexOptions } = {
  series: [
    {
      name: "Revenue",
      data: [40, 70, 45, 100, 75, 40, 80, 90],
    },
  ],
  options: {
    chart: {
      toolbar: {
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
    plotOptions: {
      bar: {
        columnWidth: "60px",
        barHeight: "100%",
      },
    },
    legend: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return "$ " + val + "k";
        },
      },
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    // colors: [colors.warning],
    grid: {
      show: false,
    },
  },
};
const columnCharthome3: { series: any; options: ApexOptions } = {
  series: [
    {
      name: "Revenue",
      data: [40, 70, 45, 100, 75, 40, 80, 90],
    },
  ],
  options: {
    chart: {
      toolbar: {
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
    plotOptions: {
      bar: {
        columnWidth: "60px",
        barHeight: "100%",
      },
    },
    legend: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return "$ " + val + "k";
        },
      },
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    // colors: [colors.info],
    grid: {
      show: false,
    },
  },
};
const columnCharthome4: { series: any; options: ApexOptions } = {
  series: [
    {
      name: "Revenue",
      data: [40, 70, 45, 100, 75, 40, 80, 90],
    },
  ],
  options: {
    chart: {
      toolbar: {
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
    plotOptions: {
      bar: {
        columnWidth: "60px",
        barHeight: "100%",
      },
    },
    legend: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return "$ " + val + "k";
        },
      },
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    // colors: [colors.success],
    grid: {
      show: false,
    },
  },
};
const statistics = [
  {
    name: columnCharthome3,
    title: "Current balance ",
    count: "$34,564",
    bg: "bg-[#E5F9FF] dark:bg-slate-900	",
    text: "text-info-500",
    icon: "heroicons:shopping-cart",
  },
  {
    name: columnCharthome4,
    title: "Credit",
    count: "$3,564",
    bg: "bg-[#E5F9FF] dark:bg-slate-900	",
    text: "text-warning-500",
    icon: "heroicons:cube",
  },
  {
    name: columnCharthome2,
    title: "Debit",
    count: "$3,564",
    bg: "bg-[#E5F9FF] dark:bg-slate-900	",
    text: "text-[#5743BE]",
    icon: "heroicons:arrow-trending-up-solid",
  },
];
const GroupChart5 = () => {
  return (
    <>
      {statistics.map((item, i) => (
        <div className="p-4 rounded bg-slate-50 dark:bg-slate-900" key={i}>
          <div className="mb-1 text-sm font-medium text-slate-600 dark:text-slate-400">
            {item.title}
          </div>
          <div className="text-lg font-medium text-slate-900 dark:text-white">
            {item.count}
          </div>
          <div className="ml-auto max-w-[124px]">
            <Chart
              options={item.name.options}
              series={item.name.series}
              type="bar"
              height="48"
              width="124"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default GroupChart5;
