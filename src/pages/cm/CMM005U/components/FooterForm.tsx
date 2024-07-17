import { useForm } from "react-hook-form";
import Button from "../../../../components/button/ExampleButton";
import TextInput from "../../../../components/form/TextInput";
import Checkbox from "../../../../components/form/checkbox/Checkbox";

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
    watch,
    setError,
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
            label="화면그룹코드"
            type="text"
            horizontal
            name="a"
            id="a"
            placeholder=""
            register={register}
          />
          <TextInput
            label="화면그룹명"
            type="text"
            horizontal
            placeholder=""
            name="b"
            id="b"
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
            label="등록일시"
            type="text"
            horizontal
            placeholder=""
            name="d"
            id="d"
            register={register}
          />
        </div>
        <TextInput
          label="권한설정"
          type="text"
          horizontal
          placeholder=""
          className="h-12 mb-1"
          name="e"
          id="e"
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
