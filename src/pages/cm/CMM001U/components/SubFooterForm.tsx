import { useForm } from "react-hook-form";
import Button from "../../../../components/button/Button";
import TextInput from "../../../../components/form/TextInput";
import CodeSelect from "../../../../components/form/CodeSelect";
import { IMenu } from "..";
import { useEffect } from "react";
import CheckboxGroup from "../../../../components/checkbox/CheckboxGroup";
import Checkbox from "../../../../components/checkbox/Checkbox";
import RadioGroup from "../../../../components/form/RadioGroup";
import Radio from "../../../../components/form/Radio";

type FormValues = {
  menuName: string;
  sqnc: number;
  menuCd: string;
  useYn: "Y" | "N";
  desc: string;
};

type Props = {
  menu: IMenu | undefined;
  onSubmit: (data: FormValues) => void;
};

function SubFooterForm({ menu, onSubmit }: Props) {
  const { register, watch, setValue, handleSubmit } = useForm<FormValues>({});

  useEffect(() => {
    resetForm();
  }, [menu]);

  const resetForm = () => {
    setValue("menuName", menu?.menuName ?? "");
    setValue("sqnc", menu?.sqnc ?? 0);
    setValue("menuCd", menu?.menuCd ?? "");
    setValue("useYn", menu?.useYn ?? "N");
    setValue("desc", menu?.desc ?? "");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between h-full p-2 bg-white rounded"
    >
      <div>
        <div className="flex items-center mb-2 space-x-2 text-sm font-medium text-slate-900">
          <span className="h-[6px] w-[6px] bg-slate-900 rounded-full inline-block" />
          <span>메뉴수정</span>
        </div>
        <div className="grid grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-y-1">
          <TextInput
            label="메뉴명"
            type="text"
            horizontal
            placeholder=""
            {...register("menuName")}
          />
          <TextInput
            label="보기순서"
            type="text"
            horizontal
            placeholder=""
            {...register("sqnc")}
          />
          <TextInput
            label="메뉴코드"
            type="text"
            horizontal
            placeholder=""
            {...register("menuCd")}
          />
          <RadioGroup horizontal label={"사용여부1"}>
            <Radio
              label="Yes"
              value="Y"
              checked={watch("useYn") === "Y"}
              {...register("useYn")}
            />
            <Radio
              label="No"
              value="N"
              checked={watch("useYn") === "N"}
              {...register("useYn")}
            />
          </RadioGroup>
          <div className="col-span-2">
            <TextInput
              label="메뉴설명"
              type="text"
              horizontal
              className="h-12"
              placeholder=""
              {...register("desc")}
            />
          </div>
        </div>
      </div>
      <div className="flex self-end gap-2">
        <Button
          type="button"
          text="초기화"
          size="normal"
          onClick={() => resetForm()}
        />
        <Button type="submit" text="저장" size="normal" />
      </div>
    </form>
  );
}

export default SubFooterForm;
