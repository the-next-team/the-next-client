import { useForm } from "react-hook-form";
import Button from "../../../../components/button/ExampleButton";
import Select from "../../../../components/form/Select";
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

function SubFooterForm({ initialValues, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({});

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="p-2 mb-2 bg-white rounded">
        <div className="grid grid-cols-2 2xl:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
          <CodeSelect
            label="시스템명"
            horizontal
            codeType=""
            placeholder=""
            essential
            name="a"
            id="a"
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
          <TextInput
            label="화면그룹코드"
            type="text"
            horizontal
            placeholder=""
            name="b"
            id="b"
            register={register}
          />
          <TextInput
            label="메뉴명"
            type="text"
            horizontal
            placeholder=""
            name="b"
            id="b"
            register={register}
          />
        </div>
        <TextInput
          label="메뉴설명"
          type="text"
          horizontal
          className="h-12 mb-1"
          placeholder=""
          name="c"
          id="c"
          register={register}
        />
      </div>
      <div className="flex justify-end mt-2">
        <div className="space-xy-5">
          <Button text="초기화" className="btn-primary btn-sm w-12" />
          <Button text="등록" className="btn-primary btn-sm w-12" />
          <Button text="수정" className="btn-primary btn-sm w-12" disabled />
          <Button text="삭제" className="btn-primary btn-sm w-12" disabled />
        </div>
      </div>
    </form>
  );
}

export default SubFooterForm;
