import { useRecoilState } from "recoil";
import { IMenu, MenuService } from "../api/services/menuService";
import { storageKey } from "../constants";
import { menuSelectedState, menuState } from "../states/menu/menuAtom";

function useMenu() {
  const [menus, _setMenu] = useRecoilState(menuState);
  const [selectedMenu, setSelectedMenu] = useRecoilState(menuSelectedState);

  const fetchMenu = async () => {
    try {
      const response = await MenuService.findAll();
      const data = sortMenuByPriority(response.data)
      setMenu(data);
      if (data.length > 0) {
        setSelectedMenu(data[0]);
      }
    } catch (error) {}
  };

  const setMenu = (data: IMenu[]) => {
    localStorage.setItem(storageKey.menu, JSON.stringify(data));
    _setMenu(data);
  };

  const findMenu = (data: IMenu): IMenu | undefined => {
    return menus.find((f) => f.code === data.code);
  };

  // 주어진 메뉴 데이터를 priority 별로 정렬하는 함수
const sortMenuByPriority = (menu: IMenu[]): IMenu[] => {
    // 재귀적으로 정렬하는 함수
    const sortItems = (items: IMenu[]): IMenu[] => {
      return items.map(item => {
        // 하위 items가 있으면 재귀적으로 정렬
        if (item.items) {
          item.items = sortItems(item.items);
        }
        return item;
      }).sort((a, b) => a.priority - b.priority);
    };

    // 최상위 메뉴도 정렬
    return menu.map(menuItem => {
      if (menuItem.items) {
        menuItem.items = sortItems(menuItem.items);
      }
      return menuItem;
    }).sort((a, b) => a.priority - b.priority);
  };

  return {
    menus,
    selectedMenu,
    setSelectedMenu,
    fetchMenu,
    findMenu,
  };
}

export default useMenu;
