import { useForm } from "react-hook-form";
import Radio from "../../../../components/form/Radio";
import RadioGroup from "../../../../components/form/RadioGroup";
import TextInput from "../../../../components/form/TextInput";
import Button from "../../../../components/button/Button";

type Props = {
  onSubmit: () => void;
};

function Address({ onSubmit }: Props) {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: { r1: "r1-1", r2: "r2-1", r3: "r3-1", r4: "r4-1" },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-4 m-2 bg-white rounded">
        <div className="mb-2">
          <RadioGroup horizontal label={"주소구분"}>
            <Radio
              label="지번주소"
              value="r1-1"
              checked={watch("r1") === "r1-1"}
              {...register("r1")}
            />
            <Radio
              label="도로명주소"
              value="r1-2"
              checked={watch("r1") === "r1-2"}
              {...register("r1")}
            />
          </RadioGroup>
        </div>
        <div className="flex gap-2 mb-2">
          <TextInput
            label="도로명"
            type="text"
            className=""
            horizontal
            placeholder=""
            name="b"
            register={register}
          />
          <Button
            onClick={() => {
              handleSubmit(onSubmit)();
            }}
            text="조회"
            className="w-12 btn-primary btn-sm"
          />
        </div>
        <div className="flex gap-2">
          <TextInput
            label="상세주소"
            type="text"
            horizontal
            placeholder=""
            name="b"
            register={register}
          />
          <Button
            onClick={() => {
              handleSubmit(onSubmit)();
            }}
            text="검증"
            className="w-12 btn-primary btn-sm"
          />
        </div>
      </div>
    </form>
  );
}

export default Address;
