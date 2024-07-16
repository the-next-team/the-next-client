import { useForm } from "react-hook-form";
import Button from "../../../../components/button/ExampleButton";
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
};

type Props = {
  initialValues?: FormValues;
  onSubmit: (data: FormValues) => void;
};

function FooterForm({ initialValues, onSubmit }: Props) {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      a: "",
      b: "",
      c: "",
      d: "",
      e: "",
      f: "",
      g: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="p-2 mt-2 bg-white rounded">
        <div className="grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 ">
          <TextInput
            label="프로그램ID"
            type="text"
            horizontal
            name="a"
            id="a"
            placeholder=""
            register={register}
          />
          <CodeSelect
            label="사용여부"
            horizontal
            codeType="TST"
            placeholder={"사용"}
            name="b"
            id="b"
            register={register}
          />
          <TextInput
            label="보기순서"
            type="text"
            horizontal
            placeholder="10"
            name="c"
            id="c"
            register={register}
          />
          <TextInput
            label="프로그램명"
            type="text"
            horizontal
            placeholder=""
            name="d"
            id="d"
            register={register}
          />
          <CodeSelect
            label="수행주기"
            horizontal
            codeType="TST"
            placeholder={"매일"}
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="선수행배치"
            type="text"
            horizontal
            placeholder=""
            name="f"
            id="f"
            register={register}
          />
        </div>
        <TextInput
          label="프로그램 설명"
          type="text"
          horizontal
          placeholder=""
          className="h-12 mb-1"
          name="g"
          id="g"
          register={register}
        />
      </div>
      <div className="flex justify-end gap-2 my-2">
        <Button text="초기화" className="w-12 btn-primary btn-sm" />
        <Button text="등록" className="w-12 btn-primary btn-sm" />
        <Button text="수정" className="w-12 btn-primary btn-sm" disabled />
        <Button text="삭제" className="w-12 btn-primary btn-sm" />
        <Button text="순서저장" className="w-24 btn-primary btn-sm" disabled />
      </div>
    </form>
  );
}

export default FooterForm;