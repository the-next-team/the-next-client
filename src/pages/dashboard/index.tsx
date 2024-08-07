import { NotificationService } from "../../api/services/notification/notificationService";
import Button from "../../components/button/Button";
import PopupButton from "../../components/button/PopupButton";
import CalendarView from "./components/widget/CalendarView";
import Profile from "./components/widget/profile";
import RecentActivity from "./components/widget/recent-activity";
import TaskLists from "./components/widget/task-list";
import useNotification from "../../hooks/useNotification";
import BalanceDelayChart from "./components/chart/BalanceDelayChart";
import LoanAmountChart from "./components/chart/LoanAmountChart";
import LoanPerformanceChart from "./components/chart/LoanPerformanceChart";
import MonthlyBalanceChart from "./components/chart/MonthlyBalanceChart";
import PerformanceStatusGroup from "./components/chart/PerformanceStatusGroup";
import ProfitAndLossStatusChart from "./components/chart/ProfitAndLossStatusChart";
import { Icon } from "@iconify/react";
import ProfitAndLossStatusRealChart from "./components/ProfitAndLossStatusRealChart";
import BalanceDelayRealChart from "./components/BalanceDelayRealChart";
import { useState } from "react";
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";

const Card = ({
  title,
  more = false,
  children,
  className = "",
}: {
  title: string;
  more?: boolean;
  children?: React.ReactNode;
  className?: string;
}) => (
  <div className={`bg-white rounded p-3 ${className}`}>
    <div className="flex items-center justify-between pb-1 mb-3 border-b border-slate-200">
      <p className="font-semibold text-custom-black">{title}</p>
      {more && (
        <div className="flex items-center duration-100 select-none hover:cursor-pointer text-slate-700 hover:text-primary-800">
          <Icon icon="heroicons:plus-small-20-solid" />
          <p className="text-xs">더보기</p>
        </div>
      )}
    </div>
    {children && children}
  </div>
);

function Dashboard() {
  const { show } = useNotification();
  const [date, setDate] = useState<Date | null>(new Date());
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  return (
    <div className="flex gap-2 overflow-x-hidden">
      <div className="space-y-2 w-80">
        <Profile />
        <Card title="react-datepicker 예시" className="flex flex-col gap-1">
          <DatePicker
            className="w-52"
            locale={ko}
            dateFormat="yyyy.MM.dd"
            shouldCloseOnSelect
            minDate={new Date()}
            maxDate={new Date("2030-12-31")}
            selected={date}
            onChange={(date) => setDate(date)}
          />
          <DatePicker
            className="w-52"
            locale={ko}
            dateFormat="yyyy.MM.dd"
            selected={startDate}
            onChange={(dates) => {
              const [start, end] = dates;
              setStartDate(start ?? null);
              setEndDate(end);
            }}
            startDate={startDate ?? undefined}
            endDate={endDate ?? undefined}
            selectsRange
          />
        </Card>
        {/* TO-DO List */}
        <Card title="TO-DO List">
          <div className="pb-3">
            <CalendarView />
          </div>
          <TaskLists />
        </Card>
        {/* 공지사항 */}
        <Card title="공지사항" more>
          <RecentActivity />
        </Card>
      </div>
      <div className="w-full space-y-2">
        <Card title="리테일금융 실적현황">
          <div className="grid col-span-1 gap-3 2xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1">
            <PerformanceStatusGroup />
          </div>
        </Card>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          <Card title="채널별 대출실적">
            <LoanPerformanceChart />
          </Card>
          <Card title="기간별 대출금액 현황">
            <LoanAmountChart />
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          <Card title="채널별 잔액/연체 분표도">
            <BalanceDelayChart />
          </Card>
          <Card title="채널별 잔액/연체 분표도 (RealChart)">
            <BalanceDelayRealChart />
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          <Card title="손익현황">
            <ProfitAndLossStatusChart />
          </Card>
          <Card title="손익현황 (RealChart)">
            <ProfitAndLossStatusRealChart />
          </Card>
        </div>
        <Card title="여.수신월별잔액">
          <MonthlyBalanceChart />
        </Card>
        <div className="flex items-start gap-2">
          <PopupButton
            width={1600}
            height={1000}
            path={"/audit?inspNo=3384222342011"}
            children={<p>open popup</p>}
          />
          <Button
            className="btn-sm btn-primary"
            onClick={() => {
              show({
                title: "알림",
                body: "내용",
              });
            }}
          >
            <p>Show Nitification</p>
          </Button>
          <Button
            className="btn-sm btn-primary"
            onClick={() => {
              NotificationService.send();
            }}
          >
            <p>Show Local Nitification</p>
          </Button>
          {/* <ThrowErrorComponent/> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
