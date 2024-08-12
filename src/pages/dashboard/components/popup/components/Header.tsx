import React from "react";
import RadioGroup from "../../../../../components/form/RadioGroup";
import Radio from "../../../../../components/form/Radio";
import TextInput from "../../../../../components/form/TextInput";
import { useForm } from "react-hook-form";
import Button from "../../../../../components/button/Button";
import CodeSelect from "../../../../../components/form/CodeSelect";

type Props = {
  onSubmit: () => void;
};

function Header({ onSubmit }: Props) {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: { r1: "r1-1", r2: "r2-1", r3: "r3-1", r4: "r4-1" },
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white rounded">
      <div className="mb-2 flex">
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
        <div className="flex-grow ">
          <CodeSelect
            label="시/도"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            essential
            name="a"
            register={register}
          />
        </div>
      </div>
      <div className="flex gap-2 mb-2">
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
    </form>
  );
}

export default Header;
