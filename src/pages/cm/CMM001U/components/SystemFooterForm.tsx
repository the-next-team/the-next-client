import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import Select from "../../../../components/form/Select";
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

function SystemFooterForm({ initialValues, onSubmit }: Props) {
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
          <TextInput
            label="시스템코드"
            type="text"
            horizontal
            name="a"
            placeholder=""
            defaultValue="HM"
            register={register}
          />
          <TextInput
            label="시스템명"
            type="text"
            horizontal
            placeholder=""
            defaultValue="HOME"
            name="b"
            register={register}
          />
          <div className="col-span-2">
            <TextInput
              label="시스템설명"
              type="text"
              horizontal
              className="h-12"
              placeholder=""
              name="c"
              register={register}
            />
          </div>
          <div className="col-span-2">
            <TextInput
              label="보기순서"
              type="text"
              horizontal
              placeholder=""
              name="d"
              register={register}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex gap-2">
          <Button text="초기화" className="w-12 btn-primary btn-sm" />
          <Button text="등록" className="w-12 btn-primary btn-sm" disabled />
          <Button text="수정" className="w-12 btn-primary btn-sm" />
          <Button text="삭제" className="w-12 btn-primary btn-sm" />
        </div>
      </div>
    </form>
  );
}

export default SystemFooterForm;
