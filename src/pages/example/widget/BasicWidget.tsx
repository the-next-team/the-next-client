import wbg1 from "../../../assets/images/all-img/widget-bg-1.png";
import wbg4 from "../../../assets/images/all-img/widget-bg-2.png";
import wbg2 from "../../../assets/images/all-img/widget-bg-3-1.png";
import wbg3 from "../../../assets/images/all-img/widget-bg-3.png";
import wbg5 from "../../../assets/images/all-img/widget-bg-4.png";
import wbg6 from "../../../assets/images/all-img/widget-bg-5.png";
import wbg7 from "../../../assets/images/all-img/widget-bg-6.png";
import wbg8 from "../../../assets/images/all-img/widget-bg-7.png";
import wbg9 from "../../../assets/images/all-img/widget-bg-8.png";
import svgGift from "../../../assets/images/svg/gift.svg";
import svgLine from "../../../assets/images/svg/line.svg";
import svgRabit from "../../../assets/images/svg/rabit.svg";
import vectorImage from "../../../assets/images/svg/widgetvector.svg";
import vectorImage2 from "../../../assets/images/svg/widgetvector2.svg";
import Button from "../../../components/button/Button";

const rabitWidget = [
  {
    bg: "bg-slate-900 dark:bg-slate-800",
  },
  {
    bg: "bg-primary-500",
  },
  {
    bg: "bg-success-500",
  },
  {
    bg: "bg-info-500 ",
  },
];
const griftWidget = [
  {
    bg: "bg-slate-900 dark:bg-slate-800",
  },
  {
    bg: "bg-primary-500",
  },
  {
    bg: "bg-success-500",
  },
  {
    bg: "bg-info-500 ",
  },
  {
    bg: "bg-danger-500 ",
  },
  {
    bg: "bg-warning-500 ",
  },
];

function BasicWidget() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 sm:grid-cols-2">
        <div
          className="bg-no-repeat bg-cover bg-center p-4 rounded-[6px] relative"
          style={{
            backgroundImage: `url(${wbg3})`,
          }}
        >
          <div className="max-w-[180px]">
            <h4 className="mb-2 text-xl font-medium text-white">
              Upgrade your Dashcode
            </h4>
            <p className="text-sm text-white text-opacity-80">
              Pro plan for better results
            </p>
          </div>
          <div className="absolute flex flex-col items-center justify-center w-12 h-12 mt-2 text-xs font-medium -translate-y-1/2 bg-white rounded-full top-1/2 ltr:right-6 rtl:left-6">
            Now
          </div>
        </div>
        {/* ?? end Single ?? */}
        <div
          className="bg-no-repeat bg-cover bg-center p-4 rounded-[6px] relative"
          style={{
            backgroundImage: `url(${wbg1})`,
          }}
        >
          <div className="max-w-[180px]">
            <div className="mb-2 text-xl font-medium text-slate-900">
              Upgrade your Dashcode
            </div>
            <p className="text-sm text-slate-800">
              Pro plan for better results
            </p>
          </div>
          <div className="absolute flex flex-col items-center justify-center w-12 h-12 mt-2 text-xs font-medium -translate-y-1/2 bg-white rounded-full top-1/2 ltr:right-6 rtl:left-6">
            Now
          </div>
        </div>
        {/* ?? end Single ?? */}
        <div
          className="bg-no-repeat bg-cover bg-center p-4 rounded-[6px] relative"
          style={{
            backgroundImage: `url(${wbg2})`,
          }}
        >
          <div className="max-w-[180px]">
            <div className="mb-2 text-xl font-medium text-slate-900">
              Upgrade your Dashcode
            </div>
            <p className="text-sm text-slate-800">
              Pro plan for better results
            </p>
          </div>
          <div className="absolute flex flex-col items-center justify-center w-12 h-12 mt-2 text-xs font-medium -translate-y-1/2 bg-white rounded-full top-1/2 ltr:right-6 rtl:left-6">
            Now
          </div>
        </div>
        {/* ?? end Single ?? */}
        <div
          className="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative"
          style={{
            backgroundImage: `url(${wbg4})`,
          }}
        >
          <div className="max-w-[180px]">
            <h4 className="mb-2 text-xl font-medium text-white">
              <span className="block font-normal">Good evening,</span>
              <span className="block">Mr. Dianne Russell</span>
            </h4>
            <p className="text-sm font-normal text-white">
              Welcome to Dashcode
            </p>
          </div>
        </div>
        {/* ?? end Single ?? */}
        <div
          className="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative flex items-center"
          style={{
            backgroundImage: `url(${wbg5})`,
          }}
        >
          <div className="flex-1">
            <div className="max-w-[180px]">
              <div className="mb-2 text-xl font-medium text-slate-900">
                <span className="block font-normal">Good evening,</span>
                <span className="block">Mr. Dianne Russell</span>
              </div>
              <p className="text-sm font-normal text-slate-900">
                Welcome to Dashcode
              </p>
            </div>
          </div>
          <div className="flex-none">
            <img src={vectorImage} alt="" className="ml-auto" />
          </div>
        </div>
        {/* ?? end Single ?? */}
        <div
          className="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative flex items-center"
          style={{
            backgroundImage: `url(${wbg6})`,
          }}
        >
          <div className="flex-1">
            <div className="max-w-[180px]">
              <div className="mb-2 text-xl font-medium text-white dark:text-slate-800">
                <span className="block font-normal">Good evening,</span>
                <span className="block">Mr. Dianne Russell</span>
              </div>
              <p className="text-sm font-normal text-white text-wgite dark:text-slate-800">
                Welcome to Dashcode
              </p>
            </div>
          </div>
          <div className="flex-none">
            <img src={vectorImage2} alt="" className="ml-auto" />
          </div>
        </div>
        {/* ?? end Single ?? */}
        <div
          className="bg-no-repeat bg-cover bg-center px-5 py-8 rounded-[6px] relative flex items-center"
          style={{
            backgroundImage: `url(${wbg7})`,
          }}
        >
          <div className="flex-1">
            <div className="max-w-[180px]">
              <h4 className="mb-2 text-2xl font-medium text-white">
                <span className="block text-sm">Current balance,</span>
                <span className="block">$34,564</span>
              </h4>
            </div>
          </div>
          <div className="flex-none">
            <Button
              icon="heroicons-outline:eye"
              text="View details"
              className="bg-white btn-light btn-sm "
            />
          </div>
        </div>
        {/* ?? end Single ?? */}
        <div
          className="bg-no-repeat bg-cover bg-center px-5 py-8 rounded-[6px] relative flex items-center"
          style={{
            backgroundImage: `url(${wbg8})`,
          }}
        >
          <div className="flex-1">
            <div className="max-w-[180px]">
              <h4 className="mb-2 text-2xl font-medium text-slate-900">
                <span className="block text-sm dark:text-slate-800">
                  Current balance,
                </span>
                <span className="block dark:text-slate-800">$34,564</span>
              </h4>
            </div>
          </div>
          <div className="flex-none">
            <Button
              icon="heroicons-outline:eye"
              text="View details"
              className="bg-white btn-light btn-sm "
            />
          </div>
        </div>
        {/* ?? end Single ?? */}
        <div
          className="bg-no-repeat bg-cover bg-center px-5 py-8 rounded-[6px] relative flex items-center"
          style={{
            backgroundImage: `url(${wbg9})`,
          }}
        >
          <div className="flex-1">
            <div className="max-w-[180px]">
              <h4 className="mb-2 text-2xl font-medium text-slate-900">
                <span className="block text-sm dark:text-slate-800">
                  Current balance,
                </span>
                <span className="block dark:text-slate-800">$34,564</span>
              </h4>
            </div>
          </div>
          <div className="flex-none">
            <Button
              icon="heroicons-outline:eye"
              text="View details"
              className="bg-white btn-light btn-sm "
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4 sm:grid-cols-2">
        {rabitWidget.map((item, i) => (
          <div
            className={` mt-7 p-6 relative z-[1] rounded-2xl text-white ${item.bg}`}
            key={i}
          >
            <div className="max-w-[168px]">
              <div className="widget-title">Unlimited Access</div>
              <div className="text-xs font-normal">
                Upgrade your system to business plan
              </div>
            </div>
            <div className="mt-6 mb-14">
              <button className="bg-white btn hover:bg-opacity-80 text-slate-900 btn-sm">
                Upgrade
              </button>
            </div>
            <img
              src={svgLine}
              alt=""
              className="absolute left-0 bottom-0 w-full z-[-1]"
            />
            <img
              src={svgRabit}
              alt=""
              className="absolute ltr:right-5 rtl:left-5 -bottom-4 z-[-1]"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2">
        {griftWidget.map((item, i) => (
          <div
            className={`${item.bg}  mb-10 mt-7 p-4 relative text-center rounded-2xl text-white`}
            key={i}
          >
            <img src={svgGift} alt="" className="mx-auto relative -mt-[40px]" />
            <div className="max-w-[160px] mx-auto mt-6">
              <div className="widget-title">Unlimited Access</div>
              <div className="text-xs font-normal">
                Upgrade your system to business plan
              </div>
            </div>
            <div className="mt-6">
              <button className="block w-full bg-white btn hover:bg-opacity-80 text-slate-900 btn-sm">
                Upgrade
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2">
        {griftWidget.map((item, i) => (
          <div
            className={` ${item.bg} mb-10 mt-7 p-4 relative text-center rounded-2xl text-white`}
            key={i}
          >
            <img
              src={svgRabit}
              alt=""
              className="mx-auto relative -mt-[73px]"
            />
            <div className="max-w-[160px] mx-auto mt-6">
              <div className="widget-title">Unlimited Access</div>
              <div className="text-xs font-normal">
                Upgrade your system to business plan
              </div>
            </div>
            <div className="mt-6">
              <button className="block w-full bg-white btn hover:bg-opacity-80 text-slate-900 btn-sm">
                Upgrade
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasicWidget;
