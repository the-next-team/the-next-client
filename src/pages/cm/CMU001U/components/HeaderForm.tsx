import { useForm } from "react-hook-form";
import CodeSelect from "../../../../components/form/CodeSelect";
import TextInput from "../../../../components/form/TextInput";
import Button from "../../../../components/button/Button";

type FormValues = {
  a: string;
};

type Props = {
  onExcelClick?: () => void;
  onSubmit: (data: FormValues) => void;
};

function HeaderForm({ onSubmit, onExcelClick }: Props) {
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
    <form onSubmit={handleSubmit(onSubmit)} className="p-2 bg-white rounded">
      <div className="flex">
        <div className="grid flex-grow grid-cols-2 pr-14 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
          <TextInput
            label="• 사용자명"
            type="text"
            horizontal
            name="a"
            placeholder=""
            essential
            register={register}
          />
          <TextInput
            label="• 사용자ID"
            type="text"
            horizontal
            essential
            name="b"
            placeholder=""
            register={register}
          />
          <CodeSelect
            label="• 상태"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            essential
            name="c"
            register={register}
          />
          <CodeSelect
            label="• 부점"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            essential
            name="d"
            register={register}
          />

          <CodeSelect
            label="• 화면권한"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            essential
            name="e"
            register={register}
          />
          <CodeSelect
            label="• 로그인상태"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            essential
            name="f"
            register={register}
          />
        </div>
        <div>
          <div className="flex justify-end gap-2">
            <Button
              onClick={() => {
                handleSubmit(onSubmit)();
              }}
              text="조회"
              className="w-12 btn-primary btn-sm"
            />

            <Button
              onClick={onExcelClick}
              text="엑셀"
              className="w-12 btn-primary btn-sm"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default HeaderForm;
