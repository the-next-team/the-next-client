import { Link } from "react-router-dom";

// import images
import cardImage1 from "../../../../assets/images/all-img/card-1.png";
import cardImage2 from "../../../../assets/images/all-img/card-2.png";
import cardImage3 from "../../../../assets/images/all-img/card-3.png";
import cardImage4 from "../../../../assets/images/all-img/card-4.png";
import cardImage5 from "../../../../assets/images/all-img/card-5.png";
import cardImage6 from "../../../../assets/images/all-img/card-6.png";
import cardImage7 from "../../../../assets/images/all-img/card-7.png";
import postImage from "../../../../assets/images/all-img/post-1.png";
import authorImage from "../../../../assets/images/all-img/t1.png";
import Button from "../../../../components/button/Button";
import Card from "../../../../components/card/Card";
import Icon from "../../../../components/icons/Icon";

export const cardsColor1 = [
  {
    title: "Primary Card",
    bg: "bg-primary-500",
    color: "text-primary-500",
  },
  {
    title: "Secondary Card ",
    bg: "bg-secondary-500",
    color: "text-secondary-500",
  },
  {
    title: "Success Card",
    bg: "bg-success-500",
    color: "text-success-500",
  },
  {
    title: "Danger Card",
    bg: "bg-danger-500",
    color: "text-danger-500",
  },
  {
    title: "Warning Card",
    bg: "bg-warning-500",
    color: "text-warning-500",
  },
  {
    title: "Info Card",
    bg: "bg-info-500",
    color: "text-info-500",
  },
];
export const cardsColor2 = [
  {
    title: "Primary Card",
    ring: "ring-primary-500",
  },
  {
    title: "Secondary Card ",
    ring: "ring-secondary-500",
  },
  {
    title: "Success Card",
    ring: "ring-success-500",
  },
  {
    title: "Danger Card",
    ring: "ring-danger-500",
  },
  {
    title: "Warning Card",
    ring: "ring-warning-500",
  },
  {
    title: "Info Card",
    ring: "ring-info-500",
  },
];
export const cards = [
  {
    title: "Primary Card",
    border: "border-primary-500",
    color: "text-primary-500",
    icon: "heroicons-outline:support",
  },
  {
    title: "Secondary Card ",
    border: "border-secondary-500",
    color: "text-secondary-500",
    icon: "heroicons-outline:stop",
  },
  {
    title: "Success Card",
    border: "border-success-500",
    color: "text-success-500",
    icon: "heroicons-outline:badge-check",
  },
  {
    title: "Danger Card",
    border: "border-danger-500",
    color: "text-danger-500",
    icon: "heroicons-outline:ban",
  },
  {
    title: "Warning Card",
    border: "border-warning-500",
    color: "text-warning-500",
    icon: "heroicons-outline:exclamation",
  },
  {
    title: "Info Card",
    border: "border-info-500",
    color: "text-info-500",
    icon: "heroicons-outline:information-circle",
  },
];

const CardPage = () => {
  return (
    <div className="space-y-5 ">
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3 md:grid-cols-2 card-height-auto">
        <Card title="Card Title" subtitle="Card Subtitle" noborder>
          <div className="h-[140px] w-full mb-6">
            <img
              src={cardImage1}
              alt=""
              className="block object-cover w-full h-full rounded-md"
            />
          </div>
          <div className="text-sm">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod tempor incididun ut .
          </div>
          <div className="mt-4 space-x-4 rtl:space-x-reverse">
            <Link to="#" className="btn-link">
              Learn more
            </Link>
            <Link to="#" className="btn-link">
              Another link
            </Link>
          </div>
        </Card>
        <Card bodyClass="p-0">
          <div className="h-[140px] w-full">
            <img
              src={cardImage2}
              alt=""
              className="block object-cover w-full h-full rounded-t-md"
            />
          </div>
          <div className="p-6">
            <header className="mb-8">
              <div className="card-title">Card Title</div>
              <div className="card-subtitle">Card Subtitle</div>
            </header>
            <div className="text-sm">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididun ut .
            </div>
            <div className="mt-6 space-x-4 rtl:space-x-reverse">
              <Link to="#" className="btn-link">
                Learn more
              </Link>
              <Link to="#" className="btn-link">
                Another link
              </Link>
            </div>
          </div>
        </Card>
        <Card bodyClass="p-0  relative z-[1]  rounded-md" noborder>
          <div className="  absolute left-0 top-0 w-full h-full rounded-md z-[-1] ">
            <img
              src={cardImage3}
              alt=""
              className="block object-cover w-full h-full rounded-md"
            />
          </div>
          <div className="p-6">
            <header className="mb-5">
              <div className="text-white card-title">Card Title</div>
            </header>

            <div className="text-white mt-[70px]">
              <div className="mb-2 text-sm text-white">This is a subtitle</div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
                eiusmod tempor incididun ut .
              </div>
            </div>
            <div className="mt-[71px]">
              <Button
                text="Learn more"
                link="#"
                className="bg-white btn text-slate-800"
              />
            </div>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-4 md:grid-cols-2 card-height-auto">
        <Card noborder bodyClass="p-0">
          <div className="image-box">
            <img
              src={cardImage4}
              alt=""
              className="object-cover w-full h-full rounded-t-md"
            />
          </div>
          <div className="p-6">
            <div className="mb-5 card-title">Sales Automation</div>
            <div className="text-sm">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididun ut .
            </div>
          </div>
        </Card>
        <Card noborder bodyClass="p-0">
          <div className="p-6 text-center">
            <div className="mb-5 card-title">Personalization</div>
            <div className="text-sm">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit sed do
            </div>
          </div>
          <div className="image-box">
            <img
              src={cardImage5}
              alt=""
              className="object-cover w-full h-full rounded-t-md"
            />
          </div>
        </Card>
        <Card noborder bodyClass="p-0">
          <div className="image-box">
            <img
              src={cardImage6}
              alt=""
              className="object-cover w-full h-full rounded-t-md"
            />
          </div>
          <div className="p-6 text-center">
            <div className="mb-5 card-title">Marketing Automation</div>
            <div className="text-sm">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididun ut .
            </div>
          </div>
        </Card>
        <Card noborder bodyClass="p-0">
          <div className="p-6 text-center  bg-[#E5F9FF]">
            <div className="mb-5 card-title">Personalization</div>
            <div className="text-sm">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididun ut .
            </div>
          </div>
          <div className="image-box">
            <img
              src={cardImage7}
              alt=""
              className="object-cover w-full h-full rounded-t-md"
            />
          </div>
        </Card>
        <Card title="Sales Automation" noborder>
          <div className="text-sm">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod tempor incididun ut labore et dolor magna aliqua.
          </div>
          <div className="mt-4 space-x-4 space-x-reverse">
            <Link to="#" className="btn-link">
              Learn more
            </Link>
          </div>
        </Card>
        <Card
          title="Sales Automation"
          className="bg-slate-800"
          titleClass="text-white"
          noborder
        >
          <div className="text-white">
            <div className="txt-sm">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididun ut labore et dolor magna aliqua.
            </div>
          </div>
          <div className="mt-4 space-x-4 space-x-reverse">
            <Link to="#" className="btn-link white">
              Learn more
            </Link>
          </div>
        </Card>
        <Card
          title="Sales Automation"
          className="bg-[#EDFFE5] dark:bg-slate-800"
          noborder
        >
          <div className="text-sm">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod tempor incididun ut labore et dolor magna aliqua.
          </div>
          <div className="mt-4 space-x-4 ">
            <Link to="#" className="btn-link">
              Learn more
            </Link>
          </div>
        </Card>
        <Card
          title="Sales Automation"
          className="bg-[#E5F9FF] dark:bg-slate-800	"
          noborder
        >
          <div className="text-sm">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod tempor incididun ut labore et dolor magna aliqua.
          </div>
          <div className="mt-4 space-x-4 space-x-reverse">
            <Link to="#" className="btn-link">
              Learn more
            </Link>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3 md:grid-cols-2">
        <Card title="Sales Automation" noborder>
          <div className="text-sm">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod tempor incididun ut labore et dolor magna aliqua.
          </div>
          <div className="mt-9">
            <Button className="btn-dark" text="Learn more" />
          </div>
        </Card>
        <Card className="text-center" noborder>
          <div className="mb-6 card-title">Sales Automation</div>
          <div className="text-sm">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod tempor incididun ut labore et dolor magna aliqua.
          </div>
          <div className="mt-9">
            <Button className="btn-dark" text="Learn more" />
          </div>
        </Card>
        <Card title="Sales Automation" className="text-center " noborder>
          <div className="text-sm">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod tempor incididun ut labore et dolor magna aliqua.
          </div>
          <div className="mt-9">
            <Button className="btn-dark block-btn" text="Learn more" />
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-5">
        <div className="col-span-12 xl:col-span-8">
          <Card>
            <div className="mb-6 post-image">
              <img
                src={postImage}
                alt=""
                className="block object-cover w-full h-full "
              />
            </div>
            <div className="flex justify-between mb-4">
              <Link to="#">
                <span className="inline-flex text-sm font-normal leading-5 text-slate-500 dark:text-slate-400">
                  <Icon
                    icon="heroicons-outline:calendar"
                    className="text-lg text-secondary-500 ltr:mr-2 rtl:ml-2"
                  />
                  10/02/2021
                </span>
              </Link>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <Link to="#">
                  <span className="inline-flex text-sm font-normal leading-5 text-slate-500 dark:text-slate-400">
                    <Icon
                      icon="heroicons-outline:chat"
                      className="text-lg text-secondary-500 ltr:mr-2 rtl:ml-2"
                    />
                    3
                  </span>
                </Link>
                <Link to="#">
                  <span className="inline-flex text-sm font-normal leading-5 text-slate-500 dark:text-slate-400">
                    <Icon
                      icon="heroicons-outline:share"
                      className="text-lg text-secondary-500 ltr:mr-2 rtl:ml-2"
                    />
                    4
                  </span>
                </Link>
              </div>
            </div>
            <h5 className="card-title text-slate-900 dark:text-white">
              At Healthcare you will be treated by caring
            </h5>
            <div className="mt-4 card-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.Lorem ipsum dolor sit amet, consectetur
                adipiscing eli.
              </p>
              <Button className="mt-8 btn-outline-dark" text="Read more" />
            </div>
          </Card>
        </div>
        <div className="col-span-12 space-y-4 xl:col-span-4">
          <Card>
            <div className="mb-6">
              <img
                src={postImage}
                alt=""
                className="block object-cover w-full h-full "
              />
            </div>
            <div className="flex justify-between mb-4">
              <div>
                <div className="text-xl text-slate-900 dark:text-white">
                  Lorem ipsum
                </div>
              </div>
              <Link to="#">
                <span className="inline-flex text-sm font-normal leading-5 text-slate-500 dark:text-slate-400">
                  <Icon
                    icon="heroicons-outline:calendar"
                    className="text-lg text-secondary-500 ltr:mr-2 rtl:ml-2"
                  />
                  10/02/2021
                </span>
              </Link>
            </div>

            <div className="mt-4 card-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="mt-4 space-x-4 rtl:space-x-reverse">
                <Link to="#" className="btn-link">
                  Learn more
                </Link>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex justify-between mb-4">
              <div>
                <div className="text-xl text-slate-900 dark:text-white">
                  Lorem ipsum
                </div>
              </div>
              <Link to="#">
                <span className="inline-flex text-sm font-normal leading-5 text-slate-500 dark:text-slate-400">
                  <Icon
                    icon="heroicons-outline:calendar"
                    className="text-lg text-secondary-500 ltr:mr-2 rtl:ml-2"
                  />
                  10/02/2021
                </span>
              </Link>
            </div>

            <div className="mt-4 card-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.Lorem ipsum dolor sit amet, consectetur
                adipiscing eli.
              </p>
              <div className="flex justify-between mt-6">
                <Link to="#" className="btn-link">
                  Learn more
                </Link>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  <Link to="#">
                    <span className="inline-flex text-sm font-normal leading-5 text-slate-500 dark:text-slate-400">
                      <Icon
                        icon="heroicons-outline:chat"
                        className="text-lg text-secondary-500 ltr:mr-2 rtl:ml-2"
                      />
                      3
                    </span>
                  </Link>
                  <Link to="#">
                    <span className="inline-flex text-sm font-normal leading-5 text-slate-500 dark:text-slate-400">
                      <Icon
                        icon="heroicons-outline:share"
                        className="text-lg text-secondary-500 ltr:mr-2 rtl:ml-2"
                      />
                      4
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-5 lg:grid-cols-2">
        <Card>
          <div className="flex">
            <div className="mr-6 flex-0">
              <div className="author-img w-[65px] h-[88px] rounded-[40px]">
                <img
                  src={authorImage}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-4 text-base">
                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sintsin. Velit officia consequat duis enim of velit
                mollit.”
              </div>
              <div className="space-x-5">
                <span className="inline-block text-base font-medium">
                  Marvin McKinney
                </span>
                <span className="inline-block">CEO at Bitspin</span>
              </div>
            </div>
          </div>
        </Card>
        <Card className="text-center ha-auto">
          <div className="text-2xl text-slate-600 dark:text-slate-300">
            “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sintsin. Velit officia consequat duis enim of velit mollit.”
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3 md:grid-cols-2">
        {cardsColor1.map((item, i) => (
          <Card
            title={item.title}
            className={`${item.bg} dark:${item.bg}`}
            titleClass="text-white"
            key={i}
            noborder
          >
            <div className="text-sm text-white">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididun ut labore et dolor magna aliqua.
            </div>
          </Card>
        ))}

        {cardsColor2.map((item, i) => (
          <Card
            title={item.title}
            className={`ring-1 ${item.ring}`}
            key={i}
            noborder
          >
            <div className="text-sm">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididun ut labore et dolor magna aliqua.
            </div>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3 md:grid-cols-2 ">
        {cards.map((item, i) => (
          <Card bodyClass="p-0" key={i} noborder>
            <header
              className={`border-b px-4 pt-4 pb-3 flex items-center  ${item.border}`}
            >
              <span
                className={`text-3xl inline-block ltr:mr-2 rtl:ml-2 ${item.color}`}
              >
                <Icon icon={item.icon} />
              </span>
              <h6 className={`card-title mb-0  ${item.color}`}>{item.title}</h6>
            </header>
            <div className="px-5 py-3">
              <div className="mb-2 card-title2">Card title</div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
                eiusmod tempor incididun ut labore et dolor magna aliqua.
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardPage;
