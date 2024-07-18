import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import CodeSelect from "../../../../components/form/CodeSelect";
import TextInput from "../../../../components/form/TextInput";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center mb-1 space-x-2 text-sm font-medium text-slate-900">
        <span className="h-[6px] w-[6px] bg-slate-900 rounded-full inline-block" />
        <span>가수금입금</span>
      </div>
      <div className="flex p-2 bg-white rounded">
        <div>
          <div className="grid grid-cols-2 pr-10 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
            <CodeSelect
              essential
              label="• 코드번호"
              horizontal
              codeType="TST"
              placeholder={"* 전체"}
              name="a"
              id="a"
              register={register}
            />
            <TextInput
              essential
              label="• 고객번호"
              type="text"
              horizontal
              name="b"
              id="b"
              placeholder=""
              register={register}
            />
            <TextInput
              essential
              label="• 관련계좌번호"
              type="text"
              horizontal
              name="c"
              id="c"
              placeholder=""
              register={register}
            />
            <TextInput
              essential
              label="• 기산일자"
              type="text"
              horizontal
              name="d"
              id="d"
              placeholder=""
              register={register}
            />
            <TextInput
              essential
              label="• 가상사번"
              type="text"
              horizontal
              name="e"
              id="e"
              placeholder=""
              register={register}
            />
            <TextInput
              essential
              label="• 대체금액"
              type="text"
              horizontal
              name="f"
              id="f"
              placeholder=""
              register={register}
            />
            <div className="col-span-3">
              <TextInput
                essential
                label="• 거래적요"
                type="text"
                horizontal
                name="g"
                id="g"
                placeholder=""
                register={register}
              />
            </div>
          </div>
          <hr className="mx-10 my-4" />
          <div className="grid grid-cols-2 pr-10 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
            <CodeSelect
              label="• 계좌번호"
              horizontal
              codeType="TST"
              placeholder={"* 전체"}
              name="h"
              id="h"
              register={register}
            />
            <TextInput
              label="• 거래연결번호"
              type="text"
              horizontal
              name="i"
              id="i"
              placeholder=""
              register={register}
            />
            <TextInput
              label="• 처리메시지"
              type="text"
              horizontal
              name="j"
              id="j"
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

export default HeaderForm;
