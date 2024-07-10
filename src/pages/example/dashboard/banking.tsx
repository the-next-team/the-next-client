import React, { useState } from "react";

import Mainuser from "../../../assets/images/all-img/main-user.png";
import Card from "../../../components/card/Card";
import HomeBredCurbs from "./HomeBredCurbs";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import SelectMonth from "../../../components/partials/SelectMonth";
import GroupChart5 from "../../../components/chart/GroupChart5";
import HistoryChart from "../../../components/chart/HistoryChart";
import AccountReceivable from "../../../components/chart/AccountReceivable";
import AccountPayable from "../../../components/chart/AccountPayable";
import TextInput from "../../../components/form/TextInput";
const users = [
  {
    name: "Ab",
  },
  {
    name: "Bc",
  },
  {
    name: "Cd",
  },
  {
    name: "Df",
  },
  {
    name: "Ab",
  },
  {
    name: "Sd",
  },
  {
    name: "Sg",
  },
];

const BankingPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="space-y-5">
      <HomeBredCurbs title="Banking" />
      <Card>
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 place-content-center">
          <div className="flex items-center h-full space-x-4 rtl:space-x-reverse">
            <div className="flex-none">
              <div className="w-20 h-20 rounded-full">
                <img src={Mainuser} alt="" className="w-full h-full" />
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
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 space-y-5 lg:col-span-4">
          <Card title="My card">
            <div className="max-w-[90%] mx-auto mt-2">
              {/* <CardSlider /> */}
            </div>
          </Card>
          <Card title="Quick transfer">
            <div className="space-y-6">
              <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-900">
                <div className="flex justify-between mb-2">
                  <span className="text-lg text-slate-900 dark:text-white">
                    Contacts
                  </span>
                  <Link
                    to="#"
                    className="text-sm font-medium underline text-slate-900 dark:text-white"
                  >
                    View all
                  </Link>
                </div>
                <SimpleBar>
                  <ul className="flex px-1 py-3 space-x-6">
                    {users.map((item, i) => (
                      <li
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={` h-[42px] w-[42px] cursor-pointer text-xl font-medium capitalize flex-none rounded-full bg-primary-500 text-white flex flex-col items-center justify-center
                     ${
                       activeIndex === i
                         ? "ring-2 ring-primary-500 ring-offset-2 "
                         : ""
                     }
                      `}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </SimpleBar>
              </div>
              <div className="p-4 rounded-md bg-slate-100 dark:bg-slate-900">
                <label
                  className="block mb-1 text-xs font-normal cursor-pointer text-slate-500 dark:text-slate-400"
                  htmlFor="cdp"
                >
                  Amount
                </label>
                <TextInput
                  placeholder="$6547"
                  id="cdp"
                  className="h-auto p-0 text-sm font-medium bg-transparent border-none focus:ring-0 focus:border-none text-slate-900 dark:text-white placeholder:text-slate-400 placeholder:font-medium"
                />
              </div>
              <div className="p-4 rounded-md bg-slate-100 dark:bg-slate-900">
                <label
                  className="block mb-1 text-xs cursor-pointer text-slate-500 dark:text-slate-400"
                  htmlFor="cd"
                >
                  Recipient account number
                </label>

                <TextInput
                  placeholder="3458-3548-6548-3244"
                  id="cd"
                  className="h-auto p-0 text-sm font-medium bg-transparent border-none focus:ring-0 focus:border-none text-slate-900 dark:text-white placeholder:text-slate-400 placeholder:font-medium"
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="block mb-1 text-xs text-slate-500 dark:text-slate-400">
                    Total amount
                  </span>
                  <span className="block text-lg font-medium text-slate-900 dark:text-white">
                    $6547
                  </span>
                </div>
                <div>
                  <button type="button" className="btn btn-dark">
                    Send money
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div className="space-y-5 bank-table">
            {/* <TransactionsTable /> */}
            <Card title="History" headerslot={<SelectMonth />}>
              <div className="legend-ring4">
                <HistoryChart />
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Card title="Account Receivable" headerslot={<SelectMonth />}>
          <AccountReceivable />
        </Card>
        <Card title="Account Payable" headerslot={<SelectMonth />}>
          <AccountPayable />
        </Card>
      </div>
    </div>
  );
};

export default BankingPage;
