import { useForm } from "react-hook-form";
import Button from "../../../../components/button/ExampleButton";
import CodeSelect from "../../../../components/form/CodeSelect";
import TextInput from "../../../../components/form/TextInput";
import Checkbox from "../../../../components/checkbox/Checkbox";

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
      },
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="p-2 mt-2 bg-white rounded">
        <div className="grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 ">
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
          <div className="ml-[40px] p-1 text-[12px] font-medium flex flex-row items-center">
            VPN사용여부
            <div className="flex gap-2 mx-2">
              <Checkbox
                label="사용"
                name={"checkboxes.checkbox2"}
                value={watch("checkboxes.checkbox2")}
                register={register}
              />
            </div>
          </div>
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
        </div>
        <div className="grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 ">
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
        </div>
        <div className="grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 ">
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
        </div>
        <div className="grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 ">
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
        </div>
        <div className="grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 ">
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
        </div>
        <div className="grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 ">
          <TextInput
            label="리턴URL"
            type="text"
            horizontal
            placeholder=""
            name=""
            id=""
            register={register}
          />
          <div className="ml-[43px] p-1 text-[12px] font-medium flex flex-row items-center">
            혁신금융여부
            <div className="flex gap-2 mx-2">
              <Checkbox
                label="사용"
                name={"checkboxes.checkbox3"}
                value={watch("checkboxes.checkbox3")}
                register={register}
              />
            </div>
          </div>
          <div className=" p-1 text-[12px] font-medium flex flex-row items-center">
            이연부대비용 처리여부
            <div className="flex gap-2 mx-2">
              <Checkbox
                label="사용"
                name={"checkboxes.checkbox4"}
                value={watch("checkboxes.checkbox4")}
                register={register}
              />
            </div>
          </div>
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
