import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import CodeSelect from "../../../../components/form/CodeSelect";
import TextInput from "../../../../components/form/TextInput";

type FormValues = {
  a: string;
};

type Props = {
  onExcelClick: () => void;
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
        <div className="grid flex-grow grid-cols-2 pr-10 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
          <TextInput
            label="• 이기종사번"
            type="text"
            horizontal
            name="b"
            id="b"
            placeholder=""
            register={register}
          />

          <CodeSelect
            label="• 부서(지점)"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            essential
            name="a"
            id="a"
            register={register}
          />
          <CodeSelect
            label="• 용도"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            essential
            name="a"
            id="a"
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
