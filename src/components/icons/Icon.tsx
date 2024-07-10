import { Icon as IConify, IconifyIcon } from "@iconify/react";

type Props = {
  width?: string | number;
  rotate?: 0 | 1 | 2 | 3;
  hFlip?: boolean;
  icon: IconifyIcon | string;
  className?: string | undefined;
  vFlip?: boolean | undefined;
};

function Icon({
  width,
  rotate = 0,
  hFlip = false,
  icon,
  className,
  vFlip = false,
}: Props) {
  return (
    <IConify
      width={width}
      rotate={rotate}
      hFlip={hFlip}
      icon={icon}
      className={className}
      vFlip={vFlip}
    />
  );
}

export default Icon;
