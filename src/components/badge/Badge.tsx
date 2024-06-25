import { Icon } from "@iconify/react";

type Props = {
  text?: string;
  icon?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Badge = ({
  text,
  icon,
  className = "text-white bg-custom-black",
  ...props
}: Props) => {
  return (
    <div
      className={`${className} flex items-center gap-1 rounded-[2px] px-1`}
      {...props}
    >
      <p className="text-sm select-none">{text}</p>
      {icon && <Icon icon={icon} className="" />}
    </div>
  );
};

export default Badge;
