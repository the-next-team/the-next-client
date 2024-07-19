import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import TextInput from "../../../../components/form/TextInput";
import CodeSelect from "../../../../components/form/CodeSelect";
import Checkbox from "../../../../components/checkbox/Checkbox";
import CheckboxGroup from "../../../../components/checkbox/CheckboxGroup";

type FormValues = {
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
  g: string;
  checkbox: Array<string>;
};

type Props = {
  initialValues?: FormValues;
  onSubmit: (data: FormValues) => void;
};

function FooterForm({ initialValues, onSubmit }: Props) {
  const { register, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      a: "",
      b: "",
      c: "",
      d: "",
      e: "",
      f: "",
      g: "",
      checkbox: [],
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="p-2 mt-2 bg-white rounded">
        <div className="grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
          <CodeSelect
            label="중개사"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            essential
            name="a"
            id="a"
            register={register}
          />
          <TextInput
            label="조직코드"
            type="text"
            horizontal
            essential
            name="a"
            id="a"
            placeholder=""
            register={register}
          />
          <TextInput
            label="모집인ID"
            type="text"
            horizontal
            essential
            name="a"
            id="a"
            placeholder=""
            register={register}
          />
          <TextInput
            label="모집인명"
            type="text"
            essential
            horizontal
            placeholder=""
            name="c"
            id="c"
            register={register}
          />
          <TextInput
            label="(휴대)전화번호"
            type="text"
            horizontal
            placeholder=""
            name="c"
            id="c"
            register={register}
          />
          <TextInput
            label="생년월일"
            type="text"
            horizontal
            placeholder=""
            name="c"
            id="c"
            register={register}
          />
          <TextInput
            label="모집인등록번호"
            type="text"
            horizontal
            placeholder=""
            name="c"
            id="c"
            register={register}
          />
          <CodeSelect
            label="접속권한"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            essential
            name="a"
            id="a"
            register={register}
          />
          <TextInput
            label="입사일자"
            type="text"
            horizontal
            placeholder=""
            name="c"
            id="c"
            register={register}
          />
          <TextInput
            label="퇴사일자"
            type="text"
            horizontal
            placeholder=""
            name="c"
            id="c"
            register={register}
          />
          <TextInput
            label="모집인패스워드"
            type="text"
            horizontal
            placeholder=""
            name="c"
            id="c"
            register={register}
          />
          <CheckboxGroup horizontal label="여부">
            <Checkbox
              label="사용여부"
              checked={watch("checkbox").includes("chk1")}
              value="chk1"
              {...register("checkbox")}
            />
            <Checkbox
              label="SMS수신"
              checked={watch("checkbox").includes("chk2")}
              value="chk2"
              {...register("checkbox")}
            />
          </CheckboxGroup>
          <TextInput
            label="최종접속IP"
            type="text"
            horizontal
            placeholder=""
            name="c"
            id="c"
            register={register}
          />
          <TextInput
            label="최종접속일시"
            type="text"
            horizontal
            placeholder=""
            name="c"
            id="c"
            register={register}
          />
          <CodeSelect
            label="로그인제한사유"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="월접수제한"
            type="text"
            horizontal
            placeholder=""
            name="c"
            id="c"
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
            label="등록자"
            type="text"
            horizontal
            placeholder=""
            name="c"
            id="c"
            register={register}
          />
          <TextInput
            label="등록일시"
            type="text"
            horizontal
            placeholder=""
            name="c"
            id="c"
            register={register}
          />
          <TextInput
            label="변경자"
            type="text"
            horizontal
            placeholder=""
            name="c"
            id="c"
            register={register}
          />
          <TextInput
            label="변경일시"
            type="text"
            horizontal
            placeholder=""
            name="c"
            id="c"
            register={register}
          />
        </div>
      </div>
      <div className="flex justify-end gap-2 my-2">
        <Button text="초기화" className="w-12 btn-primary btn-sm" />
        <Button text="등록" className="w-12 btn-primary btn-sm" />
        <Button text="수정" className="w-12 btn-primary btn-sm" />
        <Button text="삭제" className="w-12 btn-primary btn-sm" />
      </div>
    </form>
  );
}

export default FooterForm;
