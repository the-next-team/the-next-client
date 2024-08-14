import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import CodeSelect from "../../../../components/form/CodeSelect";
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
  checkboxes: { [key: string]: boolean };
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
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="p-2 mb-2 bg-white rounded">
        <div className="grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
          <TextInput
            label="이기종 사번"
            type="text"
            horizontal
            name=""
            placeholder="710003"
            essential
            register={register}
          />
          <TextInput
            label="이기종 이용자명"
            type="text"
            horizontal
            placeholder="이기종책임자2"
            essential
            name=""
            register={register}
          />

          <TextInput
            label="단말번호"
            type="text"
            horizontal
            placeholder=""
            essential
            name=""
            register={register}
          />
          <TextInput
            label="단말IP"
            type="text"
            horizontal
            placeholder=""
            essential
            name=""
            register={register}
          />
          <TextInput
            label="이기종 지점코드"
            type="text"
            horizontal
            placeholder=""
            essential
            name=""
            register={register}
          />
          <TextInput
            label="이기종 비밀번호"
            type="text"
            horizontal
            placeholder="*******"
            essential
            name=""
            register={register}
          />
          <CodeSelect
            label="용도"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            essential
            name="a"
            register={register}
          />
          <TextInput
            label="이기종 팀코드"
            type="text"
            horizontal
            placeholder=""
            name=""
            register={register}
          />
          <CodeSelect
            label="관리부서(지점)"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            essential
            name="a"
            register={register}
          />
          <DateInput
            label="비밀번호 변경일"
            horizontal
            dateFormat="Y-m-d"
            name="date"
            control={control}
          />
          <DateInput
            label="비밀번호 만료일"
            horizontal
            dateFormat="Y-m-d"
            name="date"
            control={control}
          />
          <TextInput
            label="비밀번호 오류횟수"
            type="text"
            horizontal
            name=""
            placeholder=""
            register={register}
          />
          <TextInput
            label="등록자"
            type="text"
            horizontal
            name=""
            placeholder="시스템"
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
          <DateInput
            label="최종 로그인일시"
            horizontal
            name="date"
            dateFormat="Y-m-d H:i"
            enableTime
            control={control}
          />
          <div className="col-span-2">
            <TextInput
              label="최종로그인 메시지"
              type="text"
              horizontal
              name=""
              placeholder=""
              register={register}
            />
          </div>
          <TextInput
            label="변경자"
            type="text"
            horizontal
            name=""
            placeholder=""
            register={register}
          />
          <DateInput
            label="변경일시"
            horizontal
            name="date"
            dateFormat="Y-m-d H:i"
            enableTime
            control={control}
          />
        </div>
      </div>
      <div className="flex justify-end ">
        <div className="flex gap-2 ">
          <Button text="초기화" className="w-12 btn-primary btn-sm" />
          <Button text="등록" className="w-12 btn-primary btn-sm" disabled />
          <Button text="수정" className="w-12 btn-primary btn-sm" />
          <Button text="삭제" className="w-12 btn-primary btn-sm" />
        </div>
      </div>
    </form>
  );
}

export default FooterForm;
