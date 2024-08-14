import Icon from "../icons/Icon";

type Props = {
  className?: string | undefined;
  label?: string | null;
  icon?: string;
  children?: React.ReactNode;
};

const Badge = ({
  className = "text-white bg-danger-500",
  label,
  icon,
  children,
}: Props) => {
  return (
    <span className={`badge ${className}`}>
      {!children && (
        <span className="inline-flex items-center">
          {icon && (
            <span className="inline-block mr-1 rtl:ml-1">
              <Icon icon={icon} />
            </span>
          )}
          {label}
        </span>
      )}
      {children && <span className="inline-flex items-center">{children}</span>}
    </span>
  );
};

export default Badge;
