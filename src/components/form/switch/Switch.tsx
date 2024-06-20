type Props = {
  label?: string;
  value: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: () => void;
};

const Switch = ({ label, value, disabled = false, onChange }: Props) => {
  return (
    <div>
      <label
        htmlFor={label}
        className={`${
          disabled ? "cursor-default" : "cursor-pointer"
        } flex items-center justify-center gap-2`}
      >
        <div className="inline-flex">
          <input
            id={label}
            type="checkbox"
            className="hidden"
            disabled={disabled}
            onChange={onChange}
          />
          <div
            className={`relative inline-flex h-5 w-10 items-center rounded-full transition-all duration-150 ${
              disabled
                ? value
                  ? "bg-gray-500"
                  : "bg-gray-200"
                : value
                ? "bg-custom-black"
                : "bg-custom-gray-200"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-all duration-150 ${
                value ? "translate-x-[22px]" : "translate-x-0.5"
              }`}
            />
          </div>
        </div>
        {label && (
          <div>
            <p
              className={`text-sm select-none ${
                disabled
                  ? value
                    ? "text-gray-500"
                    : "text-gray-200"
                  : value
                  ? "text-custom-black"
                  : "text-custom-gray-200"
              }`}
            >
              {label}
            </p>
          </div>
        )}
      </label>
    </div>
  );
};

export default Switch;
