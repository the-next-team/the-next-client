/**
 * 메뉴관리 페이지
 * 시스템 > 메뉴권한 > 메뉴관리
 * CMM001U
 */
import { useState } from "react";
// import Card from "../../components/card/Card";
import { ITopMenu } from "../../../api/services/menuService";
import Button from "../../../components/button/Button";
import ItemTable from "../../cm/CMM001U/components/ItemTable";
import SubFooterForm from "../../cm/CMM001U/components/SubFooterForm";
import SystemFooterForm from "../../cm/CMM001U/components/SystemFooterForm";
import CodeItemTable from "./components/CodeItemTable";
import { Icon } from "@iconify/react";
// import Table from "./components/Table";

export interface IMenu {
  menuCd: string;
  menuName: string;
  sqnc: number;
  desc: string;
  useYn: "Y" | "N";
  items?: Array<IMenu>;
}

function CMM001U() {
  const [menuCounter, setMenuCounter] = useState<number>(6);
  const [menu, setMenu] = useState<IMenu | null>();
  const [exampleMenu, setExampleMenu] = useState<Array<IMenu>>([
    {
      menuCd: "001",
      menuName: "Top-1",
      sqnc: 0,
      desc: "설명입니다.",
      useYn: "Y",
      items: [
        {
          menuCd: "003",
          menuName: "Top-1-1",
          sqnc: 2,
          desc: "설명입니다.",
          useYn: "N",
          items: [],
        },
        {
          menuCd: "004",
          menuName: "Top-1-2",
          sqnc: 3,
          desc: "설명입니다.",
          useYn: "Y",
          items: [
            {
              menuCd: "005",
              menuName: "Top-1-2-1",
              sqnc: 2,
              desc: "설명입니다.",
              useYn: "N",
              items: [],
            },
          ],
        },
        {
          menuCd: "006",
          menuName: "Top-1-3",
          sqnc: 2,
          desc: "설명입니다.",
          useYn: "N",
          items: [],
        },
      ],
    },
    {
      menuCd: "002",
      menuName: "Top-2",
      sqnc: 1,
      desc: "설명입니다.",
      useYn: "Y",
      items: [],
    },
  ]);

  // 메뉴 추가
  const addMenu = (
    menuList: IMenu[],
    parentMenuCd: string | null,
    newMenu: IMenu
  ): IMenu[] => {
    if (parentMenuCd === null) {
      // 선택된 메뉴가 없을 경우, 최상위에 추가
      return [...menuList, newMenu];
    }
    return menuList.map((menu) => {
      if (menu.menuCd === parentMenuCd) {
        const updatedItems = menu.items ? [...menu.items, newMenu] : [newMenu];
        return { ...menu, items: updatedItems };
      }
      if (menu.items && menu.items.length > 0) {
        return { ...menu, items: addMenu(menu.items, parentMenuCd, newMenu) };
      }
      return menu;
    });
  };

  // 메뉴 수정
  const updateMenu = (menuList: IMenu[], updatedItem: IMenu): IMenu[] => {
    return menuList.map((menu) => {
      if (menu.menuCd === updatedItem.menuCd) {
        return { ...menu, ...updatedItem };
      }
      if (menu.items && menu.items.length > 0) {
        return { ...menu, items: updateMenu(menu.items, updatedItem) };
      }
      return menu;
    });
  };

  // 메뉴 삭제
  const deleteMenu = (menuList: IMenu[], targetMenuCd: string): IMenu[] => {
    return menuList
      .filter((menu) => menu.menuCd !== targetMenuCd)
      .map((menu) => ({
        ...menu,
        items: menu.items ? deleteMenu(menu.items, targetMenuCd) : [],
      }));
  };

  const MenuList = ({ item, depth }: { item: IMenu; depth: number }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
      <div className={`${depth > 1 ? "pl-6" : ""} flex flex-col gap-1`}>
        <div
          className={`cursor-pointer flex items-center p-1 gap-1 ${menu?.menuCd === item.menuCd ? "bg-primary-100 border border-primary-500" : ""}`}
          onClick={(e) => {
            setMenu(item);
            // setIsExpanded((prev) => !prev);
          }}
        >
          {isExpanded || !item.items?.length ? (
            <Icon icon="heroicons:folder" width={20} />
          ) : (
            <Icon icon="heroicons:folder-minus" width={20} />
          )}
          <div>
            <p>{item.menuName}</p>
          </div>
        </div>
        {isExpanded &&
          item.items?.map((item) => (
            <MenuList key={item.menuCd} item={item} depth={depth + 1} />
          ))}
      </div>
    );
  };

  return (
    <div className="relative flex flex-col h-full gap-2">
      <div className="flex h-full gap-3">
        <div className="w-[300px] flex justify-between flex-col bg-white p-2 rounded">
          <div>
            <div className="flex items-center mb-2 space-x-2 text-sm font-medium text-slate-900">
              <span className="h-[6px] w-[6px] bg-slate-900 rounded-full inline-block" />
              <span>메뉴목록</span>
            </div>
            <div className="select-none">
              {exampleMenu.map((item, i) => (
                <MenuList key={i} item={item} depth={1} />
              ))}
            </div>
          </div>
          <div className="flex self-end gap-2">
            <Button
              text="추가"
              size="normal"
              onClick={() => {
                const newMenu: IMenu = {
                  menuCd: String(menuCounter),
                  menuName: `New Menu ${menuCounter}`,
                  sqnc: 0,
                  desc: "새로운 메뉴 설명입니다.",
                  useYn: "Y",
                  items: [],
                };
                setExampleMenu(
                  addMenu(exampleMenu, menu ? menu.menuCd : null, newMenu)
                );
                setMenuCounter(menuCounter + 1);
                // 메뉴 추가시 조건
                // * 3depth까지만 추가되도록
                // * Top/Left 메뉴 구분주기
              }}
            />
            <Button
              text="삭제"
              size="normal"
              onClick={() => {
                if (menu) {
                  setExampleMenu(deleteMenu(exampleMenu, menu.menuCd));
                  setMenu(null); // 메뉴 삭제 후 선택된 메뉴 초기화
                } else {
                  alert("삭제할 메뉴를 선택하세요.");
                }
              }}
            />
          </div>
        </div>
        {menu && (
          <div className="flex-1">
            <SubFooterForm
              menu={menu}
              onSubmit={(data) => {
                setExampleMenu(updateMenu(exampleMenu, data));
                alert("저장되었습니다.");
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CMM001U;
