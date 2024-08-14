import useSidebar from "../../../hooks/layout/useSidebar";
import Switch from "../../form/Switch";

function MenuClose() {
  const [collapsed, setMenuCollapsed] = useSidebar();
  return (
    <div className="flex justify-between ">
      <div className="text-base font-normal text-slate-600 dark:text-slate-300">
        메뉴 확장
      </div>
      <Switch
        value={collapsed}
        onChange={() => setMenuCollapsed(!collapsed)}
        id="semi_nav_tools2"
      />
    </div>
  );
}

export default MenuClose;
