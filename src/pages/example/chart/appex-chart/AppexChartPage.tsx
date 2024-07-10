import React from "react";
import BasicArea from "./BasicArea";
import AreaSpaline from "./AreaSpaline";
import BasicBar from "./Basicbar";
import Column from "./HorizontalBar";
import Bubble from "./Bubble";
import Scatter from "./Scatter";
import Candlestick from "./Candlestick";
import Stepline from "./Stepline";
import Stacked from "./Stacked";
import Pie from "./Pie";
import Donut from "./Donut";
import MixedChart from "./Mixed";
import Radar from "./Radar";
import Radialbars from "./Radialbars";
import Card from "../../../../components/card/Card";

const AppexChartPage = () => {
  return (
    <div className="space-y-5 ">
      <Card title="Area Chart">
        <BasicArea />
      </Card>
      <Card title="Area Chart">
        <AreaSpaline />
      </Card>
      <Card title="Basic Bar Chart">
        <BasicBar />
      </Card>
      <Card title="Column Chart">
        <Column />
      </Card>
      <Card title="3D Bubble">
        <Bubble />
      </Card>
      <Card title="Scatter Chart">
        <Scatter />
      </Card>
      <Card title="Candlestick Chart">
        <Candlestick />
      </Card>
      <Card title="Stepline Chart">
        <Stepline />
      </Card>
      <Card title="Stacked Columns">
        <Stacked />
      </Card>
      <Card title="Pie & Donut Chart">
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          <div>
            <Donut />
          </div>
          <div>
            <Pie />
          </div>
        </div>
      </Card>
      <Card title="Mixed Chart">
        <MixedChart />
      </Card>
      <Card title="Radar Chart">
        <Radar />
      </Card>
      <Card title="Multiple Radialbars">
        <Radialbars />
      </Card>
    </div>
  );
};

export default AppexChartPage;
