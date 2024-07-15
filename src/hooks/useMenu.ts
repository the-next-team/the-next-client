import { useRecoilState, useResetRecoilState } from "recoil";
import { IMenu, MenuService } from "../api/services/menuService";
import { storageKey } from "../constants";
import { menuSelectedState, menuState } from "../states/menu/menuAtom";
import { activeSubmenuState } from "../states/sidebar/sidebarAtom";
import { tabMenuState } from "../states/tabMenu/tabMenuAtom";
import { v4 as uuidv4 } from "uuid";

function useMenu() {
  const [menus, _setMenu] = useRecoilState(menuState);
  const [selectedMenu, setSelectedMenu] = useRecoilState(menuSelectedState);
  const activeSubmenuReset = useResetRecoilState(activeSubmenuState);
  const tabMenuReset = useResetRecoilState(tabMenuState);

  const fetchMenu = async () => {
    try {
      const response = await MenuService.findAll();
      const data = sortMenuByPriority(response.data);
      // 임시 경로 세팅
      data.forEach((item) => {
        item.items?.forEach((i) => {
          if (!i?.url) {
            i.url = uuidv4();
          }
          i.items?.forEach((m) => {
            if (m.programId === "HMM001L") {
              // =================== [HOME] ===================
              // 메인 -> 메인화면
              m.url = "dashboard/Dashboard";
            } else if (m.programId === "CMC021U") {
              // =================== [시스템] ===================
              // 코드관리 -> nTree기본코드
              m.url =
                "system/codeManagement/nTreeDefaultCode/NTreeDefaultCodePage";
            } else if (m.programId === "CMC001U") {
              // 코드관리 -> 공통코드
              m.url = "system/codeManagement/commonCode/CommonCodePage";
            } else if (m.programId === "CMC020L") {
              // 코드관리 -> 심사거절사유코드
              m.url =
                "system/codeManagement/rejectionReason/RejectionReasonPage";
            } else if (m.programId === "CMC009U") {
              // 코드관리 -> 코드매핑(vs채널플랫폼)
              m.url =
                "system/codeManagement/mappingVsChannelPlatform/MappingVsChannelPlatformPage";
            } else if (m.programId === "CMC010U") {
              // 코드관리 -> 표준산업분류(국가)
              m.url =
                "system/codeManagement/nationalSICCode/NationalSICCodePage";
            } else if (m.programId === "CMC007U") {
              // 기준관리(중앙회) -> 부서(지점)
              m.url = "system/standardManagement/branchOffice/BranchOfficePage";
            } else if (m.programId === "CMU040U") {
              // 기준관리(중앙회) -> 이기종사번
              m.url =
                "system/standardManagement/interoperableSystem/InteroperableSystemPage";
            } else if (m.programId === "CMC008U") {
              // 기준관리(중앙회) -> 코드매핑(vs중앙회직업코드)
              m.url = "system/standardManagement/jobCode/JobCodePage";
            } else if (m.programId === "CMC005L") {
              // 기준관리(중앙회) -> 영업일
              m.url = "system/standardManagement/businessDay/BusinessDayPage";
            } else if (m.programId === "CMM001U") {
              // 메뉴권한 -> 메뉴관리
              m.url = "preferences/menu/MenuManagement";
            } else if (m.programId === "CMM002U") {
              // 메뉴권한 -> 화면관리
              m.url = "screen/ScreenManagement";
            } else if (m.programId === "CMM005U") {
              // 메뉴권한 -> 권한관리
              m.url = "system/menuPermissions/PermissionManagement";
            } else if (m.programId === "CMC002U") {
              // 사용자 -> 팀(파트)
              m.url = "preferences/team/Team";
            } else if (m.programId === "CMU001U") {
              // 사용자 -> 사용자
              m.url = "preferences/user/User";
            } else if (m.programId === "CMN003L") {
              // 전문관리 -> 전문처리이력
              m.url = "system/message/MessageListPage";
            }
          });
        });
      });
      setMenu(data);
      // 초기화
      activeSubmenuReset();
      tabMenuReset();
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
      return items
        .map((item) => {
          // 하위 items가 있으면 재귀적으로 정렬
          if (item.items) {
            item.items = sortItems(item.items);
          }
          return item;
        })
        .sort((a, b) => a.priority - b.priority);
    };

    // 최상위 메뉴도 정렬
    return menu
      .map((menuItem) => {
        if (menuItem.items) {
          menuItem.items = sortItems(menuItem.items);
        }
        return menuItem;
      })
      .sort((a, b) => a.priority - b.priority);
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
