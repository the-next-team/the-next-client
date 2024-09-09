type Props = {
  label?: any | undefined;
  className?: string | undefined;
  classLabel?: string | undefined;
  children: React.ReactNode;
  horizontal?: boolean;
  error?: any;
  validate?: string | undefined;
} & React.HTMLAttributes<HTMLDivElement>;

function CheckboxGroup({
  label,
  className = "",
  classLabel = "text-xs font-medium text-slate-600 break-words",
  children,
  horizontal = false,
  error,
  validate,
}: Props) {
  return (
    <div
      className={`${error ? "has-error" : ""} ${
        horizontal ? "flex items-start" : "flex flex-col items-end"
      } ${validate ? "is-valid" : ""} ${className}`}
    >
      {label && (
        <label
          className={`block cursor-pointer shrink-0 break-keep ${classLabel} ${
            horizontal ? "ml-2 mr-2 text-right md:w-[100px] w-[60px]" : "mb-1"
          }`}
        >
          {label}
        </label>
      )}
      <div className="flex gap-2 flex-wrap">{children}</div>
    </div>
  );
}

export default CheckboxGroup;
