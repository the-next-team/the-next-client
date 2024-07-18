import { useForm } from "react-hook-form";
import Button from "../../../../components/button/ExampleButton";
import CodeSelect from "../../../../components/form/CodeSelect";
import TextInput from "../../../../components/form/TextInput";

type FormValues = {
  code: string;
  jobCode: string;
  jobName: string;
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
      code: "",
      jobCode: "",
      jobName: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="p-2 mt-2 bg-white rounded">
        <div className="grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 ">
          <CodeSelect
            label="직업종류"
            horizontal
            codeType="HAC"
            placeholder={"* 선택"}
            name="code"
            id="code"
            register={register}
          />
          <TextInput
            label="직업코드"
            type="text"
            horizontal
            name="jobCode"
            id="jobCode"
            placeholder=""
            register={register}
          />
          <TextInput
            label="직업명"
            type="text"
            horizontal
            placeholder=""
            name="jobName"
            id="jobName"
            register={register}
          />

          <TextInput
            label="계정직업코드"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="직업등급1"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="직업등급2"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="등록자"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="등록일"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="부가세 업종코드"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="부가세 소득율"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="직군등급1"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="직군등급2"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
        </div>
      </div>
      <div className="flex justify-end mt-2">
        <div className="flex gap-2 mb-2">
          <Button
            text="초기화"
            className="w-12 btn-primary btn-sm"
            onClick={() => {
              reset();
            }}
          />
          <Button text="등록" className="w-12 btn-primary btn-sm" disabled />
          <Button text="수정" className="w-12 btn-primary btn-sm" />
          <Button text="삭제" className="w-12 btn-primary btn-sm" />
        </div>
      </div>
    </form>
  );
}

export default FooterForm;
