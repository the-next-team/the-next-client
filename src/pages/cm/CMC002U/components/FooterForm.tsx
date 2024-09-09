import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ITeam } from "../../../../api/services/teamService";
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
  initialValues?: ITeam | null;
  onAdd?: (data: ITeam) => void;
  onEdit?: (data: ITeam) => void;
  onDelete?: () => void;
  onReset?: () => void;
};

function FooterForm({
  initialValues,
  onAdd,
  onEdit,
  onReset,
  onDelete,
}: Props) {
  const defaultValues = {
    depCode: "",
    depNm: "",
    depTelno: "",
    brNm: "",
    brCode: "",
    depFaxno: "",
    depWebFaxno: "",
    useYn: "",
    viewSeq: 0,
  };
  const {
    register,
    handleSubmit,
    setError,
    reset,
    setValue,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<ITeam>({
    defaultValues: defaultValues,
  });

  useEffect(() => {
    console.log("initialValues", initialValues);
    reset(initialValues ?? defaultValues);
  }, [initialValues, reset]);

  return (
    <form className="h-full flex flex-col ml-2">
      <div className="p-2 mb-2 bg-white rounded flex-grow">
        <div className="grid grid-cols-1 gap-y-1">
          <CodeSelect
            label="• 부서(지점)"
            horizontal
            codeType="NBR"
            placeholder={"* 선택"}
            {...register("brCode")}
          />
          <TextInput
            label="팀(파트)코드"
            type="text"
            horizontal
            placeholder=""
            {...register("depCode")}
          />
          <TextInput
            label="팀(파트)명"
            type="text"
            horizontal
            placeholder=""
            {...register("depNm")}
          />
          <TextInput
            label="보기순서"
            type="text"
            horizontal
            placeholder=""
            {...register("viewSeq")}
          />
          <TextInput
            label="사용여부"
            type="text"
            horizontal
            placeholder=""
            {...register("useYn")}
          />
          <TextInput
            label="대표번호"
            type="text"
            horizontal
            placeholder=""
            {...register("depTelno")}
          />
          <TextInput
            label="팩스번호"
            type="text"
            horizontal
            placeholder=""
            {...register("depFaxno")}
          />
          <TextInput
            label="WEB팩스번호"
            type="text"
            horizontal
            placeholder=""
            {...register("depWebFaxno")}
          />
          <TextInput
            label="인사시스템코드"
            type="text"
            horizontal
            placeholder=""
          />
          <TextInput
            label="중앙회팀파트코드"
            type="text"
            horizontal
            placeholder=""
          />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex gap-2">
          <Button
            text="초기화"
            onClick={() => {
              reset(defaultValues);
              onReset && onReset();
            }}
            className="w-12 btn-primary btn-sm"
          />
          <Button
            text="등록"
            onClick={() => {
              if (onAdd) {
                handleSubmit(onAdd)();
              }
            }}
            className="w-12 btn-primary btn-sm"
            disabled
          />
          <Button
            text="수정"
            onClick={() => {
              if (onEdit) {
                handleSubmit(onEdit)();
              }
            }}
            className="w-12 btn-primary btn-sm"
          />
          <Button
            text="삭제"
            onClick={() => {
              onDelete && onDelete();
            }}
            className="w-12 btn-primary btn-sm"
          />
          <Button text="보기순서변경" className="w-20 btn-primary btn-sm" />
        </div>
      </div>
    </form>
  );
}

export default FooterForm;
