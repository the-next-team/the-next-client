import Icon from "../../../../components/icons/Icon";

import shade1 from "../../../../assets/images/all-img/shade-1.png";
import shade2 from "../../../../assets/images/all-img/shade-2.png";
import shade3 from "../../../../assets/images/all-img/shade-3.png";
import shade4 from "../../../../assets/images/all-img/shade-4.png";
import PerformanceStatusRealChart from "../PerformanceStatusRealChart";
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
      <PerformanceStatusRealChart
        data={[
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
      <PerformanceStatusRealChart
        data={[
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
        ]}
      />
    ),
  },
  {
    title: "당월대출금액",
    count: "563",
    bg: "bg-primary-500",
    text: "text-primary-500",
    percent: "7.15%",
    icon: "heroicons:arrow-trending-down",
    img: shade3,
    percentClass: "text-primary-500",
    chart: (
      <PerformanceStatusRealChart
        data={[
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
        ]}
      />
    ),
  },
  {
    title: "연체금액",
    count: "364",
    bg: "bg-success-500",
    text: "text-danger-500",
    percent: "4.75%",
    icon: "heroicons:arrow-trending-up",
    img: shade4,
    percentClass: "text-danger-500",
    chart: (
      <PerformanceStatusRealChart
        data={[
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
          className={`${item.bg} rounded-md p-3 bg-opacity-[0.15] dark:bg-opacity-25 relative z-[1]`}
        >
          <div className="overlay absolute left-0 top-0 w-full h-full z-[-1]">
            <img
              src={item.img}
              alt=""
              draggable="false"
              className="object-contain w-full h-full"
            />
          </div>
          <span className="block text-sm font-medium text-slate-900">
            {item.title}
          </span>
          <div className="flex items-center gap-2 mb-2">
            <span className="block text-xl font-medium text-slate-900">
              {item.count}
            </span>
            <div>
              <div className="flex gap-1">
                <Icon icon={item.icon} className={`${item.text}`} />
                <span className={`text-xs block ${item.percentClass}`}>
                  {item.percent}
                </span>
              </div>
              <span className="block text-[10px] text-slate-600">
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
