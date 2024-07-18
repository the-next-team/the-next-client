import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import Radio from "../../../../components/form/Radio";
import TextInput from "../../../../components/form/TextInput";
import RadioGroup from "../../../../components/form/RadioGroup";

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
        <div className="grid grid-cols-2 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2">
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
            label="보기순서"
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
          <div className="col-span-2">
            <TextInput
              essential
              label="코드명"
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
          <RadioGroup horizontal label={"사용여부1"}>
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
          <RadioGroup horizontal label={"사용여부2"}>
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
          <RadioGroup horizontal label={"사용여부3"}>
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
            label="정수1"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="정수2"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="실수1"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="문자1"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="문자2"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="문자3"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="문자4"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="문자5"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="IFIS코드"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
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
          <TextInput
            label="NICE코드"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="KCB코드"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
        </div>
      </div>
      <div className="flex justify-end mt-2">
        <div className="space-xy-5">
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
