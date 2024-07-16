import { useForm } from "react-hook-form";
import CodeSelect from "../../../../components/form/CodeSelect";
import TextInput from "../../../../components/form/TextInput";
import Button from "../../../../components/button/ExampleButton";

type FormValues = {
  a: string;
};

type Props = {
  onSubmit: (data: FormValues) => void;
};

function HeaderForm({ onSubmit }: Props) {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      a: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-2 bg-white rounded">
      <div className="flex">
        <div className="grid grid-cols-2 pr-14 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 ">
          <CodeSelect
            label="• 호스트명"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            name="a"
            id="a"
            register={register}
          />
          <TextInput
            label="• 전문명"
            type="text"
            horizontal
            placeholder=""
            name="b"
            id="b"
            register={register}
          />
          <CodeSelect
            label="• 사용여부"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            name="c"
            id="c"
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
