import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
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
      <div className="p-2 mb-2 bg-white rounded">
        <div className="grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
          <div className="col-span-2">
            <TextInput
              label="프로그램ID"
              type="text"
              horizontal
              name="a"
              placeholder=""
              register={register}
            />
          </div>
          <CodeSelect
            label="사용여부"
            horizontal
            codeType="TST"
            placeholder={"사용"}
            name="b"
            register={register}
          />
          <TextInput
            label="보기순서"
            type="text"
            horizontal
            placeholder="10"
            name="c"
            register={register}
          />
          <div className="col-span-2">
            <TextInput
              label="프로그램명"
              type="text"
              horizontal
              placeholder=""
              name="d"
              register={register}
            />
          </div>
          <CodeSelect
            label="수행주기"
            horizontal
            codeType="TST"
            placeholder={"매일"}
            name="e"
            register={register}
          />
          <TextInput
            label="선수행배치"
            type="text"
            horizontal
            placeholder=""
            name="f"
            register={register}
          />
          <div className="col-span-4">
            <TextInput
              label="프로그램 설명"
              type="text"
              horizontal
              placeholder=""
              className="h-12 mb-1"
              name="g"
              register={register}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2">
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
