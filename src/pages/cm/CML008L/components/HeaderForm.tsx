import { useForm } from "react-hook-form";
import Button from "../../../../components/button/ExampleButton";
import CodeSelect from "../../../../components/form/CodeSelect";
import TextInput from "../../../../components/form/TextInput";

type FormValues = {
  h: string;
  i: string;
  j: string;
};

type Props = {
  onSubmit: (data: FormValues) => void;
};

function HeaderForm({ onSubmit }: Props) {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      h: "",
      i: "",
      j: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-2 bg-white rounded">
      <div className="flex">
        <div className="grid grid-cols-2 pr-10 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          <TextInput
            label="• 출력일"
            horizontal
            type="text"
            placeholder="2024-06-13"
            name="i"
            id="i"
            register={register}
          />
          <TextInput
            label="• 출력자ID"
            horizontal
            type="text"
            placeholder=""
            name="i"
            id="i"
            register={register}
          />
          <CodeSelect
            label="• 부서"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            name="j"
            id="j"
            register={register}
          />
          <TextInput
            label="• 출력자명"
            horizontal
            type="text"
            placeholder=""
            name="i"
            id="i"
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
                handleSubmit(onSubmit)();
              }}
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
