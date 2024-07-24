import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
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
      <div className="p-2 mb-2 bg-white rounded">
        <div className="grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
          <TextInput
            label="부서지점코드"
            type="text"
            horizontal
            name=""
            id=""
            placeholder=""
            essential
            register={register}
          />
          <TextInput
            label="부점명"
            type="text"
            horizontal
            placeholder=""
            essential
            name=""
            id=""
            register={register}
          />

          <TextInput
            label="부점약어"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="보기순서"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="부점주소"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="NICE 계정1"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="KCB 계정1"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="기타1"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="기타3"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="NICE 계정2"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="KCB 계정2"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="기타2"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="기타4"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
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
