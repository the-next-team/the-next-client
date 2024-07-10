import { ChangeEvent, useState } from "react";
import Card from "../../../components/card/Card";
import Select from "../../../components/form/Select";
import Textarea from "../../../components/form/Textarea";
import TextInput from "../../../components/form/TextInput";

const InputPage = () => {
  const errorMessage = {
    message: "This is invalid state",
  };
  const [value, setValue] = useState("");

  const handleFormatter = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <div className="grid gap-5 xl:grid-cols-2">
      <Card title="Basic Inputs">
        <div className="space-y-3">
          <TextInput
            label="Project Name*"
            id="pn"
            type="text"
            placeholder="Management dashboard "
          />
          <TextInput
            label="Readonly Input"
            id="pn2"
            readonly
            type="text"
            placeholder="You can't update me :P"
          />
          <TextInput
            label=" Disabled Input"
            id="pn3"
            placeholder=" Disabled Input"
            disabled
            type="text"
          />
          <Textarea
            label="Project description"
            id="pn4"
            placeholder="Type here"
          />
          <Select
            options={["Option 1", "Option 2", "Option 3"]}
            label="Select Option's"
          />
        </div>
      </Card>
      <div className="space-y-5 ">
        <Card title="Sizing Options">
          <div className="space-y-2">
            <TextInput
              label="Large"
              id="largesize"
              type="text"
              placeholder="Large Input"
              className="h-[52px]"
            />
            <TextInput
              label="Default"
              id="defaultsize"
              type="text"
              placeholder="Default Input"
            />
            <TextInput
              label="Small"
              id="smallsize"
              type="text"
              placeholder="Small Input"
              className="h-[32px] text-sm"
            />
          </div>
        </Card>
        <Card title="Sizing Options">
          <div className="space-y-2">
            <TextInput
              label="Large"
              id="largesize2"
              type="text"
              placeholder="Large Input"
              className="h-[52px]"
              horizontal
            />
            <TextInput
              label="Default"
              id="defaultsize2"
              type="text"
              placeholder="Default Input"
              horizontal
            />
            <TextInput
              label="Small"
              id="smallsize2"
              type="text"
              placeholder="Small Input"
              className="h-[32px] text-sm"
              horizontal
            />
          </div>
        </Card>
      </div>
      <Card title="States">
        <div className="space-y-3">
          <TextInput
            label="Valid State"
            id="ValidState"
            type="text"
            placeholder="Valid"
            validate="This is valid state."
          />
          <TextInput
            label="Invalid State"
            id="InvalidState"
            type="text"
            placeholder="Invalid"
            error={errorMessage}
          />
        </div>
      </Card>
      <Card
        title="Input Validation States With Tootltips
  "
      >
        <div className="space-y-3">
          <TextInput
            label="Valid State"
            id="ValidState"
            type="text"
            placeholder="Valid"
            validate="This is valid state."
            msgTooltip
          />
          <TextInput
            label="Invalid State"
            id="InvalidState"
            type="text"
            placeholder="Invalid"
            error={errorMessage}
            msgTooltip
          />
        </div>
      </Card>
      <div className="col-span-1 xl:col-span-2">
        <Card title=" Formatter Support">
          <TextInput
            label="Text input with formatter (on input)"
            id="formatter-pn"
            type="text"
            placeholder="Enter your name"
            description="We will convert your name to lowercase instantly"
            onChange={handleFormatter}
          />
          {value.toLowerCase()}
        </Card>
      </div>
    </div>
  );
};

export default InputPage;
