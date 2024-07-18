import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import TextInput from "../../../../components/form/TextInput";
import Checkbox from "../../../../components/checkbox/Checkbox";

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
      checkboxes: {
        checkbox1: false,
      },
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="p-2 mt-2 bg-white rounded">
        <div className="grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 ">
          <TextInput
            label="객체권한코드"
            type="text"
            horizontal
            name=""
            id=""
            placeholder=""
            register={register}
          />
          <TextInput
            label="객체권한명"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <div className="ml-[64px] p-1 text-[12px] font-medium flex flex-row items-center">
            사용
            <div className="flex gap-2 mx-2">
              <Checkbox
                label=""
                name={"checkboxes.checkbox1"}
                value={watch("checkboxes.checkbox1")}
                register={register}
              />
            </div>
          </div>

          <TextInput
            label="보기순서"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
        </div>
        <TextInput
          label="권한설정"
          type="text"
          horizontal
          className="h-12"
          placeholder=""
          name=""
          id=""
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
