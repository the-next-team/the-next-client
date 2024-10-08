import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import TextInput from "../../../../components/form/TextInput";
import Checkbox from "../../../../components/checkbox/Checkbox";
import CheckboxGroup from "../../../../components/checkbox/CheckboxGroup";
import DateInput from "../../../../components/form/DateInput";

type FormValues = {
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
  g: string;
  h: string;
  i: string;
  j: string;
  checkbox: Array<string>;
};

type Props = {
  initialValues?: FormValues;
  onSubmit: (data: FormValues) => void;
};

function FooterForm({ initialValues, onSubmit }: Props) {
  const {
    register,
    control,
    handleSubmit,
    watch,
    setError,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      a: "",
      checkbox: [],
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="p-2 mb-2 bg-white rounded">
        <div className="grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
          <TextInput
            label="화면그룹코드"
            type="text"
            horizontal
            name="a"
            placeholder=""
            register={register}
          />
          <TextInput
            label="화면그룹명"
            type="text"
            horizontal
            placeholder=""
            name="b"
            register={register}
          />
          <CheckboxGroup horizontal label="사용">
            <Checkbox
              label=""
              checked={watch("checkbox").includes("chk1")}
              value="chk1"
              {...register("checkbox")}
            />
          </CheckboxGroup>
          <DateInput
            label="등록일시"
            horizontal
            name="date"
            dateFormat="Y-m-d H:i"
            enableTime
            control={control}
          />
          <div className="col-span-4">
            <TextInput
              label="권한설정"
              type="text"
              horizontal
              placeholder=""
              className="h-12 mb-1"
              name="e"
              register={register}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex gap-2">
          <Button text="초기화" className="w-12 btn-primary btn-sm" />
          <Button text="등록" className="w-12 btn-primary btn-sm" />
          <Button text="수정" className="w-12 btn-primary btn-sm" disabled />
          <Button text="삭제" className="w-12 btn-primary btn-sm" disabled />
        </div>
      </div>
    </form>
  );
}

export default FooterForm;
