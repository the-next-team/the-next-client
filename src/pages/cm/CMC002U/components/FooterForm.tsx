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
    <form className="">
      <div className="p-2 mb-2 bg-white rounded">
        <div className="grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-y-1">
          <CodeSelect
            label="• 부서(지점)"
            horizontal
            codeType="NBR"
            placeholder={"* 선택"}
            name="brCode"
            id="brCode"
            register={register}
          />
          <TextInput
            label="팀(파트)코드"
            type="text"
            horizontal
            name="depCode"
            id="depCode"
            placeholder=""
            register={register}
          />
          <TextInput
            label="팀(파트)명"
            type="text"
            horizontal
            placeholder=""
            name="depNm"
            id="depNm"
            register={register}
          />
          <TextInput
            label="보기순서"
            type="text"
            horizontal
            placeholder=""
            name="viewSeq"
            id="viewSeq"
            register={register}
          />
          <TextInput
            label="사용여부"
            type="text"
            horizontal
            placeholder=""
            name="useYn"
            id="useYn"
            register={register}
          />
          <TextInput
            label="대표번호"
            type="text"
            horizontal
            placeholder=""
            name="depTelno"
            id="depTelno"
            register={register}
          />
          <TextInput
            label="팩스번호"
            type="text"
            horizontal
            placeholder=""
            name="depFaxno"
            id="depFaxno"
            register={register}
          />
          <TextInput
            label="WEB팩스번호"
            type="text"
            horizontal
            placeholder=""
            name="depWebFaxno"
            id="depWebFaxno"
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
