import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../../components/button/ExampleButton";
import Radio from "../../../../components/form/Radio";
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
          <div className="flex gap-2 items-center p-1 ml-[64px]">
            <span className="font-medium text-[12px]">사용여부</span>
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
          </div>
        </div>
        <TextInput
          label="권한설정"
          type="text"
          horizontal
          placeholder=""
          name="e"
          id="e"
          register={register}
        />
      </div>
      <div className="flex justify-end mt-2">
        <div className="space-xy-5">
          <Button text="초기화" className="btn-primary btn-sm" />
          <Button text="등록" className="btn-primary btn-sm" />
          <Button text="수정" className="btn-primary btn-sm" disabled />
          <Button text="삭제" className="btn-primary btn-sm" disabled />
          <Button text="보기순서변경" className="btn-primary btn-sm" />
        </div>
      </div>
    </form>
  );
}

export default CodeItemTableFooter;
