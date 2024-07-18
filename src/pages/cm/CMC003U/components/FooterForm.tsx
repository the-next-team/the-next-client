import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import Checkbox from "../../../../components/checkbox/Checkbox";
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
      checkboxes: {
        checkbox1: false,
      },
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="p-2 mt-2 bg-white rounded">
        <div className="grid grid-cols-2 gap-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 ">
          <TextInput
            label="접수(광고)채널번호"
            type="text"
            horizontal
            name=""
            id=""
            placeholder=""
            essential
            register={register}
          />
          <TextInput
            label="접수채널명"
            type="text"
            horizontal
            placeholder=""
            essential
            name=""
            id=""
            register={register}
          />

          <TextInput
            label="채널명 약어"
            type="text"
            horizontal
            placeholder=""
            essential
            name=""
            id=""
            register={register}
          />
          <div className="ml-[64px] p-1 text-[12px] font-medium flex flex-row items-center">
            사용여부
            <div className="flex gap-2 mx-2">
              <Checkbox
                label="사용"
                name={"checkboxes.checkbox1"}
                value={watch("checkboxes.checkbox1")}
                register={register}
              />
            </div>
          </div>
          <CodeSelect
            label="접수경로"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            name="a"
            id="a"
            register={register}
          />
          <CodeSelect
            label="통계구분"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            name="a"
            id="a"
            register={register}
          />
          <CodeSelect
            label="광고대행사"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            name="a"
            id="a"
            register={register}
          />
          <TextInput
            label="권유자ID"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <div className="col-span-2">
            <TextInput
              label="설명"
              type="text"
              horizontal
              placeholder=""
              name="c"
              id="c"
              register={register}
            />
          </div>
          <TextInput
            label="동록자"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="등록일시"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="변경자"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="변경일시"
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
          <Button text="초기화" className="w-12 btn-primary btn-sm" />
          <Button text="등록" className="w-12 btn-primary btn-sm" />
          <Button text="수정" className="w-12 btn-primary btn-sm" />
          <Button text="삭제" className="w-12 btn-primary btn-sm" />
        </div>
      </div>
    </form>
  );
}

export default FooterForm;
