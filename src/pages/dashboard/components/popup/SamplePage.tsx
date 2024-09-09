import { useForm } from "react-hook-form";
import TextInput from "../../../../components/form/TextInput";
import { ValueType } from "realgrid";
import RealGridTable, {
  RealGridHandle,
} from "../../../../components/table/RealGridTable";
import { useRef } from "react";
import Button from "../../../../components/button/Button";

type Props = {
  onSubmit: () => void;
};

const fields = [
  {
    fieldName: "test1",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "test2",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "test3",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "test4",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "test1",
    fieldName: "test1",
    type: "data",
    width: "100",

    header: {
      text: "입력항목",
      showTooltip: false,
    },
  },
  {
    name: "test2",
    fieldName: "test2",
    type: "data",
    width: "310",
    styles: {
      textAlignment: "left",
    },
    header: {
      text: "입력항목",
      showTooltip: false,
    },
  },
  {
    name: "test3",
    fieldName: "test3",
    type: "data",
    width: "250",
    styles: {
      textAlignment: "left",
    },
    header: {
      text: "입력항목",
      showTooltip: false,
    },
  },
  {
    name: "test4",
    fieldName: "test4",
    type: "data",
    width: "250",
    styles: {
      textAlignment: "left",
    },
    header: {
      text: "입력항목",
      showTooltip: false,
    },
  },
];

function SamplePage({ onSubmit }: Props) {
  const realGridRef = useRef<RealGridHandle>(null);

  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  return (
    <div className="p-2 flex flex-col flex-grow h-full">
      <div className="flex items-center space-x-2 mb-2 text-sm font-medium text-slate-900 ">
        <span className="h-[6px] w-[6px] bg-slate-900 rounded-full inline-block" />
        <span>서브 타이틀</span>
      </div>
      <div className="bg-white p-2 rounded mb-2">
        <div className="grid grid-cols-4 gap-y-1">
          <TextInput
            label="• 입력항목"
            type="text"
            horizontal
            name="b"
            placeholder="test"
            register={register}
          />
          <TextInput
            label="• 입력항목"
            type="text"
            horizontal
            name="b"
            placeholder="test"
            register={register}
          />
          <TextInput
            label="• 입력항목"
            type="text"
            horizontal
            name="b"
            placeholder="test"
            register={register}
          />
          <TextInput
            label="• 입력항목"
            type="text"
            horizontal
            name="b"
            placeholder="test"
            register={register}
          />
          <TextInput
            label="• 입력항목"
            type="text"
            horizontal
            name="b"
            placeholder="test"
            register={register}
          />
          <TextInput
            label="• 입력항목"
            type="text"
            horizontal
            name="b"
            placeholder="test"
            register={register}
          />
          <TextInput
            label="• 입력항목"
            type="text"
            horizontal
            name="b"
            placeholder="test"
            register={register}
          />
          <TextInput
            label="• 입력항목"
            type="text"
            horizontal
            name="b"
            placeholder="test"
            register={register}
          />
          <TextInput
            label="• 입력항목"
            type="text"
            horizontal
            name="b"
            placeholder="test"
            register={register}
          />
          <TextInput
            label="• 입력항목"
            type="text"
            horizontal
            name="b"
            placeholder="test"
            register={register}
          />
          <TextInput
            label="• 입력항목"
            type="text"
            horizontal
            name="b"
            placeholder="test"
            register={register}
          />
          <TextInput
            label="• 입력항목"
            type="text"
            horizontal
            name="b"
            placeholder="test"
            register={register}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 relative h-full">
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
            text="등록"
            className="w-12 btn-primary btn-sm"
          />
          <Button
            onClick={() => {
              handleSubmit(onSubmit)();
            }}
            text="삭제"
            className="w-12 btn-primary btn-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default SamplePage;
