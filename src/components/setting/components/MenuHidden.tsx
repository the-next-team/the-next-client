import useMenuHidden from "../../../hooks/layout/useMenuHidden";
import Switch from "../../form/Switch";

function MenuHidden() {
  const [menuHidden, setMenuHidden] = useMenuHidden();
  return (
    <div className="flex justify-between ">
      <div className="text-base font-normal text-slate-600 dark:text-slate-300">
        메뉴 숨김
      </div>
      <Switch
        value={menuHidden}
        onChange={() => setMenuHidden(!menuHidden)}
        id="semi_nav_tools3"
      />
    </div>
  );
}

export default MenuHidden;
