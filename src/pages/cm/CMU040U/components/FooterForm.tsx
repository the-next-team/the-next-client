import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
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
            id=""
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
            id=""
            register={register}
          />

          <TextInput
            label="단말번호"
            type="text"
            horizontal
            placeholder=""
            essential
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="단말IP"
            type="text"
            horizontal
            placeholder=""
            essential
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="이기종 지점코드"
            type="text"
            horizontal
            placeholder=""
            essential
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="이기종 비밀번호"
            type="text"
            horizontal
            placeholder="*******"
            essential
            name=""
            id=""
            register={register}
          />
          <CodeSelect
            label="용도"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            essential
            name="a"
            id="a"
            register={register}
          />
          <TextInput
            label="이기종 팀코드"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <CodeSelect
            label="관리부서(지점)"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            essential
            name="a"
            id="a"
            register={register}
          />
          <TextInput
            label="비밀번호 변경일"
            type="text"
            horizontal
            name=""
            id=""
            placeholder=""
            register={register}
          />
          <TextInput
            label="비밀번호 만료일"
            type="text"
            horizontal
            name=""
            id=""
            placeholder=""
            register={register}
          />
          <TextInput
            label="비밀번호 오류횟수"
            type="text"
            horizontal
            name=""
            id=""
            placeholder=""
            register={register}
          />
          <TextInput
            label="등록자"
            type="text"
            horizontal
            name=""
            id=""
            placeholder="시스템"
            register={register}
          />
          <TextInput
            label="등록일시"
            type="text"
            horizontal
            name=""
            id=""
            placeholder="2024-00-00 00:00"
            register={register}
          />
          <TextInput
            label="최종 로그인일시"
            type="text"
            horizontal
            name=""
            id=""
            placeholder=""
            register={register}
          />
          <div className="col-span-2">
            <TextInput
              label="최종로그인 메시지"
              type="text"
              horizontal
              name=""
              id=""
              placeholder=""
              register={register}
            />
          </div>
          <TextInput
            label="변경자"
            type="text"
            horizontal
            name=""
            id=""
            placeholder=""
            register={register}
          />
          <TextInput
            label="변경일시"
            type="text"
            horizontal
            name=""
            id=""
            placeholder=""
            register={register}
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
