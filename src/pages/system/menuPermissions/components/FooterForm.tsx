import { useForm } from "react-hook-form";
import CodeSelect from "../../../../components/form/CodeSelect";
import TextInput from "../../../../components/form/TextInput";
import Button from "../../../../components/button/ExampleButton";

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

function FooterForm({ initialValues, onSubmit }: Props) {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="p-2 mt-2 bg-white rounded">
        <div className="grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 ">
          <TextInput
            label="화면그룹코드"
            type="text"
            horizontal
            name="b"
            id="b"
            placeholder=""
            register={register}
          />
          <TextInput
            label="화면그룹명"
            type="text"
            horizontal
            placeholder=""
            name="c"
            id="c"
            register={register}
          />
          <TextInput
            label="사용"
            type="text"
            horizontal
            placeholder=""
            name="d"
            id="d"
            register={register}
          />
          <TextInput
            label="등록일시"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
        </div>
        <TextInput
          label="권한설정"
          type="text"
          horizontal
          placeholder=""
          className="h-12 mb-1"
          name="f"
          id="f"
          register={register}
        />
      </div>
      <div className="flex justify-end mt-2">
        <div className="flex gap-2 mb-2">
          <Button text="초기화" className="btn-primary btn-sm w-12" />
          <Button text="등록" className="btn-primary btn-sm w-12" />
          <Button text="수정" className="btn-primary btn-sm w-12" disabled />
          <Button text="삭제" className="btn-primary btn-sm w-12" disabled />
        </div>
      </div>
    </form>
  );
}

export default FooterForm;
