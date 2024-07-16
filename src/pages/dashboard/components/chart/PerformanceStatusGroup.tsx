import React from "react";
import Icon from "../../../../components/icons/Icon";

import shade1 from "../../../../assets/images/all-img/shade-1.png";
import shade2 from "../../../../assets/images/all-img/shade-2.png";
import shade3 from "../../../../assets/images/all-img/shade-3.png";
import shade4 from "../../../../assets/images/all-img/shade-4.png";
import PerformanceStatusChart from "./PerformanceStatusChart";
const statistics = [
  {
    title: "대출금액",
    count: "12,870",
    bg: "bg-warning-500",
    text: "text-danger-500",
    percent: "4.58% ",
    icon: "heroicons:arrow-trending-up",
    img: shade1,
    percentClass: "text-danger-500",
    chart: (
      <PerformanceStatusChart
        series={[14, 5, 5, 5, 4, 4, 4, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1]}
        labels={[
          "핀다",
          "이노핀",
          "비바리퍼블리카",
          "핀테크",
          "코스콤",
          "미래에셋증권",
          "카카오페이",
          "페이콕",
          "카카오뱅크",
          "마이뱅크",
          "핀마트",
          "부산은행",
          "뱅크몰",
          "토스증권",
          "뱅크샐러드",
          "신한은행",
          "토스뱅크",
        ]}
      />
    ),
  },
  {
    title: "대출잔액",
    count: "6,919",
    bg: "bg-info-500",
    text: "text-danger-500",
    percent: "3.07%",
    icon: "heroicons:arrow-trending-up",
    img: shade2,
    percentClass: "text-danger-500",
    chart: (
      <PerformanceStatusChart
        series={[14, 5, 5, 5, 4, 4, 4, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1]}
        labels={[
          "핀다",
          "이노핀",
          "비바리퍼블리카",
          "핀테크",
          "코스콤",
          "미래에셋증권",
          "카카오페이",
          "페이콕",
          "카카오뱅크",
          "마이뱅크",
          "핀마트",
          "부산은행",
          "뱅크몰",
          "토스증권",
          "뱅크샐러드",
          "신한은행",
          "토스뱅크",
        ]}
      />
    ),
  },
  {
    title: "당월대출금액",
    count: "563",
    bg: "bg-primary-500",
    text: "text-primary-500",
    percent: "7.15%  ",
    icon: "heroicons:arrow-trending-down",
    img: shade3,
    percentClass: "text-primary-500",
    chart: (
      <PerformanceStatusChart
        series={[14, 5, 5, 5, 4, 4, 4, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1]}
        labels={[
          "핀다",
          "이노핀",
          "비바리퍼블리카",
          "핀테크",
          "코스콤",
          "미래에셋증권",
          "카카오페이",
          "페이콕",
          "카카오뱅크",
          "마이뱅크",
          "핀마트",
          "부산은행",
          "뱅크몰",
          "토스증권",
          "뱅크샐러드",
          "신한은행",
          "토스뱅크",
        ]}
      />
    ),
  },
  {
    title: "연체금액",
    count: "364",
    bg: "bg-success-500",
    text: "text-danger-500",
    percent: "4.75%  ",
    icon: "heroicons:arrow-trending-up",
    img: shade4,
    percentClass: "text-danger-500",
    chart: (
      <PerformanceStatusChart
        series={[14, 5, 5, 5, 4, 4, 4, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1]}
        labels={[
          "핀다",
          "이노핀",
          "비바리퍼블리카",
          "핀테크",
          "코스콤",
          "미래에셋증권",
          "카카오페이",
          "페이콕",
          "카카오뱅크",
          "마이뱅크",
          "핀마트",
          "부산은행",
          "뱅크몰",
          "토스증권",
          "뱅크샐러드",
          "신한은행",
          "토스뱅크",
        ]}
      />
    ),
  },
];
const PerformanceStatusGroup = () => {
  return (
    <>
      {statistics.map((item, i) => (
        <div
          key={i}
          className={`${item.bg} rounded-md p-4 bg-opacity-[0.15] dark:bg-opacity-25 relative z-[1]`}
        >
          <div className="overlay absolute left-0 top-0 w-full h-full z-[-1]">
            <img
              src={item.img}
              alt=""
              draggable="false"
              className="object-contain w-full h-full"
            />
          </div>
          <span className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">
            {item.title}
          </span>
          <div className="flex items-center gap-3 mb-4">
            <span className="block text-3xl font-medium text-slate-900 dark:text-white">
              {item.count}
            </span>
            <div>
              <div className="flex gap-1">
                <Icon icon={item.icon} className={`text-xl ${item.text}`} />
                <span className={`text-sm block ${item.percentClass} `}>
                  {item.percent}
                </span>
              </div>
              <span className="block text-[10px] text-slate-600 dark:text-slate-300">
                전월 대비 증감율
              </span>
            </div>
          </div>
          {item.chart}
        </div>
      ))}
    </>
  );
};

export default PerformanceStatusGroup;
