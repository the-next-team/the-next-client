import { useState } from "react";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";
import Icon from "../../../../../components/icons/Icon";

const fruits: {value: string, label: string, isFixed?: boolean}[] = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "orange", label: "Orange" },
    { value: "apple", label: "Apple" },
  ];
  const formatGroupLabel = (data: any) => (
    <div className="flex items-center justify-between">
      <strong>
        <span className="text-2xl font-semibold capitalize ">{data.label}</span>
      </strong>
      <span>{data.options.length}</span>
    </div>
  );
  const groupedOptions = [
    {
      label: "Ice Creams",
      options: [
        { value: "vanilla", label: "Vanilla" },
        { value: "Dark Chocolate", label: "Dark Chocolate" },
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "salted-caramel", label: "Salted Caramel" },
      ],
    },
    {
      label: "Snacks",
      options: [
        { value: "Pizza", label: "Pizza" },
        { value: "Burger", label: "Burger" },
        { value: "Pasta", label: "Pasta" },
        { value: "Pretzel", label: "Pretzel" },
        { value: "Popcorn", label: "Popcorn" },
      ],
    },
  ];
  const animatedComponents = makeAnimated();

  // Fixed Options Select

  const styles = {
    multiValue: (base: any, state: any) => {
      return state.data.isFixed ? { ...base, opacity: "0.5" } : base;
    },
    multiValueLabel: (base: any, state: any) => {
      return state.data.isFixed
        ? { ...base, color: "#626262", paddingRight: 6 }
        : base;
    },
    multiValueRemove: (base: any, state: any) => {
      return state.data.isFixed ? { ...base, display: "none" } : base;
    },
    option: (provided: any, state: any) => ({
      ...provided,
      fontSize: "14px",
    }),
  };
  const orderOptions = (values: any) => {
    if (values.length > 0)
      return values
        .filter((v: any) => v.isFixed)
        .concat(values.filter((v: any) => !v.isFixed));
  };

  const iconOptions = [
    {
      label: "Social Media",
      options: [
        {
          value: "facebook",
          label: "Facebook",
          icon: "fe:facebook",
        },
        {
          value: "twitter",
          label: "Twitter",
          icon: "fe:twitter",
        },
        {
          value: "linkedin",
          label: "Linkedin",
          icon: "fe:linkedin",
        },
        {
          value: "github",
          label: "Github",
          icon: "fe:github",
        },
        {
          value: "instagram",
          label: "Instagram",
          icon: "fe:instagram",
        },
        {
          value: "dribbble",
          label: "Dribbble",
          icon: "fe:dribbble",
        },
        {
          value: "gitlab",
          label: "Gitlab",
          icon: "fe:gitlab",
        },
      ],
    },
    {
      label: "File Types",
      options: [
        { value: "pdf", label: "PDF", icon: "fe:file" },
        { value: "txt", label: "txt", icon: "fe:file-word" },
        { value: "image", label: "Image", icon: "fe:file-image" },
      ],
    },
    {
      label: "Others",
      options: [
        { value: "figma", label: "Figma", icon: "logos:figma" },
        { value: "chrome", label: "Chrome", icon: "logos:chrome" },
        { value: "safari", label: "Safari", icon: "fe:globe" },
        { value: "slack", label: "Slack", icon: "logos:slack-icon" },
        { value: "youtube", label: "Youtube", icon: "fe:youtube" },
      ],
    },
  ];
  const OptionComponent = ({ data, ...props }: any) => {
    //const Icon = data.icon;

    return (
      <components.Option {...props}>
        <Icon icon={data.icon} />
        {data.label}
      </components.Option>
    );
  };

  // start component
  const OptionsSelect = () => {
    const [fixedValue, setFixedValue] = useState(
      orderOptions([fruits[0], fruits[1]])
    );
    const fixedOnChange = (value: any, { action, prevInputValue }: any) => {
      switch (action) {
        case "remove-value":
        case "pop-value":
          if (prevInputValue) {
            return;
          }
          break;
        case "clear":
          value = fruits.filter((v) => v.isFixed);
          break;
        default:
          break;
      }

      value = orderOptions(value);
      setFixedValue(value);
    };

    return (
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div>
          <label className="form-label" htmlFor="mul_1">
            Multi Select..
          </label>
          <Select
            isClearable={false}
            defaultValue={[fruits[2], fruits[3]]}
            styles={styles}
            isMulti
            name="colors"
            options={fruits}
            className="react-select"
            classNamePrefix="select"
            id="mul_1"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="mul_2">
            Grouped Select
          </label>
          <Select
            isClearable={false}
            defaultValue={fruits[1]}
            options={groupedOptions}
            styles={styles}
            formatGroupLabel={formatGroupLabel}
            className="react-select"
            classNamePrefix="select"
            id="mul_2"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="animated_1">
            Animated Select
          </label>
          <Select
            isClearable={false}
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={[fruits[4], fruits[5]]}
            isMulti
            options={fruits}
            styles={styles}
            className="react-select"
            classNamePrefix="select"
            id="animated_1"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="dis_s">
            Fixed Options Select
          </label>
          <Select
            isClearable={false}
            value={fixedValue}
            styles={styles}
            isMulti
            onChange={fixedOnChange}
            name="furits"
            className="react-select"
            classNamePrefix="select"
            options={fruits}
            id="dis_s"
          />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <label className="form-label" htmlFor="icon_s">
            Icons
          </label>
          <Select
            options={iconOptions}
            className="react-select"
            classNamePrefix="select"
            components={{
              Option: OptionComponent,
            }}
            styles={styles}
            id="icon_s"
          />
        </div>
      </div>
    );
  };

  export default OptionsSelect;