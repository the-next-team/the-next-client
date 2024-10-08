import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import CodeSelect from "../../../../components/form/CodeSelect";
import TextInput from "../../../../components/form/TextInput";
import Checkbox from "../../../../components/checkbox/Checkbox";
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
    <form className="flex flex-col h-full w-80">
      <div className="flex-grow">
        <div className="relative h-full">
          <div className="absolute flex flex-col h-full gap-1 p-2 overflow-y-auto bg-white rounded">
            <TextInput
              label="사용자ID"
              type="text"
              horizontal
              name=""
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
              register={register}
            />
            <CodeSelect
              label="상태"
              horizontal
              codeType="TST"
              placeholder={"* 선택"}
              essential
              name=""
              register={register}
            />
            <CodeSelect
              label="부서(지점)"
              horizontal
              codeType="TST"
              placeholder={"* 선택"}
              essential
              name=""
              register={register}
            />
            <TextInput
              label="현재상태"
              type="text"
              horizontal
              placeholder=""
              name=""
              register={register}
            />
            <TextInput
              label="사번"
              type="text"
              horizontal
              placeholder=""
              name=""
              register={register}
            />
            <TextInput
              label="내선번호"
              type="text"
              horizontal
              placeholder=""
              name=""
              register={register}
            />
            <TextInput
              label="접속허용IP"
              type="text"
              horizontal
              essential
              placeholder=""
              name=""
              register={register}
            />
            <CodeSelect
              label="지점조회권한"
              horizontal
              codeType="AUC"
              placeholder={"* 선택"}
              essential
              name=""
              register={register}
            />
            <DateInput
              label="최종로그인일시"
              dateFormat="Y-m-d H:i"
              enableTime
              horizontal
              name="date"
              control={control}
            />
            <TextInput
              label="이기종사번"
              type="text"
              horizontal
              placeholder=""
              name=""
              register={register}
            />
            <TextInput
              label="직통전화번호"
              type="text"
              horizontal
              placeholder=""
              name=""
              register={register}
            />
            <TextInput
              label="CTI ID"
              type="text"
              horizontal
              placeholder=""
              name=""
              register={register}
            />
            <TextInput
              label="최종로그인IP"
              type="text"
              horizontal
              placeholder=""
              name=""
              register={register}
            />
            <TextInput
              label=" "
              horizontal
              placeholder=""
              name=""
              register={register}
            />
            <CodeSelect
              label="상담배정"
              horizontal
              codeType="TST"
              placeholder={"* 선택"}
              name=""
              register={register}
            />
            <TextInput
              label="직통팩스번호"
              type="text"
              horizontal
              placeholder=""
              name=""
              register={register}
            />
            <TextInput
              label="인터넷전화IP"
              type="text"
              horizontal
              placeholder=""
              name=""
              register={register}
            />
            <TextInput
              label="팀(파트)"
              type="text"
              horizontal
              placeholder=""
              name=""
              register={register}
            />
            <TextInput
              label="로그인제한사유"
              type="text"
              horizontal
              placeholder=""
              name=""
              register={register}
            />
            <CodeSelect
              label="심사배정"
              horizontal
              codeType="TST"
              placeholder={"* 선택"}
              name=""
              register={register}
            />
            <TextInput
              label="SMS회신번호"
              type="text"
              horizontal
              placeholder=""
              name=""
              register={register}
            />
            <DateInput
              label="입사일자"
              horizontal
              dateFormat="Y-m-d"
              name="date"
              control={control}
            />
            <CodeSelect
              label="직급"
              horizontal
              codeType="TST"
              placeholder={"* 선택"}
              name=""
              register={register}
            />
            <TextInput
              label="로그인오류횟수"
              type="text"
              horizontal
              placeholder=""
              name=""
              register={register}
            />
            <CodeSelect
              label="채권배정"
              horizontal
              codeType="TST"
              placeholder={"* 선택"}
              name=""
              register={register}
            />
            <TextInput
              label="핸드폰번호"
              type="text"
              horizontal
              placeholder=""
              name=""
              register={register}
            />
            <DateInput
              label="퇴사일자"
              horizontal
              dateFormat="Y-m-d"
              name="date"
              control={control}
            />
            <CodeSelect
              label="여신상품그룹코드"
              horizontal
              codeType="TST"
              placeholder={"* 선택"}
              name=""
              register={register}
            />
            <DateInput
              label="로그인오류일시"
              dateFormat="Y-m-d H:i"
              enableTime
              horizontal
              name="date"
              control={control}
            />
            <CheckboxGroup horizontal label="권한설정" className="">
              <Checkbox
                label="개인정보조회"
                checked={watch("checkbox").includes("chk1")}
                value="chk1"
                {...register("checkbox")}
              />
              <Checkbox
                label="개인정보파기"
                checked={watch("checkbox").includes("chk2")}
                value="chk2"
                {...register("checkbox")}
              />
              <Checkbox
                label="책임자(팀장)"
                checked={watch("checkbox").includes("chk3")}
                value="chk3"
                {...register("checkbox")}
              />
              <Checkbox
                label="텔러(회계)"
                checked={watch("checkbox").includes("chk4")}
                value="chk4"
                {...register("checkbox")}
              />
              <Checkbox
                label="신용조회"
                checked={watch("checkbox").includes("chk5")}
                value="chk5"
                {...register("checkbox")}
              />
              <Checkbox
                label="엑셀"
                checked={watch("checkbox").includes("chk6")}
                value="chk6"
                {...register("checkbox")}
              />
              <Checkbox
                label="출력"
                checked={watch("checkbox").includes("chk7")}
                value="chk7"
                {...register("checkbox")}
              />
              <Checkbox
                label="팝업"
                checked={watch("checkbox").includes("chk8")}
                value="chk8"
                {...register("checkbox")}
              />
              <Checkbox
                label="이연부대비용"
                checked={watch("checkbox").includes("chk9")}
                value="chk9"
                {...register("checkbox")}
              />
            </CheckboxGroup>
            <CodeSelect
              label="제한상태"
              horizontal
              codeType="TST"
              placeholder={"* 선택"}
              name=""
              register={register}
            />
            <CodeSelect
              label="신용정보관리권한"
              horizontal
              codeType="TST"
              placeholder={"* 선택"}
              name=""
              register={register}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 p-2">
        <Button text="초기화" className="w-12 btn-primary btn-sm" />
        <Button text="등록" className="w-12 btn-primary btn-sm" />
        <Button text="수정" className="w-12 btn-primary btn-sm" disabled />
        <Button text="삭제" className="w-12 btn-primary btn-sm" disabled />
      </div>
    </form>
  );
}

export default FooterForm;
