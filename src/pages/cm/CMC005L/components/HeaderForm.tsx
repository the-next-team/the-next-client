import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import DateInput from "../../../../components/form/DateInput";

type FormValues = {
  date: string;
};

type Props = {
  onExcelClick: () => void;
  onSubmit: (data: FormValues) => void;
};

function HeaderForm({ onSubmit, onExcelClick }: Props) {
  const {
    register,
    control,
    handleSubmit,
    setError,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      date: new Date().toISOString().split("T")[0],
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-2 bg-white rounded">
      <div className="flex">
        <div className="grid flex-grow grid-cols-2 pr-14 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 ">
          <DateInput
            label="• 기준일자"
            horizontal
            name="date"
            placeholder=""
            essential
            control={control}
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

            <Button text="저장" className="w-12 btn-primary btn-sm" />
            <Button
              onClick={onExcelClick}
              text="엑셀"
              className="w-12 btn-primary btn-sm"
            />
            <Button text="추가" className="w-12 btn-primary btn-sm" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default HeaderForm;
