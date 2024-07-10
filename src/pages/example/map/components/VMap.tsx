import { VectorMap } from "@south-paw/react-vector-maps";

const VMap = () => {
  return (
    <div className="w-full ">
      <VectorMap {...require('../../../../constants/world-map.json')} className="h-[350px] w-full dash-codevmap" />
    </div>
  );
};

export default VMap;
