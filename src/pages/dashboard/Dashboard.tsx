import { Link } from "react-router-dom";
import { NotificationService } from "../../api/services/notification/notificationService";
import Button from "../../components/button/ExampleButton";
import PopupButton from "../../components/button/PopupButton";
import Card from "../../components/card/Card";
import CalendarView from "../../components/partials/widget/CalendarView";
import Profile from "../../components/partials/widget/profile";
import RecentActivity from "../../components/partials/widget/recent-activity";
import TaskLists from "../../components/partials/widget/task-list";
import useNotification from "../../hooks/useNotification";
import BalanceDelayChart from "./components/chart/BalanceDelayChart";
import LoanAmountChart from "./components/chart/LoanAmountChart";
import LoanPerformanceChart from "./components/chart/LoanPerformanceChart";
import MonthlyBalanceChart from "./components/chart/MonthlyBalanceChart";
import PerformanceStatusGroup from "./components/chart/PerformanceStatusGroup";
import ProfitAndLossStatusChart from "./components/chart/ProfitAndLossStatusChart";

function Dashboard() {
  const { show } = useNotification();
  return (
    <div className="flex items-start gap-2">
      <div className="flex flex-col gap-2 w-72">
        <Profile />
        <Card
          title="TO-DO List"
          headerslot={
            <div className="text-sm text-slate-800 dark:text-slate-200">
              <div></div>
            </div>
          }
        >
          <div className="pb-4">
            <CalendarView />
          </div>
          <hr className="pb-4 -mx-6" />
          <TaskLists />
        </Card>
        <Card
          title="공지사항"
          headerslot={
            <div className="text-sm text-slate-800 dark:text-slate-200">
              <Link to="#" className="underline">
                더보기
              </Link>
            </div>
          }
        >
          <RecentActivity />
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <Card title="리테일금융 실적현황">
          <div className="grid col-span-1 gap-3 2xl:grid-cols-4 xl:grid-cols-2">
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
