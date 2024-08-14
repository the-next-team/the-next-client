import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import CodeSelect from "../../../../components/form/CodeSelect";
import TextInput from "../../../../components/form/TextInput";
import DateInput from "../../../../components/form/DateInput";

type FormValues = {
  a: string;
  b: string;
  c: string;
};

type Props = {
  onSubmit: (data: FormValues) => void;
};

function HeaderForm({ onSubmit }: Props) {
  const { register, handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      a: "",
      b: "",
      c: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-2 bg-white rounded">
      <div className="flex">
        <div className="grid grid-cols-2 pr-10 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          <DateInput
            label="• 기준일"
            horizontal
            dateFormat="Y-m-d"
            name="date"
            control={control}
          />
          <CodeSelect
            label="• 처리상태"
            horizontal
            codeType="TST"
            placeholder={"전체"}
            name="b"
            register={register}
          />
          <CodeSelect
            label="• 조회구분"
            horizontal
            codeType="TST"
            placeholder={"전체처리결과"}
            name="c"
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
          </div>
        </div>
      </div>
    </form>
  );
}

export default HeaderForm;
