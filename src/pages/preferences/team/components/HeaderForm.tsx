import { useForm } from "react-hook-form";
import Button from "../../../../components/button/ExampleButton";
import Select from "../../../../components/form/Select";

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
      a: "지점1",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <div className="flex justify-end mb-2">
        <div className="flex gap-2">
          <Button
            onClick={() => {
              handleSubmit(onSubmit)();
            }}
            text="조회"
            className="btn-primary btn-sm"
          />
          <Button
            onClick={() => {
              reset({});
            }}
            text="초기화"
            className="btn-primary btn-sm"
          />
          <Button text="엑셀" className="btn-primary btn-sm" />
        </div>
      </div>
      <div className="mb-2 ">
        <div className="grid grid-cols-2 gap-3 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
          <Select
            label="부서(지점)"
            horizontal
            options={[
              {
                value: "지점1",
                label: "지점1",
              },
              {
                value: "지점2",
                label: "지점2",
              },
              {
                value: "지점3",
                label: "지점3",
              },
            ]}
            name="a"
            register={register}
          />
        </div>
      </div>
    </form>
  );
}

export default HeaderForm;