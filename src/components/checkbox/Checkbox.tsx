import CheckImage from "../../assets/images/icon/ck-white.svg";

type Props = {
  id?: string;
  disabled?: boolean;
  label?: string;
  value: boolean;
  name?: string;
  onChange?: () => void;
  activeClass?: string;
};

const Checkbox = ({
  id,
  disabled = false,
  label,
  value = false,
  name,
  onChange,
  activeClass = "ring-black-500  bg-slate-900 dark:bg-slate-700 dark:ring-slate-700 ",
}: Props) => {
  return (
    <label
      className={`flex items-center ${
        disabled ? " cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
      htmlFor={id}
    >
      <input
        type="checkbox"
        className="hidden"
        name={name}
        checked={value}
        onChange={onChange}
        id={id}
        disabled={disabled}
      />
      <span
        className={`h-4 w-4 border flex-none border-slate-100 dark:border-slate-800 rounded
        inline-flex mr-3 rtl:ml-3 relative transition-all duration-150
        ${
          value
            ? activeClass + " ring-2 ring-offset-2 dark:ring-offset-slate-800 "
            : "bg-slate-100 dark:bg-slate-600 dark:border-slate-600"
        }
        `}
      >
        {value && (
          <img
            src={CheckImage}
            alt=""
            className="h-[10px] w-[10px] block m-auto"
          />
        )}
      </span>
      <span className="text-sm leading-6 capitalize text-slate-500 dark:text-slate-400">
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
