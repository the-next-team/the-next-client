import userAvatar from "../../../assets/images/all-img/main-user.png";
import Card from "../../../components/card/Card";
import DonutChart2 from "../../../components/chart/DonutChart2";
import EarningChart from "../../../components/chart/EarningChart";
import GroupChart1 from "../../../components/chart/GroupChart1";
import GroupChart2 from "../../../components/chart/GroupChart2";
import GroupChart3 from "../../../components/chart/GroupChart3";
import GroupChart4 from "../../../components/chart/GroupChart4";
import GroupChart5 from "../../../components/chart/GroupChart5";
import OrderChart from "../../../components/chart/OrderChart";
import ProfitChart from "../../../components/chart/ProfitChart";

function StatisticWidget() {
    return (
        <div className="space-y-5 ">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
            <GroupChart2 />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
            <GroupChart1 />
          </div>
          <Card>
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 place-content-center">
              <div className="flex items-center h-full space-x-4 rtl:space-x-reverse">
                <div className="flex-none">
                  <div className="w-20 h-20 rounded-full">
                    <img src={userAvatar} alt="" className="w-full h-full" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 text-xl font-medium">
                    <span className="block font-light">Good evening,</span>
                    <span className="block">Mr. Jone Doe</span>
                  </h4>
                  <p className="text-sm dark:text-slate-300">Welcome to Dashcode</p>
                </div>
              </div>
              <GroupChart5 />
            </div>
          </Card>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4 sm:grid-cols-2">
            <GroupChart3 />
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4 sm:grid-cols-2">
            <GroupChart4 />
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4 sm:grid-cols-2">
            <Card>
              <span className="block text-sm font-medium text-slate-500 dark:text-slate-300">
                Progress
              </span>
              <DonutChart2 />
            </Card>
            <Card>
              <span className="block text-sm font-medium text-slate-500 dark:text-slate-300">
                Progress
              </span>
              <DonutChart2 colors={["#F1595C", "#F9E1E5"]} />
            </Card>
            <Card>
              <span className="block text-sm font-medium text-slate-500 dark:text-slate-300">
                Progress
              </span>
              <DonutChart2 colors={["#50C793", "#E5F3E5"]} />
            </Card>
            <Card>
              <span className="block text-sm font-medium text-slate-500 dark:text-slate-300">
                Progress
              </span>
              <DonutChart2 colors={["#FA916B", "#fcc8b5"]} />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-6 lg:grid-cols-3 sm:grid-cols-2">
            <OrderChart className="p-4 bg-white rounded dark:bg-slate-800" />
            <OrderChart
              className="p-4 bg-white rounded dark:bg-slate-800"
              barColor={"#F1595C"}
            />
            <OrderChart
              className="p-4 bg-white rounded dark:bg-slate-800"
              barColor={"#50C793"}
            />
            <ProfitChart className="p-4 bg-white rounded dark:bg-slate-800" />
            <ProfitChart
              className="p-4 bg-white rounded dark:bg-slate-800"
              color={"#F1595C"}
            />{" "}
            <ProfitChart
              className="p-4 bg-white rounded dark:bg-slate-800"
              color={"#50C793"}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-3 lg:grid-cols-2">
            <EarningChart className="px-4 py-3 bg-white rounded dark:bg-slate-800" />
            <EarningChart className="px-4 py-3 bg-white rounded dark:bg-slate-800" />
            <EarningChart className="px-4 py-3 bg-white rounded dark:bg-slate-800" />
          </div>
        </div>
      );
}

export default StatisticWidget