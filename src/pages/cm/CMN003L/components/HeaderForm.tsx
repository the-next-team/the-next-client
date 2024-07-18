import { useForm } from "react-hook-form";
import CodeSelect from "../../../../components/form/CodeSelect";
import TextInput from "../../../../components/form/TextInput";
import Button from "../../../../components/button/Button";

type FormValues = {
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
  g: string;
};

type Props = {
  onSubmit: (data: FormValues) => void;
};

function HeaderForm({ onSubmit }: Props) {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      a: "",
      b: "",
      c: "",
      d: "",
      e: "",
      f: "",
      g: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-2 bg-white rounded">
      <div className="flex">
        <div className="grid grid-cols-2 pr-14 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
          <TextInput
            label="• 처리일자"
            type="text"
            horizontal
            placeholder="2024-06-13"
            name="a"
            id="a"
            register={register}
          />
          <CodeSelect
            label="• 호스트명"
            horizontal
            codeType="TST"
            placeholder={"전체"}
            name="b"
            id="b"
            register={register}
          />
          <CodeSelect
            label="• 대상전문"
            horizontal
            codeType="TST"
            placeholder={"전체"}
            name="c"
            id="c"
            register={register}
          />
          <TextInput
            label="• 주민번호"
            type="text"
            horizontal
            placeholder=""
            name="d"
            id="d"
            register={register}
          />
          <TextInput
            label="• 요청ID"
            type="text"
            horizontal
            placeholder=""
            name="e"
            id="e"
            register={register}
          />
          <TextInput
            label="• 처리자"
            type="text"
            horizontal
            placeholder=""
            name="f"
            id="f"
            register={register}
          />
          <CodeSelect
            label="• 상태"
            horizontal
            codeType="TST"
            placeholder={"전체"}
            name="g"
            id="g"
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
