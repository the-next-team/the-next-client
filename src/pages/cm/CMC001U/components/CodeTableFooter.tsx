import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../../components/button/ExampleButton";
import Radio from "../../../../components/form/Radio";
import RadioGroup from "../../../../components/form/RadioGroup";
import TextInput from "../../../../components/form/TextInput";
import CodeSelect from "../../../../components/form/CodeSelect";

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
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      a: "",
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
        <div className="grid grid-cols-2 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 ">
          <TextInput
            label="코드"
            type="text"
            horizontal
            name="a"
            id="a"
            placeholder=""
            register={register}
          />
          <TextInput
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
              name="x"
              value="A"
              checked={value === "A"}
              onChange={handleChange}
            />
            <Radio
              label="No"
              name="x"
              value="B"
              checked={value === "B"}
              onChange={handleChange}
            />
          </RadioGroup>
          <TextInput
            label="대분류코드명"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="코드명약어"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
        </div>

        <div className="grid grid-cols-2 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 ">
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
              name="x"
              value="A"
              checked={value === "A"}
              onChange={handleChange}
            />
            <Radio
              label="No"
              name="x"
              value="B"
              checked={value === "B"}
              onChange={handleChange}
            />
          </RadioGroup>
          <TextInput
            label="설명"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <RadioGroup horizontal label={"주요코드여부"}>
            <Radio
              label="Yes"
              name="x"
              value="A"
              checked={value === "A"}
              onChange={handleChange}
            />
            <Radio
              label="No"
              name="x"
              value="B"
              checked={value === "B"}
              onChange={handleChange}
            />
          </RadioGroup>
          <RadioGroup horizontal label={"시스템코드여부"}>
            <Radio
              label="Yes"
              name="x"
              value="A"
              checked={value === "A"}
              onChange={handleChange}
            />
            <Radio
              label="No"
              name="x"
              value="B"
              checked={value === "B"}
              onChange={handleChange}
            />
          </RadioGroup>
        </div>
      </div>
      <div className="flex justify-end mt-2">
        <div className="space-xy-5">
          <Button text="초기화" className="btn-primary btn-sm w-12" />
          <Button text="등록" className="btn-primary btn-sm w-12" disabled />
          <Button text="수정" className="btn-primary btn-sm w-12" />
          <Button text="삭제" className="btn-primary btn-sm w-12" />
        </div>
      </div>
    </form>
  );
}

export default CodeTableFooter;
