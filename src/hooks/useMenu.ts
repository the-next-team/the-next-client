import { useRecoilState } from "recoil";
import { IMenu, MenuService } from "../api/services/menuService";
import { storageKey } from "../constants";
import { menuState } from "../states/menu/menuAtom";

function useMenu() {
  const [menus, _setMenu] = useRecoilState(menuState);

  const fetchMenu = async () => {
    try {
      const response = await MenuService.findAll();
      setMenu(response.data);
    } catch (error) {}
  };

  const setMenu = (data: IMenu[]) => {
    localStorage.setItem(storageKey.menu, JSON.stringify(data));
    _setMenu(data);
  };

  const findMenu = (data: IMenu): IMenu | undefined => {
    return menus.find((f) => f.code === data.code);
  };

  return {
    menus,
    fetchMenu,
  };
}

export default useMenu;
