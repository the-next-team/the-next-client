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
      <div className="p-2 mb-2 bg-white rounded">
        <div className="grid grid-cols-2 gap-2 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
          <TextInput
            essential
            label="전문코드"
            type="text"
            horizontal
            name="d"
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
            register={register}
          />
          <CodeSelect
            essential
            label="사용여부"
            horizontal
            codeType="TST"
            placeholder={"사용"}
            name="f"
            register={register}
          />
          <CodeSelect
            essential
            label="호스트명"
            horizontal
            codeType="TST"
            placeholder={"선택"}
            name="g"
            register={register}
          />
          <CodeSelect
            essential
            label="전문ID"
            horizontal
            codeType="TST"
            placeholder={"선택"}
            name="h"
            register={register}
          />
          <CodeSelect
            essential
            label="조회모드"
            horizontal
            codeType="TST"
            placeholder={"DEFAULT"}
            name="i"
            register={register}
          />
          <TextInput
            label="파라메타1-5"
            type="text"
            horizontal
            placeholder=""
            name="j"
            register={register}
          />
          <TextInput
            label=" "
            type="text"
            horizontal
            placeholder=""
            name="k"
            register={register}
          />
          <TextInput
            label=" "
            type="text"
            horizontal
            placeholder=""
            name="l"
            register={register}
          />
          <TextInput
            label=" "
            type="text"
            horizontal
            placeholder=""
            name="m"
            register={register}
          />
          <TextInput
            label=" "
            type="text"
            horizontal
            placeholder=""
            name="n"
            register={register}
          />
          <div className="col-span-4">
            <TextInput
              label="설명"
              type="text"
              horizontal
              className="h-12"
              placeholder=""
              name="o"
              register={register}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end ">
        <div className="flex gap-2 ">
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
