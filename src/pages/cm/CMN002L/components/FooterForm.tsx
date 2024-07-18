import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import CodeSelect from "../../../../components/form/CodeSelect";
import TextInput from "../../../../components/form/TextInput";

type FormValues = {
  d: string;
  e: string;
  f: string;
  g: string;
  h: string;
  i: string;
  j: string;
  k: string;
  l: string;
  m: string;
  n: string;
  o: string;
  checkboxes: { [key: string]: boolean };
};

type Props = {
  initialValues?: FormValues;
  onSubmit: (data: FormValues) => void;
};

function FooterForm({ initialValues, onSubmit }: Props) {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      d: "",
      e: "",
      f: "",
      g: "",
      h: "",
      i: "",
      j: "",
      k: "",
      l: "",
      m: "",
      n: "",
      o: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="p-2 mt-2 bg-white rounded">
        <div className="grid gap-2 grid-cols-2 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2">
          <TextInput
            essential
            label="전문코드"
            type="text"
            horizontal
            name="d"
            id="d"
            placeholder=""
            register={register}
          />
          <TextInput
            essential
            label="전문명"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <CodeSelect
            essential
            label="사용여부"
            horizontal
            codeType="TST"
            placeholder={"사용"}
            name="f"
            id="f"
            register={register}
          />
        </div>
        <div className="grid grid-cols-2 gap-2 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2">
          <CodeSelect
            essential
            label="호스트명"
            horizontal
            codeType="TST"
            placeholder={"선택"}
            name="g"
            id="g"
            register={register}
          />
          <CodeSelect
            essential
            label="전문ID"
            horizontal
            codeType="TST"
            placeholder={"선택"}
            name="h"
            id="h"
            register={register}
          />
          <CodeSelect
            essential
            label="조회모드"
            horizontal
            codeType="TST"
            placeholder={"DEFAULT"}
            name="i"
            id="i"
            register={register}
          />
        </div>
        <div className="grid grid-cols-2 gap-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          <TextInput
            label="파라메타1-5"
            type="text"
            horizontal
            placeholder=""
            name="j"
            id="j"
            register={register}
          />
          <TextInput
            type="text"
            horizontal
            placeholder=""
            name="k"
            id="k"
            register={register}
          />
          <TextInput
            type="text"
            horizontal
            placeholder=""
            name="l"
            id="l"
            register={register}
          />
          <TextInput
            type="text"
            horizontal
            placeholder=""
            name="m"
            id="m"
            register={register}
          />
          <TextInput
            type="text"
            horizontal
            placeholder=""
            name="n"
            id="n"
            register={register}
          />
        </div>
        <TextInput
          label="설명"
          type="text"
          horizontal
          className="h-12"
          placeholder=""
          name="o"
          id="o"
          register={register}
        />
      </div>
      <div className="flex justify-end mt-2">
        <div className="flex gap-2 mb-2">
          <Button text="초기화" className="w-12 btn-primary btn-sm" />
          <Button text="등록" className="w-12 btn-primary btn-sm" />
          <Button text="수정" className="w-12 btn-primary btn-sm" disabled />
          <Button text="삭제" className="w-12 btn-primary btn-sm" disabled />
        </div>
      </div>
    </form>
  );
}

export default FooterForm;
