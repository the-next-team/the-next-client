import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import CodeSelect from "../../../../components/form/CodeSelect";
import Select from "../../../../components/form/Select";
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
        <div className="grid flex-grow grid-cols-2 pr-10 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-y-1">
          <CodeSelect
            label="• 중개사명"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            essential
            name="a"
            register={register}
          />
          <TextInput
            label="• 조직코드"
            type="text"
            horizontal
            name="b"
            placeholder=""
            register={register}
          />

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
            name="Y/N"
            register={register}
          />
          <TextInput
            label="• 모집인Id"
            type="text"
            horizontal
            name="b"
            placeholder=""
            register={register}
          />
          <TextInput
            label="• 모집인명"
            type="text"
            horizontal
            name="b"
            placeholder=""
            register={register}
          />
        </div>
        <div>
          <div className="flex gap-2">
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
      </div>
    </form>
  );
}

export default HeaderForm;
