import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import TextInput from "../../../../components/form/TextInput";
import CheckboxGroup from "../../../../components/checkbox/CheckboxGroup";
import Checkbox from "../../../../components/checkbox/Checkbox";

type FormValues = {
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
  g: string;
  h: string;
  i: string;
  j: string;
  checkbox: Array<string>;
};

type Props = {
  initialValues?: FormValues;
  onSubmit: (data: FormValues) => void;
};

function CodeTableFooter({ initialValues, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      a: "",
      checkbox: [],
    },
  });

  const [value, setValue] = useState("A");
  const [value2, setValue2] = useState("B");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="p-2 my-2 bg-white rounded">
        <div className="grid grid-cols-2 gap-y-1">
          <TextInput
            essential
            label="코드"
            type="text"
            horizontal
            name="a"
            placeholder=""
            register={register}
          />
          <TextInput
            essential
            label="코드길이"
            type="text"
            horizontal
            placeholder=""
            name="b"
            register={register}
          />
          <CheckboxGroup horizontal label={"사용여부"}>
            <Checkbox
              checked={watch("checkbox").includes("chk1")}
              value="chk1"
              {...register("checkbox")}
            />
          </CheckboxGroup>
          <div className="col-span-2">
            <TextInput
              essential
              label="대분류코드명"
              type="text"
              horizontal
              placeholder=""
              name="e"
              register={register}
            />
          </div>
          <TextInput
            label="코드명약어"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <TextInput
            label="사용여부1용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <TextInput
            label="사용여부2용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <TextInput
            label="사용여부3용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <TextInput
            label="정수1용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <TextInput
            label="정수2용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <TextInput
            label="실수1용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <TextInput
            label="문자1용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <TextInput
            label="문자2용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <TextInput
            label="문자3용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <TextInput
            label="문자4용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <TextInput
            label="문자5용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />

          <CheckboxGroup horizontal label={"코드셋여부"}>
            <Checkbox
              checked={watch("checkbox").includes("chk2")}
              value="chk2"
              {...register("checkbox")}
            />
          </CheckboxGroup>
          <div className="col-span-2">
            <TextInput
              label="설명"
              type="text"
              horizontal
              placeholder=""
              name="e"
              register={register}
            />
          </div>

          <CheckboxGroup horizontal label={"주요코드여부"}>
            <Checkbox
              checked={watch("checkbox").includes("chk3")}
              value="chk3"
              {...register("checkbox")}
            />
          </CheckboxGroup>
          <CheckboxGroup horizontal label={"시스템코드여부"}>
            <Checkbox
              checked={watch("checkbox").includes("chk4")}
              value="chk4"
              {...register("checkbox")}
            />
          </CheckboxGroup>
        </div>
      </div>
      <div className="flex justify-end">
        {/* <div className="flex gap-2 ">
          <Button text="초기화" className="w-12 btn-primary btn-sm" />
          <Button text="등록" className="w-12 btn-primary btn-sm" disabled />
          <Button text="수정" className="w-12 btn-primary btn-sm" />
          <Button text="삭제" className="w-12 btn-primary btn-sm" />
        </div> */}
      </div>
    </form>
  );
}

export default CodeTableFooter;
