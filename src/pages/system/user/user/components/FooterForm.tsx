import { useForm } from "react-hook-form";
import Button from "../../../../../components/button/ExampleButton";
import CodeSelect from "../../../../../components/form/CodeSelect";
import TextInput from "../../../../../components/form/TextInput";
import Checkbox from "../../../../../components/form/checkbox/Checkbox";

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
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
        checkbox7: false,
        checkbox8: false,
        checkbox9: false,
      },
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
        <div className="ml-[64px] p-1 text-[12px] font-medium flex flex-row items-center">
          권한설정
          <div className="flex gap-2 mx-2">
            <Checkbox
              label="개인정보조회"
              name={"checkboxes.checkbox1"}
              value={watch("checkboxes.checkbox1")}
              register={register}
            />
            <Checkbox
              label="개인정보파기"
              name={"checkboxes.checkbox2"}
              value={watch("checkboxes.checkbox2")}
              register={register}
            />
            <Checkbox
              label="책임자(팀장)"
              name={"checkboxes.checkbox3"}
              value={watch("checkboxes.checkbox3")}
              register={register}
            />
            <Checkbox
              label="텔러(회계)"
              name={"checkboxes.checkbox4"}
              register={register}
            />
            <Checkbox
              label="신용조회"
              name={"checkboxes.checkbox5"}
              register={register}
            />
            <Checkbox
              label="엑셀"
              name={"checkboxes.checkbox6"}
              register={register}
            />
            <Checkbox
              label="출력"
              name={"checkboxes.checkbox7"}
              register={register}
            />
            <Checkbox
              label="팝업"
              name={"checkboxes.checkbox8"}
              register={register}
            />
            <Checkbox
              label="이연부대비용"
              name={"checkboxes.checkbox9"}
              register={register}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 ">
          <CodeSelect
            label="제한상태"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            name=""
            id=""
            register={register}
          />
          <CodeSelect
            label="신용정보관리권한"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
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
          <Button text="수정" className="w-12 btn-primary btn-sm" disabled />
          <Button text="삭제" className="w-12 btn-primary btn-sm" disabled />
        </div>
      </div>
    </form>
  );
}

export default FooterForm;
