import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import CodeSelect from "../../../../components/form/CodeSelect";
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
      a: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-2 bg-white rounded">
      <div className="flex">
        <div className="grid flex-grow grid-cols-2 pr-10 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
          <CodeSelect
            label="• 중개사명"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            essential
            name="a"
            id="a"
            register={register}
          />
          <CodeSelect
            label="• 관리부점"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            essential
            name="a"
            id="a"
            register={register}
          />{" "}
          <Select
            label="• 사용여부"
            placeholder={"* 전체"}
            horizontal
            options={[
              {
                value: "Y",
                label: "Y",
              },
              {
                value: "N",
                label: "N",
              },
            ]}
            id="Y/N"
            name="Y/N"
            register={register}
          />
        </div>
        <div>
          <div className="flex gap-2">
            <Button
              onClick={() => {
                handleSubmit(onSubmit)();
              }}
              text="조회"
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
