import Badge from "../../../../components/badge/Badge";
import Button from "../../../../components/button/Button";
import Card from "../../../../components/card/Card";
import Icon from "../../../../components/icons/Icon";

const BadgePage = () => {
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <Card title="Basic Badges">
        <div className="space-xy-5">
          <Badge label="primary" className="text-white bg-primary-500" />
          <Badge label="secondary" className="text-white bg-secondary-500" />
          <Badge label="danger" className="text-white bg-danger-500" />
          <Badge label="success" className="text-white bg-success-500" />
          <Badge label="info" className="text-white bg-info-500" />
          <Badge label="warning" className="text-white bg-warning-500" />
          <Badge
            label="Dark"
            className="text-white bg-slate-800 dark:bg-slate-900"
          />
        </div>
      </Card>
      <Card title="Pill Badges">
        <div className="space-xy-5">
          <Badge label="primary" className="text-white bg-primary-500 pill" />
          <Badge
            label="secondary"
            className="text-white bg-secondary-500 pill"
          />
          <Badge label="danger" className="text-white bg-danger-500 pill" />
          <Badge label="success" className="text-white bg-success-500 pill" />
          <Badge label="info" className="text-white bg-info-500 pill" />
          <Badge label="warning" className="text-white bg-warning-500 pill" />
          <Badge
            label="Dark"
            className="text-white bg-slate-800 dark:bg-slate-900 pill"
          />
        </div>
      </Card>
      <Card title="Soft Badges">
        <div className="space-xy-5">
          <Badge
            label="primary"
            className="bg-primary-500 text-primary-500 bg-opacity-[0.12]"
          />
          <Badge
            label="secondary"
            className="bg-secondary-500 text-secondary-500 bg-opacity-[0.12]"
          />
          <Badge
            label="danger"
            className="bg-danger-500 text-danger-500 bg-opacity-[0.12]"
          />
          <Badge
            label="success"
            className="bg-success-500 text-success-500 bg-opacity-[0.12]"
          />
          <Badge
            label="info"
            className="bg-info-500 text-info-500 bg-opacity-[0.12]"
          />
          <Badge
            label="warning"
            className="bg-warning-500 text-warning-500 bg-opacity-[0.12]"
          />
          <Badge
            label="Dark"
            className="bg-slate-800 dark:bg-slate-900 text-slate-800 dark:text-slate-400 bg-opacity-[0.12]"
          />
        </div>
      </Card>
      <Card title="Soft Pill Badges">
        <div className="space-xy-5">
          <Badge
            label="primary"
            className="bg-primary-500 text-primary-500 bg-opacity-[0.12] pill"
          />
          <Badge
            label="secondary"
            className="bg-secondary-500 text-secondary-500 bg-opacity-[0.12] pill"
          />
          <Badge
            label="danger"
            className="bg-danger-500 text-danger-500 bg-opacity-[0.12] pill"
          />
          <Badge
            label="success"
            className="bg-success-500 text-success-500 bg-opacity-[0.12] pill"
          />
          <Badge
            label="info"
            className="bg-info-500 text-info-500 bg-opacity-[0.12] pill"
          />
          <Badge
            label="warning"
            className="bg-warning-500 text-warning-500 bg-opacity-[0.12] pill"
          />
          <Badge
            label="Dark"
            className="bg-slate-800 dark:bg-slate-900 text-slate-800 dark:text-slate-400 bg-opacity-[0.12] pill"
          />
        </div>
      </Card>
      <Card title="Badges With Icon">
        <div className="space-xy-5">
          <Badge
            label="primary"
            className="text-white bg-primary-500 "
            icon="heroicons-outline:star"
          />
          <Badge
            label="secondary"
            className="text-white bg-secondary-500"
            icon="heroicons-outline:star"
          />
          <Badge
            label="danger"
            className="text-white bg-danger-500"
            icon="heroicons-outline:star"
          />
          <Badge
            label="success"
            className="text-white bg-success-500"
            icon="heroicons-outline:star"
          />
          <Badge
            label="info"
            className="text-white bg-info-500"
            icon="heroicons-outline:star"
          />
          <Badge
            label="warning"
            className="text-white bg-warning-500"
            icon="heroicons-outline:star"
          />
          <Badge
            label="Dark"
            className="text-white bg-slate-800 dark:bg-slate-900"
            icon="heroicons-outline:star"
          />
        </div>
      </Card>
      <Card title="Badges in Buttons">
        <div className="space-xy-5">
          <Button className="btn-dark">
            <div className="space-x-1 rtl:space-x-reverse">
              <span>Notifications</span>
              <Badge label="2" className="bg-white text-slate-900 " />
            </div>
          </Button>
          <Button className="btn-success">
            <div className="space-x-1 rtl:space-x-reverse">
              <span>Messages</span>
              <Badge label="4" className="bg-white text-slate-900 " />
            </div>
          </Button>
          <Button className="btn-info">
            <div className="space-x-1 rtl:space-x-reverse">
              <span>Draft</span>
              <Badge label="3" className="bg-white text-slate-900" />
            </div>
          </Button>
        </div>
      </Card>
      <div className="col-span-1 xl:col-span-2">
        <Card title="Badges Position Examples">
          <div className="flex items-center space-xy-5">
            <Button className=" btn-primary">
              Mails
              <Badge
                label="2"
                className="absolute text-white bg-danger-500 -top-3 ltr:-right-2 rtl:-left-2"
              />
            </Button>
            <Button className=" btn-secondary">
              Alerts
              <Badge
                label={null}
                className="absolute w-4 h-4 text-white bg-danger-500 rounded-circile -top-2 ltr:-right-2 rtl:-left-2"
              />
            </Button>
            <Button className=" btn-success">
              <div className="text-2xl">
                <Icon icon="heroicons:envelope" />
              </div>
              <Badge
                label={null}
                className="absolute w-4 h-4 text-white bg-danger-500 rounded-circile -top-2 ltr:-right-2 rtl:-left-2"
              />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BadgePage;
