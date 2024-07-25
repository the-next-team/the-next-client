import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import CodeSelect from "../../../../components/form/CodeSelect";
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
  checkboxes: { [key: string]: boolean };
};

type Props = {
  initialValues?: FormValues;
  onSubmit: (data: FormValues) => void;
};

function FooterForm({ initialValues, onSubmit }: Props) {
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
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="p-2 mt-2 bg-white rounded">
        <div className="grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
          <TextInput
            essential
            label="호스트ID"
            type="text"
            horizontal
            name="c"
            placeholder=""
            register={register}
          />
          <TextInput
            essential
            label="호스트명"
            type="text"
            horizontal
            placeholder=""
            name="d"
            register={register}
          />
          <TextInput
            label="호스트약자"
            type="text"
            horizontal
            placeholder=""
            name="e"
            register={register}
          />
          <CodeSelect
            essential
            label="조회모드"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            name="f"
            register={register}
          />
          <CodeSelect
            essential
            label="사용여부"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            name="g"
            register={register}
          />
          <div className="col-span-4">
            <TextInput
              label="설명"
              type="text"
              horizontal
              placeholder=""
              className="h-12"
              name="h"
              register={register}
            />
          </div>
        </div>
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
