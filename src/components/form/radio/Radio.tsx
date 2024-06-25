type Props = {
  label?: string;
  disabled?: boolean;
  className?: string;
  onChange?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Radio = ({
  label,
  disabled = false,
  className,
  onChange,
  ...props
}: Props) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <input
        id={label}
        type="radio"
        disabled={disabled}
        className={`${className} ${
          disabled
            ? "cursor-default ring-gray-400 border-gray-200 checked:border-gray-400"
            : "cursor-pointer ring-custom-black border-gray-400 checked:border-custom-black"
        } select-none duration-100 peer appearance-none rounded-full border bg-white p-2 checked:ring-[6px] checked:ring-offset-2 checked:ring-inset`}
        {...props}
      />
      {label && (
        <label
          htmlFor={label}
          className={`${
            disabled
              ? "cursor-default peer-checked:text-gray-400 text-gray-300"
              : "cursor-pointer peer-checked:text-custom-black text-custom-gray-200"
          } duration-100`}
        >
          <p className="text-sm select-none">{label}</p>
        </label>
      )}
    </div>
  );
};

export default Radio;
