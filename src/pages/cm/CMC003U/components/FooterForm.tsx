import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import Checkbox from "../../../../components/checkbox/Checkbox";
import CodeSelect from "../../../../components/form/CodeSelect";
import TextInput from "../../../../components/form/TextInput";
import CheckboxGroup from "../../../../components/checkbox/CheckboxGroup";
import DateInput from "../../../../components/form/DateInput";

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
  checkbox: Array<string>;
};

type Props = {
  initialValues?: FormValues;
  onSubmit: (data: FormValues) => void;
};

function FooterForm({ initialValues, onSubmit }: Props) {
  const {
    register,
    control,
    handleSubmit,
    setError,
    watch,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      a: "",
      checkbox: [],
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="p-2 mb-2 bg-white rounded">
        <div className="grid grid-cols-2 gap-y-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2">
          <TextInput
            label="접수(광고)채널번호"
            type="text"
            horizontal
            name=""
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
            register={register}
          />

          <TextInput
            label="채널명 약어"
            type="text"
            horizontal
            placeholder=""
            essential
            name=""
            register={register}
          />
          <CheckboxGroup horizontal label="사용여부">
            <Checkbox
              label="사용"
              checked={watch("checkbox").includes("chk1")}
              value="chk1"
              {...register("checkbox")}
            />
          </CheckboxGroup>
          <CodeSelect
            label="접수경로"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            name="a"
            register={register}
          />
          <CodeSelect
            label="통계구분"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            name="a"
            register={register}
          />
          <CodeSelect
            label="광고대행사"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            name="a"
            register={register}
          />
          <TextInput
            label="권유자ID"
            type="text"
            horizontal
            placeholder=""
            name=""
            register={register}
          />
          <div className="col-span-2">
            <TextInput
              label="설명"
              type="text"
              horizontal
              placeholder=""
              name="c"
              register={register}
            />
          </div>
          <TextInput
            label="동록자"
            type="text"
            horizontal
            placeholder=""
            name=""
            register={register}
          />
          <DateInput
            label="등록일시"
            horizontal
            dateFormat="Y-m-d H:i"
            enableTime
            name="date"
            control={control}
          />
          <TextInput
            label="변경자"
            type="text"
            horizontal
            placeholder=""
            name=""
            register={register}
          />
          <DateInput
            label="변경일시"
            horizontal
            dateFormat="Y-m-d H:i"
            enableTime
            name="date"
            control={control}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex gap-2 ">
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
