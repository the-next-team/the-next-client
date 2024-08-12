import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import Radio from "../../../../components/form/Radio";
import RadioGroup from "../../../../components/form/RadioGroup";
import TextInput from "../../../../components/form/TextInput";
import Table from "./components/Table";
import { ValueType } from "realgrid";
import RealGridTable, {
  RealGridHandle,
} from "../../../../components/table/RealGridTable";
import { useRef } from "react";

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

  const { register, handleSubmit, watch } = useForm({
    defaultValues: { r1: "r1-1", r2: "r2-1", r3: "r3-1", r4: "r4-1" },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Header */}
      <div className="p-4 m-2 bg-white rounded">
        <div className="mb-2">
          <RadioGroup horizontal label={"주소구분"}>
            <Radio
              label="지번주소"
              value="r1-1"
              checked={watch("r1") === "r1-1"}
              {...register("r1")}
            />
            <Radio
              label="도로명주소"
              value="r1-2"
              checked={watch("r1") === "r1-2"}
              {...register("r1")}
            />
          </RadioGroup>
        </div>
        <div className="flex gap-2 mb-2 ">
          <div className="flex-grow">
            <TextInput
              label="도로명"
              type="text"
              className=""
              horizontal
              placeholder=""
              name="b"
              register={register}
            />
          </div>
          <Button
            onClick={() => {
              handleSubmit(onSubmit)();
            }}
            text="조회"
            className="w-12 btn-primary btn-sm"
          />
        </div>
        <div className="flex gap-2">
          <div className="flex-grow">
            <TextInput
              label="상세주소"
              type="text"
              horizontal
              placeholder=""
              name="b"
              register={register}
            />
          </div>
          <Button
            onClick={() => {
              handleSubmit(onSubmit)();
            }}
            text="검증"
            className="w-12 btn-primary btn-sm"
          />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2 relative h-full p-2">
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
        <div className="flex justify-end gap-2">
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
    </form>
  );
}

export default Address;
