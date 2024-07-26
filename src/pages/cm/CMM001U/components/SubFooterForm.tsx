import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
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
      <div className="p-2 my-2 bg-white rounded">
        <div className="grid grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
          <CodeSelect
            label="시스템명"
            horizontal
            codeType="TST"
            placeholder=""
            essential
            name="a"
            register={register}
          />
          <TextInput
            label="보기순서"
            type="text"
            horizontal
            placeholder=""
            name="b"
            register={register}
          />
          <TextInput
            label="화면그룹코드"
            type="text"
            horizontal
            placeholder=""
            name="b"
            register={register}
          />
          <TextInput
            label="메뉴명"
            type="text"
            horizontal
            placeholder=""
            name="b"
            register={register}
          />
          <div className="col-span-2">
            <TextInput
              label="메뉴설명"
              type="text"
              horizontal
              className="h-12"
              placeholder=""
              name="c"
              register={register}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex gap-2">
          <Button text="초기화" className="w-12 btn-primary btn-sm" />
          <Button text="등록" className="w-12 btn-primary btn-sm" />
          <Button text="수정" className="w-12 btn-primary btn-sm" disabled />
          <Button text="삭제" className="w-12 btn-primary btn-sm" disabled />
        </div>
      </div>
    </form>
  );
}

export default SubFooterForm;
