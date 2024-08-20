import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import { ValueType } from "realgrid";
import RealGridTable, {
  RealGridHandle,
} from "../../../../components/table/RealGridTable";
import { useRef } from "react";
import Header from "./components/Header";
import RightHeader from "./components/RightHeader";
import TextInput from "../../../../components/form/TextInput";

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
const fields2 = [
  {
    fieldName: "addressSelect",
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
const columns2 = [
  {
    name: "addressSelect",
    fieldName: "address",
    type: "data",
    width: "410",
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

  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  return (
    <div className="flex flex-col flex-grow h-full">
      <div className="flex items-center px-2 pt-2 space-x-2 text-sm font-medium text-slate-900 ">
        <span className="h-[6px] w-[6px] bg-slate-900 rounded-full inline-block" />
        <span>우편번호 검색</span>
      </div>
      <div className="flex-grow flex gird-cols-2">
        <div className="flex flex-col gap-2 relative h-full w-full p-2">
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

        <div className="flex flex-col gap-2 relative h-full w-full p-2">
          {/* Header */}
          <RightHeader onSubmit={() => {}} />

          {/* Body */}
          <div className="flex-grow">
            <RealGridTable
              ref={realGridRef}
              fields={fields2}
              columns={columns2}
              onCellDblClicked={(grid, data) => {
                console.log("onCellDblClicked", data.itemIndex);
              }}
            />
          </div>
          <div>
            <TextInput
              essential
              label=""
              type="text"
              readOnly
              horizontal
              className="h-20"
              name="a"
              placeholder="도로명 입력으로 지번(읍면동)주소 검색되었습니다. 검색된 주소를 선택후 확인 버튼을 누르세요."
              register={register}
            />
          </div>
          <div className="flex justify-end gap-2 mb-2">
            <Button
              onClick={() => {
                handleSubmit(onSubmit)();
              }}
              text="확인"
              className="w-12 btn-primary btn-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
