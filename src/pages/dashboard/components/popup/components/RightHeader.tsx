import React from "react";
import RadioGroup from "../../../../../components/form/RadioGroup";
import Radio from "../../../../../components/form/Radio";
import TextInput from "../../../../../components/form/TextInput";
import { useForm } from "react-hook-form";
import Button from "../../../../../components/button/Button";

type Props = {
  onSubmit: () => void;
};

function RightHeader({ onSubmit }: Props) {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: { r1: "r1-1", r2: "r2-1", r3: "r3-1", r4: "r4-1" },
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white rounded">
      <div className="mb-2">
        <Radio
          label="입력주소"
          value="r1-1"
          checked={watch("r1") === "r1-1"}
          {...register("r1")}
        />
        <TextInput
          label=""
          type="text"
          className="mt-2 h-10"
          horizontal
          readOnly
          placeholder=""
          name="b"
          register={register}
        />
      </div>
      <div className="mb-2">
        <Radio
          label="표준화 지번주소"
          value="r1-2"
          checked={watch("r1") === "r1-2"}
          {...register("r1")}
        />
        <TextInput
          label=""
          type="text"
          className="mt-2 h-10"
          horizontal
          readOnly
          placeholder=""
          name="b"
          register={register}
        />
      </div>
      <div>
        <Radio
          label="도로명 주소"
          value="r1-3"
          checked={watch("r1") === "r1-3"}
          {...register("r1")}
        />
        <TextInput
          label=""
          type="text"
          className="mt-2 h-10"
          horizontal
          readOnly
          placeholder=""
          name="b"
          register={register}
        />
      </div>
    </form>
  );
}

export default RightHeader;
