import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import CodeSelect from "../../../../components/form/CodeSelect";

type FormValues = {
  brCode: string;
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
      brCode: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-2 bg-white rounded">
      <div className="flex">
        <div className="flex-grow">
          <div className="grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
            <CodeSelect
              label="• 부서(지점)"
              horizontal
              codeType="NBR"
              placeholder={"* 전체"}
              essential
              name="brCode"
              id="brCode"
              register={register}
            />
          </div>
        </div>
        <div className="">
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
            <Button onClick={onExcelClick} text="엑셀" className="w-12 btn-primary btn-sm" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default HeaderForm;
