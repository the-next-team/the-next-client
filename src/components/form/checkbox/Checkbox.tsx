type Props = {
  label?: string;
  disabled?: boolean;
  className?: string;
  onChange?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  label,
  disabled = false,
  className,
  onChange,
  ...rest
}: Props) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <input
        id={label}
        type="checkbox"
        disabled={disabled}
        className={`${className} disabled:cursor-default cursor-pointer select-none duration-100 peer appearance-none w-4 h-4 checked:bg-ck-white checked:bg-custom-black rounded-sm bg-no-repeat bg-center bg-custom-gray-100`}
        {...rest}
      />
      {label && (
        <label
          htmlFor={label}
          className="duration-100 cursor-pointer peer-disabled:cursor-default peer-checked:text-custom-black text-custom-gray-200"
        >
          <p className="text-sm select-none">{label}</p>
        </label>
      )}
    </div>
  );
};

export default Checkbox;
