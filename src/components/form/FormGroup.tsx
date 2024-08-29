import { v4 as uuidv4 } from "uuid";

type Props = {
  id?: string;
  classGroup?: string;
  classLabel?: string;
  label?: string;
  valid?: string;
  invalid?: string;
  description?: string;
  children: React.ReactNode;
};

const FormGroup: React.FC<Props> = ({
  id = uuidv4(),
  classGroup = "",
  classLabel = "text-xs",
  label = "",
  valid = "",
  invalid = "",
  description = "",
  children,
}) => {
  return (
    <div className={`${classGroup} flex flex-col w-full gap-1`}>
      {label && (
        <label htmlFor={id} className={`${classLabel} cursor-pointer`}>
          <p className="text-xs font-medium text-custom-black">{label}</p>
        </label>
      )}
      <div className="flex flex-col w-full gap-1">
        {children && children}
        <div className={`${classLabel} flex flex-col gap-1`}>
          {valid && <p className="text-danger-500">{valid}</p>}
          {invalid && <p className="text-success-500">{invalid}</p>}
          {description && <p className="text-slate-500">{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default FormGroup;
