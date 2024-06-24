import { Icon } from "@iconify/react";

type Props = {
  text?: string;
  icon?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  text,
  icon,
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
        } rounded-[2px] px-1 flex items-center gap-1`}
        {...props}
      >
        <p className="text-sm select-none">{text}</p>
        {icon && <Icon icon={icon} className="" />}
      </button>
    </div>
  );
};

export default Button;
