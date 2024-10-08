import { useForm } from "react-hook-form";
import CodeSelect from "../../../../components/form/CodeSelect";
import Button from "../../../../components/button/Button";
import TextInput from "../../../../components/form/TextInput";
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
};

type Props = {
  initialValues?: FormValues;
  onSubmit: (data: FormValues) => void;
};

function FooterForm({ initialValues, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    control,
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
      <div className="p-2 mb-2 bg-white rounded">
        <div className="grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
          <CodeSelect
            label="시스템"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            name="a"
            essential
            register={register}
          />
          <CodeSelect
            label="메뉴"
            horizontal
            essential
            codeType="TST"
            placeholder={"* 선택"}
            name="a"
            register={register}
          />
          <CodeSelect
            label="프로그램종류"
            horizontal
            essential
            codeType="TST"
            placeholder={"* 선택"}
            name="a"
            register={register}
          />
          <TextInput
            label="보기순서"
            type="text"
            horizontal
            name="b"
            defaultValue={"1"}
            placeholder=""
            register={register}
          />
          <TextInput
            label="프로그램ID"
            type="text"
            horizontal
            defaultValue={"BCM93OL"}
            placeholder=""
            name="c"
            register={register}
          />
          <TextInput
            label="프로그램명"
            type="text"
            horizontal
            placeholder=""
            defaultValue={"민원내역"}
            name="d"
            register={register}
          />
          <TextInput
            label="프로그램URL"
            type="text"
            horizontal
            placeholder=""
            defaultValue={"bc::BCM93OL xfdl"}
            name="e"
            register={register}
          />
          <TextInput
            label="  "
            type="text"
            horizontal
            placeholder=""
            name="f"
            register={register}
          />
          <div className="col-span-4">
            <TextInput
              label="기능요약"
              type="text"
              horizontal
              placeholder=""
              className="h-12"
              name="f"
              register={register}
            />
          </div>
          <div className="col-span-4">
            <TextInput
              label="프로그램설명(도움말)"
              type="text"
              horizontal
              placeholder=""
              className="h-12"
              name="f"
              register={register}
            />
          </div>
          <TextInput
            label="등록자"
            type="text"
            horizontal
            placeholder=""
            defaultValue={"시스템기본"}
            name="f"
            register={register}
          />
          <DateInput
            label="등록일시"
            horizontal
            name="date"
            dateFormat="Y-m-d H:i"
            enableTime
            control={control}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex gap-2">
          <Button text="초기화" className="w-12 btn-primary btn-sm" />
          <Button text="등록" className="w-12 btn-primary btn-sm" disabled />
          <Button text="수정" className="w-12 btn-primary btn-sm" />
          <Button text="삭제" className="w-12 btn-primary btn-sm" />
          <Button text="보기순서변경" className="btn-primary btn-sm" />
        </div>
      </div>
    </form>
  );
}

export default FooterForm;
