type Props = {
  label?: string;
  disabled?: boolean;
  validate?: string;
  error?: string;
  icon?: React.ReactNode;
  className?: string;
  description?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function CustomInput({
  label,
  disabled,
  validate,
  error,
  icon,
  className,
  description,
  ...props
}: Props) {
  return (
    <div>
      {label && (
        <label htmlFor={label} className="cursor-pointer">
          <p className="mb-1.5 text-sm font-medium text-custom-gray-300">
            {label}
          </p>
        </label>
      )}
      <div className="relative flex items-center h-9">
        <div className="absolute left-0 w-full h-full">
          <input
            id={label}
            disabled={disabled}
            className={`${className} ${disabled ? "bg-custom-blue-100" : "bg-transparent"} 
			${validate ? "ring-green-400 focus:ring-[1.5px]" : error ? " ring-red-400 focus:ring-[1.5px]" : "ring-custom-gray-100 focus:ring-custom-gray-300"} 
		  w-full h-full text-custom-black rounded-[2px] outline-none px-3 duration-100 ring-1`}
            {...props}
          />
        </div>
      </div>
      {validate ? (
        <p className="mt-1.5 text-sm text-green-400">{validate}</p>
      ) : error ? (
        <p className="mt-1.5 text-sm text-red-400">{error}</p>
      ) : description ? (
        <p className="mt-1.5 text-sm text-custom-gray-200">{description}</p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CustomInput;
