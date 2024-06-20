type Props = {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  options: Array<{ label: string; value: string }>;
  onChange?: () => void;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({
  label,
  disabled = false,
  placeholder = "",
  className,
  options,
  onChange,
  ...rest
}: Props) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={label}
          className={`${
            disabled ? "cursor-default" : "cursor-pointer"
          } duration-100`}
        >
          <p className="text-sm select-none">{label}</p>
        </label>
      )}
      <select
        id={label}
        disabled={disabled}
        className={`${className} ${
          disabled ? "cursor-default" : "cursor-pointer"
        } select-none bg-transparent ring-1 outline-none duration-100 rounded-[2px] text-sm ring-custom-gray-100 focus:ring-custom-black`}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled hidden selected>
            {placeholder}
          </option>
        )}
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
