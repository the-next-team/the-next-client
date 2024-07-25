import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import TextInput from "../../../../components/form/TextInput";

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
  initialValues?: FormValues;
  onSubmit: (data: FormValues) => void;
};

function FooterForm({ initialValues, onSubmit }: Props) {
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
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="p-2 mt-2 bg-white rounded">
        <div className="grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
          <div className="col-span-2">
            <TextInput
              label="프로그램ID"
              type="text"
              horizontal
              name="a"
              placeholder=""
              register={register}
            />
          </div>
          <div className="col-span-2">
            <TextInput
              label="프로그램명"
              type="text"
              horizontal
              name="a"
              placeholder=""
              register={register}
            />
          </div>
          <TextInput
            label="처리일"
            type="text"
            horizontal
            placeholder=""
            name="c"
            register={register}
          />
          <TextInput
            label="처리영업일"
            type="text"
            horizontal
            placeholder=""
            name="c"
            register={register}
          />
          <TextInput
            label="파라메터"
            type="text"
            horizontal
            placeholder=""
            name="c"
            register={register}
          />
          <TextInput
            label="처리건수"
            type="text"
            horizontal
            placeholder=""
            name="c"
            register={register}
          />
          <TextInput
            label="시작일시"
            type="text"
            horizontal
            placeholder=""
            name="c"
            register={register}
          />
          <TextInput
            label="종료일시"
            type="text"
            horizontal
            placeholder=""
            name="c"
            register={register}
          />
          <TextInput
            label="소요시간(초)"
            type="text"
            horizontal
            placeholder=""
            name="c"
            register={register}
          />
          <TextInput
            label="처리상태"
            type="text"
            horizontal
            placeholder=""
            name="c"
            register={register}
          />
          <TextInput
            label="종료키"
            type="text"
            horizontal
            placeholder=""
            name="c"
            register={register}
          />
          <TextInput
            label="종료시점검수"
            type="text"
            horizontal
            placeholder=""
            name="c"
            register={register}
          />
          <TextInput
            label="등록자"
            type="text"
            horizontal
            placeholder=""
            name="c"
            register={register}
          />
          <TextInput
            label="등록일시"
            type="text"
            horizontal
            placeholder=""
            name="c"
            register={register}
          />
          <TextInput
            label="오류일시"
            type="text"
            horizontal
            placeholder=""
            name="c"
            register={register}
          />
          <TextInput
            label="오류번호"
            type="text"
            horizontal
            placeholder=""
            name="c"
            register={register}
          />
          <div className="col-span-2">
            <TextInput
              label="오류메시지"
              type="text"
              horizontal
              placeholder=""
              name="c"
              register={register}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2 my-2">
        <Button text="초기화" className="w-12 btn-primary btn-sm" />
        <Button text="등록" className="w-12 btn-primary btn-sm" />
        <Button text="수정" className="w-12 btn-primary btn-sm" disabled />
        <Button text="삭제" className="w-12 btn-primary btn-sm" />
        <Button text="순서저장" className="w-24 btn-primary btn-sm" disabled />
      </div>
    </form>
  );
}

export default FooterForm;
