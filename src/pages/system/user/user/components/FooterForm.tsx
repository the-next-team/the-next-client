import { useForm } from "react-hook-form";
import CodeSelect from "../../../../../components/form/CodeSelect";
import TextInput from "../../../../../components/form/TextInput";
import Button from "../../../../../components/button/ExampleButton";

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
      <div className="p-2 mt-2 bg-white rounded">
        <div className="grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 ">
          <TextInput
            label="사용자ID"
            type="text"
            horizontal
            name=""
            id=""
            placeholder=""
            essential
            register={register}
          />
          <TextInput
            label="사용자명"
            type="text"
            horizontal
            placeholder=""
            essential
            name=""
            id=""
            register={register}
          />
          <CodeSelect
            label="상태"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            essential
            name=""
            id=""
            register={register}
          />
          <CodeSelect
            label="부서(지점)"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            essential
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="현재상태"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="사번"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="내선번호"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="접속허용IP"
            type="text"
            horizontal
            essential
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <CodeSelect
            label="지점조회권한"
            horizontal
            codeType="AUC"
            placeholder={"* 선택"}
            essential
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="최종로그인일시"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="이기종사번"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="직통전화번호"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="CTI ID"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="최종로그인IP"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label=" "
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <CodeSelect
            label="상담배정"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="직통팩스번호"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="인터넷전화IP"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="팀(파트)"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="로그인제한사유"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <CodeSelect
            label="심사배정"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="SMS회신번호"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="입사일자"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <CodeSelect
            label="직급"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="로그인오류횟수"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <CodeSelect
            label="채권배정"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="핸드폰번호"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="퇴사일자"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <CodeSelect
            label="여신상품그룹코드"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="로그인오류일시"
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
          placeholder=""
          className="h-12 mb-1"
          name="e"
          id="e"
          register={register}
        />
      </div>
      <div className="flex justify-end mt-2">
        <div className="flex gap-2 mb-2">
          <Button text="초기화" className="btn-primary btn-sm w-12" />
          <Button text="등록" className="btn-primary btn-sm w-12" />
          <Button text="수정" className="btn-primary btn-sm w-12" disabled />
          <Button text="삭제" className="btn-primary btn-sm w-12" disabled />
        </div>
      </div>
    </form>
  );
}

export default FooterForm;
