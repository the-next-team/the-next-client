import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import { ValueType } from "realgrid";
import RealGridTable, {
  RealGridHandle,
} from "../../../../components/table/RealGridTable";
import { useRef } from "react";
import Header from "./components/Header";

type Props = {
  onSubmit: () => void;
};

const fields = [
  {
    fieldName: "postcode",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "address",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "postcode",
    fieldName: "postcode",
    type: "data",
    width: "100",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "우편번호",
      showTooltip: false,
    },
    renderer: {
      type: "number",
      showTooltip: true,
    },
  },
  {
    name: "address",
    fieldName: "address",
    type: "data",
    width: "310",
    styles: {
      textAlignment: "left",
    },
    header: {
      text: "기본주소",
      showTooltip: false,
    },
  },
];

function Address({ onSubmit }: Props) {
  const realGridRef = useRef<RealGridHandle>(null);

  const { handleSubmit } = useForm({
    defaultValues: { r1: "r1-1", r2: "r2-1", r3: "r3-1", r4: "r4-1" },
  });

  return (
    <div className="flex flex-col gap-2 relative h-full p-2">
      {/* Header */}

      <Header onSubmit={() => {}} />

      {/* Body */}
      <div className="flex-grow">
        <RealGridTable
          ref={realGridRef}
          fields={fields}
          columns={columns}
          onCellDblClicked={(grid, data) => {
            console.log("onCellDblClicked", data.itemIndex);
          }}
        />
      </div>
      <div className="flex justify-end gap-2 mb-2">
        <Button
          onClick={() => {
            handleSubmit(onSubmit)();
          }}
          text="이전"
          className="w-12 btn-primary btn-sm"
        />
        <Button
          onClick={() => {
            handleSubmit(onSubmit)();
          }}
          text="다음"
          className="w-12 btn-primary btn-sm"
        />
      </div>
    </div>
  );
}

export default Address;
