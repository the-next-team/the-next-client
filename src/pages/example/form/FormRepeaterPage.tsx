import { useFieldArray, useForm } from "react-hook-form";
import Button from "../../../components/button/Button";
import Card from "../../../components/card/Card";
import TextInput from "../../../components/form/TextInput";
import Icon from "../../../components/icons/Icon";

function FormRepeaterPage() {
  const { register, control, handleSubmit, reset, trigger, setError } = useForm(
    {
      defaultValues: {
        test: [{ firstName: "Bill", lastName: "Luo", phone: "123456" }],
      },
    }
  );
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });
  const index = 1;

  return (
    <div>
      <Card
        title="Repeating Forms"
        headerslot={
          <Button
            text="Add new"
            icon="heroicons-outline:plus"
            className="btn-dark"
            onClick={() => append({ firstName: "", lastName: "", phone: "" })}
          />
        }
      >
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          {fields.map((item, index) => (
            <div
              className="grid grid-cols-1 gap-5 mb-5 lg:grid-cols-3 md:grid-cols-2 last:mb-0"
              key={index}
            >
              <TextInput
                label="First Name"
                type="text"
                id={`name${index}`}
                placeholder="First Name"
                register={register}
                name={`test[${index}].firstName`}
              />

              <TextInput
                label="last Name"
                type="text"
                id={`name2${index}`}
                placeholder="Last Name"
                register={register}
                name={`test[${index}].lastName`}
              />

              <div className="flex items-end justify-between space-x-5">
                <div className="flex-1">
                  <TextInput
                    label="Phone"
                    type="text"
                    id={`name3${index}`}
                    placeholder="Phone"
                    register={register}
                    name={`test[${index}].phone`}
                  />
                </div>
                <div className="relative flex-none">
                  <button
                    onClick={() => remove(index)}
                    type="button"
                    className="inline-flex items-center justify-center w-10 h-10 text-lg text-white border rounded bg-danger-500 border-danger-500"
                  >
                    <Icon icon="heroicons-outline:trash" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="ltr:text-right rtl:text-left">
            <Button text="Submit" className="btn-dark" />
          </div>
        </form>
      </Card>
    </div>
  );
}

export default FormRepeaterPage;
