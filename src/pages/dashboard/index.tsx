import { Icon } from "@iconify/react";
import { NotificationService } from "../../api/services/notification/notificationService";
import Button from "../../components/button/Button";
import PopupButton from "../../components/button/PopupButton";
import useNotification from "../../hooks/useNotification";
import BalanceDelayRealChart from "./components/chart/BalanceDelayRealChart";
import PerformanceStatusGroup from "./components/chart/PerformanceStatusGroup";
import LoanAmountRealChart from "./components/chart/LoanAmountRealChart";
import LoanPerformanceRealChart from "./components/chart/LoanPerformanceRealChart";
import ProfitAndLossStatusRealChart from "./components/chart/ProfitAndLossStatusRealChart";
import ReactDatePicker from "./components/widget/ReactDatePicker";
import CalendarView from "./components/widget/CalendarView";
import Profile from "./components/widget/profile";
import RecentActivity from "./components/widget/recent-activity";
import TaskLists from "./components/widget/task-list";
import MonthlyBalanceRealChart from "./components/chart/MonthlyBalanceRealChart";

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

  return (
    <div className="flex gap-2 overflow-x-hidden">
      <div className="space-y-2 w-80">
        <Profile />
        <Card title="react-datepicker 예시" className="flex flex-col gap-1">
          <ReactDatePicker />
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
            <LoanPerformanceRealChart />
          </Card>
          <Card title="기간별 대출금액 현황">
            <LoanAmountRealChart />
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          <Card title="채널별 잔액/연체 분표도">
            <BalanceDelayRealChart />
          </Card>
          <Card title="손익현황">
            <ProfitAndLossStatusRealChart />
          </Card>
        </div>
        <Card title="여.수신월별잔액">
          <MonthlyBalanceRealChart />
        </Card>
        <div className="flex items-start gap-2">
          <PopupButton
            width={1600}
            height={1000}
            path={"/audit"}
            params={{ inspNo: "3384222342011" }}
            onClose={() => {
              console.log("onClose");
            }}
            onResult={(data: any) => {
              console.log("onResult", data);
            }}
            children={<p>open popup</p>}
          />
          <PopupButton
            width={1000}
            height={700}
            path={"/address"}
            children={<p>address popup</p>}
          />
          <PopupButton
            width={1000}
            height={700}
            path={"/samplePage"}
            children={<p>sample popup</p>}
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
