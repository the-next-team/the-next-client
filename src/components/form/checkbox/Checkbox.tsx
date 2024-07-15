type Props = {
  label?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
  onChange?: () => void;
  register?: any;
};

const Checkbox = ({
  label,
  disabled = false,
  name,
  register,
  className,
  onChange,
  ...props
}: Props) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <input
        id={label}
        type="checkbox"
        disabled={disabled}
        className={`${className} ${
          disabled
            ? "cursor-default bg-gray-100 checked:bg-gray-400"
            : "cursor-pointer bg-custom-gray-100 checked:bg-custom-black"
        } select-none duration-100 peer appearance-none w-4 h-4 checked:bg-ck-white rounded-sm bg-no-repeat bg-center`}
        {...props}
      />
      {label && (
        <label
          htmlFor={label}
          {...register(name)}
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

export default Checkbox;
