import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import Radio from "../../../../components/form/Radio";
import RadioGroup from "../../../../components/form/RadioGroup";
import TextInput from "../../../../components/form/TextInput";

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
  r1: string;
  r2: string;
  r3: string;
  r4: string;
  r5: string;
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
      r1: "r1-1",
      r2: "r2-1",
      r3: "r3-1",
      r4: "r4-1",
      r5: "r5-1",
    },
  });

  const [value, setValue] = useState("A");
  const [value2, setValue2] = useState("B");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="p-2 mt-2 bg-white rounded">
        <div className="grid grid-cols-2 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
          <TextInput
            essential
            label="코드"
            type="text"
            horizontal
            name="a"
            id="a"
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
            id="b"
            register={register}
          />
          <RadioGroup horizontal label={"사용여부"}>
            <Radio
              label="Yes"
              value="r1-1"
              checked={watch("r1") === "r1-1"}
              {...register("r1")}
            />
            <Radio
              label="No"
              value="r1-2"
              checked={watch("r1") === "r1-2"}
              {...register("r1")}
            />
          </RadioGroup>
          <div className="col-span-2">
            <TextInput
              essential
              label="대분류코드명"
              type="text"
              horizontal
              placeholder=""
              name="e"
              id="e"
              register={register}
            />
          </div>
          <TextInput
            label="코드명약어"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="사용여부1용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="사용여부2용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="사용여부3용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="정수1용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="정수2용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="실수1용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="문자1용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="문자2용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="문자3용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="문자4용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="문자5용도"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <RadioGroup horizontal label={"코드셋여부"}>
            <Radio
              label="Yes"
              value="r2-1"
              checked={watch("r2") === "r2-1"}
              {...register("r2")}
            />
            <Radio
              label="No"
              value="r2-2"
              checked={watch("r2") === "r2-2"}
              {...register("r2")}
            />
          </RadioGroup>
          <div className="col-span-2">
            <TextInput
              label="설명"
              type="text"
              horizontal
              placeholder=""
              name="e"
              id="e"
              register={register}
            />
          </div>
          <RadioGroup horizontal label={"주요코드여부"}>
            <Radio
              label="Yes"
              value="r4-1"
              checked={watch("r4") === "r4-1"}
              {...register("r4")}
            />
            <Radio
              label="No"
              value="r4-2"
              checked={watch("r4") === "r4-2"}
              {...register("r4")}
            />
          </RadioGroup>
          <RadioGroup horizontal label={"시스템코드여부"}>
            <Radio
              label="Yes"
              value="r5-1"
              checked={watch("r5") === "r5-1"}
              {...register("r5")}
            />
            <Radio
              label="No"
              value="r5-2"
              checked={watch("r5") === "r5-2"}
              {...register("r5")}
            />
          </RadioGroup>
        </div>
      </div>
      <div className="flex justify-end mt-2">
        <div className="space-xy-5">
          <Button text="초기화" className="w-12 btn-primary btn-sm" />
          <Button text="등록" className="w-12 btn-primary btn-sm" disabled />
          <Button text="수정" className="w-12 btn-primary btn-sm" />
          <Button text="삭제" className="w-12 btn-primary btn-sm" />
        </div>
      </div>
    </form>
  );
}

export default CodeTableFooter;
