import { usePopupOpener } from "../../hooks/usePopupOpener";
import Button from "./Button";

type Props = {
  popupId?: string;
  path: string;
  width: number;
  height: number;
  children: React.ReactNode;
  params?: Record<string, string>;
  onResult?: (data: any) => void;
  onClose?: () => void;
};

function PopupButton({
  popupId,
  path,
  width,
  height,
  params,
  children,
  onResult,
  onClose,
}: Props) {
  const { openPopup } = usePopupOpener();

  const handleOpenPopup = () => {
    openPopup({
      popupId,
      path,
      width,
      params,
      height,
      onResult,
      onClose,
    });
  };

  return (
    <Button className="btn-sm btn-primary" onClick={handleOpenPopup}>
      {children}
    </Button>
  );
}

export default PopupButton;
