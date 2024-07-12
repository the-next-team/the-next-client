import { useForm } from "react-hook-form";
import Button from "../../../../components/button/ExampleButton";
import CodeSelect from "../../../../components/form/CodeSelect";

type FormValues = {
  a: string;
};

type Props = {
  onSubmit: (data: FormValues) => void;
};

function HeaderForm({ onSubmit }: Props) {
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
        <div className="grid grid-cols-2 gap-3 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
          <CodeSelect
            label="• 부서(지점)"
            horizontal
            codeType="NBR"
            placeholder={"* 선택"}
            essential
            name="a"
            id="a"
            register={register}
          />
        </div>
        <div className="flex-grow">
          <div className="flex justify-end gap-2">
            <Button
              onClick={() => {
                handleSubmit(onSubmit)();
              }}
              text="조회"
              className="w-12 btn-primary btn-sm"
            />
            <Button
              onClick={() => {
                reset({});
              }}
              text="초기화"
              className="w-12 btn-primary btn-sm"
            />
            <Button text="엑셀" className="w-12 btn-primary btn-sm" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default HeaderForm;
