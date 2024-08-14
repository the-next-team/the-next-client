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
};

type Props = {
  initialValues?: FormValues;
  onSubmit: (data: FormValues) => void;
};

function CodeItemTableFooter({ initialValues, onSubmit }: Props) {
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
        <div className="grid grid-cols-2 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
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
            label="보기순서"
            type="text"
            horizontal
            placeholder=""
            name="b"
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
              label="코드명"
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
          <RadioGroup horizontal label={"사용여부1"}>
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
          <RadioGroup horizontal label={"사용여부2"}>
            <Radio
              label="Yes"
              value="r3-1"
              checked={watch("r3") === "r3-1"}
              {...register("r3")}
            />
            <Radio
              label="No"
              value="r3-2"
              checked={watch("r3") === "r3-2"}
              {...register("r3")}
            />
          </RadioGroup>
          <RadioGroup horizontal label={"사용여부3"}>
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
          <TextInput
            label="정수1"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <TextInput
            label="정수2"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <TextInput
            label="실수1"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <TextInput
            label="문자1"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <TextInput
            label="문자2"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <TextInput
            label="문자3"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <TextInput
            label="문자4"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <TextInput
            label="문자5"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <TextInput
            label="IFIS코드"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
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
          <TextInput
            label="NICE코드"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <TextInput
            label="KCB코드"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
        </div>
      </div>
      <div className="flex justify-end ">
        <div className="flex gap-2">
          <Button text="초기화" className="w-12 btn-primary btn-sm" />
          <Button text="등록" className="w-12 btn-primary btn-sm" />
          <Button text="수정" className="w-12 btn-primary btn-sm" disabled />
          <Button text="삭제" className="w-12 btn-primary btn-sm" disabled />
          <Button text="보기순서변경" className="btn-primary btn-sm" />
        </div>
      </div>
    </form>
  );
}

export default CodeItemTableFooter;
