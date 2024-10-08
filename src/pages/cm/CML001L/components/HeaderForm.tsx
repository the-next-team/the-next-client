import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import CodeSelect from "../../../../components/form/CodeSelect";
import TextInput from "../../../../components/form/TextInput";
import DateInput from "../../../../components/form/DateInput";

type FormValues = {
  h: string;
  i: string;
  j: string;
};

type Props = {
  onExcelClick: () => void;
  onSubmit: (data: FormValues) => void;
};

function HeaderForm({ onSubmit, onExcelClick }: Props) {
  const { register, handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      h: "",
      i: "",
      j: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-2 bg-white rounded">
      <div className="flex">
        <div className="grid grid-cols-2 pr-10 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-y-1">
          <DateInput
            label="• 기준일"
            horizontal
            name="date"
            control={control}
            dateFormat="Y-m-d"
          />
          <TextInput
            label="• 사용자ID"
            horizontal
            type="text"
            placeholder=""
            name="i"
            register={register}
          />
          <CodeSelect
            label="• 로그구분"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            name="j"
            register={register}
          />
          <TextInput
            label="• IP 주소"
            horizontal
            type="text"
            placeholder=""
            name="i"
            register={register}
          />
          <CodeSelect
            label="• 성공여부"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            name="j"
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
