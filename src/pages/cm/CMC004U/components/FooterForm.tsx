import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import CodeSelect from "../../../../components/form/CodeSelect";
import TextInput from "../../../../components/form/TextInput";
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
  h: string;
  i: string;
  j: string;
  checkbox1: Array<string>;
  checkbox2: Array<string>;
  checkbox3: Array<string>;
  checkbox4: Array<string>;
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
      checkbox1: [],
      checkbox2: [],
      checkbox3: [],
      checkbox4: [],
    },
  });

  return (
    <form className="">
      <div className="p-2 mb-2 bg-white rounded">
        <div className="grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
          <TextInput
            label="중개사ID"
            type="text"
            horizontal
            name=""
            id=""
            placeholder=""
            essential
            register={register}
          />
          <TextInput
            label="중개사명"
            type="text"
            horizontal
            placeholder=""
            essential
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="중개사명 약어"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <CheckboxGroup horizontal label="사용여부">
            <Checkbox
              label="사용"
              checked={watch("checkbox1").includes("chk1")}
              value="chk1"
              {...register("checkbox1")}
            />
          </CheckboxGroup>
          <CheckboxGroup horizontal label="VPN사용여부">
            <Checkbox
              label="사용"
              checked={watch("checkbox2").includes("chk2")}
              value="chk2"
              {...register("checkbox2")}
            />
          </CheckboxGroup>
          <CodeSelect
            label="여신상품그룹코드"
            horizontal
            codeType="TST"
            essential
            placeholder={"* 선택"}
            name=""
            id=""
            register={register}
          />
          <CodeSelect
            label="접수(광고)채널"
            horizontal
            codeType="TST"
            placeholder={"* 선택"}
            name=""
            id=""
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
          <TextInput
            label="FEP채널ID"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="영업담당자명"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="영업담당자 연락처"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="전산담당자명"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="전산담당자 연락처"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="연동서버IP"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="연동서버 PORT"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="제휴시작일"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="제휴종료일"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="응답서버IP"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="응답서버 PORT"
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
            label="등록일시"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="설명"
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
          <TextInput
            label="수수료계좌번호"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <TextInput
            label="리턴URL"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <CheckboxGroup horizontal label="혁신금융여부">
            <Checkbox
              label="사용"
              checked={watch("checkbox3").includes("chk3")}
              value="chk3"
              {...register("checkbox3")}
            />
          </CheckboxGroup>
          <CheckboxGroup horizontal label="이연부대비용 처리여부">
            <Checkbox
              label="사용"
              checked={watch("checkbox4").includes("chk4")}
              value="chk4"
              {...register("checkbox4")}
            />
          </CheckboxGroup>
        </div>
      </div>
      <div className="flex justify-end ">
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
