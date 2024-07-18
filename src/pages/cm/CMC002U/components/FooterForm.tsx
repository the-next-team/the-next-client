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
      <div className="p-2 mb-2 bg-white rounded">
        <div className="grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-y-1">
          <CodeSelect
            label="• 부서(지점)"
            horizontal
            codeType="NBR"
            placeholder={"* 선택"}
            name="a"
            id="a"
            register={register}
          />
          <TextInput
            label="팀(파트)코드"
            type="text"
            horizontal
            name="b"
            id="b"
            placeholder=""
            register={register}
          />
          <TextInput
            label="팀(파트)명"
            type="text"
            horizontal
            placeholder=""
            name="c"
            id="c"
            register={register}
          />
          <TextInput
            label="보기순서"
            type="text"
            horizontal
            placeholder=""
            name="d"
            id="d"
            register={register}
          />
          <TextInput
            label="사용여부"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="대표번호"
            type="text"
            horizontal
            placeholder=""
            name="f"
            id="f"
            register={register}
          />
          <TextInput
            label="팩스번호"
            type="text"
            horizontal
            placeholder=""
            name="g"
            id="g"
            register={register}
          />
          <TextInput
            label="WEB팩스번호"
            type="text"
            horizontal
            placeholder=""
            name="h"
            id="h"
            register={register}
          />
          <TextInput
            label="인사시스템코드"
            type="text"
            horizontal
            name="i"
            id="i"
            placeholder=""
            register={register}
          />
          <TextInput
            label="중앙회팀파트코드"
            type="text"
            name="j"
            id="j"
            horizontal
            placeholder=""
            register={register}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex gap-2">
          <Button
            text="초기화"
            onClick={() => {
              reset({});
            }}
            className="w-12 btn-primary btn-sm"
          />
          <Button
            text="등록"
            onClick={() => {
              handleSubmit(onSubmit)();
            }}
            className="w-12 btn-primary btn-sm"
            disabled
          />
          <Button text="수정" className="w-12 btn-primary btn-sm" />
          <Button text="삭제" className="w-12 btn-primary btn-sm" />
          <Button text="보기순서변경" className="w-20 btn-primary btn-sm" />
        </div>
      </div>
    </form>
  );
}

export default FooterForm;
