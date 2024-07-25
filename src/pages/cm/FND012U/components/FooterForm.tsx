import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import CodeSelect from "../../../../components/form/CodeSelect";
import TextInput from "../../../../components/form/TextInput";

type FormValues = {
  a1: string;
  b1: string;
  c1: string;
  d1: string;
  e1: string;
  f1: string;
  g1: string;
  h1: string;
  i1: string;
  j1: string;
};
type Props = {
  onSubmit: (data: FormValues) => void;
};

function FooterForm({ onSubmit }: Props) {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      a1: "",
      b1: "",
      c1: "",
      d1: "",
      e1: "",
      f1: "",
      g1: "",
      h1: "",
      i1: "",
      j1: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center mb-1 space-x-2 text-sm font-medium text-slate-900">
        <span className="h-[6px] w-[6px] bg-slate-900 rounded-full inline-block" />
        <span>가수금지급</span>
      </div>
      <div className="flex p-2 bg-white rounded">
        <div>
          <div className="grid grid-cols-2 pr-10 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
            <CodeSelect
              essential
              label="• 가수금코드"
              horizontal
              codeType="TST"
              placeholder={"* 전체"}
              name="a1"
              register={register}
            />
            <TextInput
              essential
              label="• 계좌번호"
              type="text"
              horizontal
              name="b1"
              placeholder=""
              register={register}
            />
            <TextInput
              essential
              label="• 대체금액"
              type="text"
              horizontal
              name="c1"
              placeholder=""
              register={register}
            />
            <TextInput
              essential
              label="• 기산일자"
              type="text"
              horizontal
              name="d1"
              placeholder=""
              register={register}
            />
            <TextInput
              essential
              label="• 가상사번"
              type="text"
              horizontal
              name="e1"
              placeholder=""
              register={register}
            />
            <TextInput
              essential
              label="• 연동계좌번호"
              type="text"
              horizontal
              name="f1"
              placeholder=""
              register={register}
            />
            <div className="col-span-3">
              <TextInput
                essential
                label="• 거래적요"
                type="text"
                horizontal
                name="g1"
                placeholder=""
                register={register}
              />
            </div>
          </div>
          <hr className="mx-10 my-4" />
          <div className="grid grid-cols-2 pr-10 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
            <CodeSelect
              label="• 거래후잔액"
              horizontal
              codeType="TST"
              placeholder={"* 전체"}
              name="h1"
              register={register}
            />
            <TextInput
              label="• 거래연결번호"
              type="text"
              horizontal
              name="i1"
              placeholder=""
              register={register}
            />
            <TextInput
              label="• 처리메시지"
              type="text"
              horizontal
              name="j1"
              placeholder=""
              register={register}
            />
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex justify-end gap-2">
            <Button
              onClick={() => {
                handleSubmit(onSubmit)();
              }}
              text="전송"
              className="w-12 btn-primary btn-sm"
            />
            <Button
              onClick={() => {
                handleSubmit(onSubmit)();
              }}
              text="초기화"
              className="w-12 btn-primary btn-sm"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default FooterForm;
