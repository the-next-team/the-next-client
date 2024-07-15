import { useForm } from "react-hook-form";
import CodeSelect from "../../../components/form/CodeSelect";
import TextInput from "../../../components/form/TextInput";
import Button from "../../../components/button/ExampleButton";
import Select from "../../../components/form/Select";

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
        <div className="pr-10 grid grid-cols-2 gap-3 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
          <TextInput
            label="• 코드명"
            type="text"
            horizontal
            name="b"
            id="b"
            placeholder=""
            register={register}
          />
          <TextInput
            label="• 대분류코드"
            type="text"
            horizontal
            name="b"
            id="b"
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
            id="Y/N"
            name="Y/N"
            register={register}
          />
          <CodeSelect
            label="• 주요코드여부"
            horizontal
            codeType="TST"
            placeholder={"* 전체"}
            essential
            name="a"
            id="a"
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
                reset({});
              }}
              text="초기화"
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
