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
        <div className="grid grid-cols-2 gap-3 pr-10 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          <CodeSelect
            label="• 수행주기"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            name="h"
            id="h"
            register={register}
          />
          <TextInput
            label="• 프로그램명"
            horizontal
            type="text"
            placeholder=""
            name="i"
            id="i"
            register={register}
          />
          <CodeSelect
            label="• 사용여부"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            name="j"
            id="j"
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
