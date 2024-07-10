import useSkin from "../../hooks/layout/useSkin";

type Props = {
  className?: string | undefined;
  title?: string | undefined;
  subtitle?: string | undefined;
  noborder?: boolean;
  titleClass?: string | undefined;
  bodyClass?: string | undefined;
  children?: React.ReactNode;
  headerslot?: React.ReactNode;
};

function Card({
  className = "bg-white custom-class dark:bg-slate-800",
  title,
  subtitle,
  noborder = false,
  headerslot,
  titleClass = "custom-class",
  children,
  bodyClass = "p-6",
}: Props) {
  const [skin] = useSkin();

  return (
    <div
      className={`${className} card rounded-md ${
        skin === "bordered"
          ? " border border-slate-200 dark:border-slate-700"
          : "shadow-base"
      }`}
    >
      {(title || subtitle) && (
        <header className={`card-header ${noborder ? "no-border" : ""}`}>
          <div>
            {title && <div className={`card-title ${titleClass}`}>{title}</div>}
            {subtitle && <div className="card-subtitle">{subtitle}</div>}
          </div>
          {headerslot && <div className="card-header-slot">{headerslot}</div>}
        </header>
      )}
      <main className={`card-body ${bodyClass}`}>{children}</main>
    </div>
  );
}

export default Card;
