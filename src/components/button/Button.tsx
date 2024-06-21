type Props = {
  text?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  text,
  disabled = false,
  className = "text-white bg-custom-black",
  ...props
}: Props) => {
  return (
    <div className="">
      <button
        disabled={disabled}
        className={`${className} ${
          disabled ? "cursor-default bg-gray-200" : "cursor-pointer"
        } rounded-[2px] px-1`}
        {...props}
      >
        <p className="text-sm select-none">{text}</p>
      </button>
    </div>
  );
};

export default Button;
