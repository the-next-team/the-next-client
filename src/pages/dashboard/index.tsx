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
import RealChartTest from "./components/RealChartTest";

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
    <div className="mb-3 flex items-center justify-between border-b border-slate-200 pb-1">
      <p className="font-semibold text-custom-black">{title}</p>
      {more && (
        <div className="hover:cursor-pointer select-none text-slate-700 duration-100 hover:text-primary-800 flex items-center">
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
  return (
    <div className="flex gap-2 overflow-x-hidden">
      <div className="w-80 space-y-2">
        <Profile />
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
        <Card title="경기도 성남시 인구 현황">
          <RealChartTest />
        </Card>
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
          <Card title="손익현황">
            <ProfitAndLossStatusChart />
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
