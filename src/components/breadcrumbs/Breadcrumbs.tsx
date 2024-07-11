import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useMenu from "../../hooks/useMenu";
import useTabMenu from "../../hooks/useTabMenu";
import { FavMenu, favMenuState } from "../../states/sidebar/sidebarAtom";

function Breadcrumbs() {
  const { activeTab } = useTabMenu();
  const { menus } = useMenu();
  const [favMenu, setFavMenu] = useRecoilState<FavMenu>(favMenuState);

  const [title, setTitle] = useState<Array<string>>([]);

  useEffect(() => {
    setTitle(findTitle(activeTab));
  }, [activeTab]);

  const findTitle = (link: string) => {
    let title: Array<string> = [];
    if (link) {
      menus.forEach((item) => {
        if (item.items) {
          item.items.forEach((i) => {
            if (i.items) {
              i.items.forEach((m) => {
                if (m.url === link) {
                  title.push(item.name);
                  title.push(i.name ?? "");
                  title.push(m.name);
                }
              });
            } else if (i.url === link) {
              title.push(item.name);
              title.push(i.name ?? "");
            }
          });
        } else if (item.url === link) {
          title.push(item.name);
        }
      });
    }
    return title;
  };

  return (
    <>
      {title.length ? (
        <div className="flex gap-2 px-4 py-1 mb-2 bg-white rounded">
          <ul className="flex items-center space-x-1 text-sm">
            {title.map((item, i) => (
              <li
                key={i}
                className={`flex gap-1 ${
                  title.length - 1 !== i
                    ? "text-custom-gray-200 font-medium"
                    : "text-custom-black font-bold"
                }
                `}
              >
                <p className="text-xs">{item}</p>
                {title.length - 1 !== i && (
                  <Icon
                    icon="heroicons:chevron-right"
                    width={16}
                    color="#8a8a8a"
                  />
                )}
              </li>
            ))}
            {/* 즐겨찾기 */}
            <li>
              <Icon
                icon="heroicons:star-20-solid"
                width={16}
                className="cursor-pointer"
                color={`${
                  favMenu.find((item) => item.href === activeTab)
                    ? "#FFCE30"
                    : "#e2e2e2"
                }`}
                onClick={() => {
                  if (favMenu.every((f) => f.href !== activeTab)) {
                    // 즐겨찾기 추가
                    setFavMenu(() => [
                      ...favMenu,
                      { name: title.at(-1) ?? "", href: activeTab },
                    ]);
                  } else {
                    // 즐겨찾기 삭제
                    const newFavs = favMenu.filter((f) => f.href !== activeTab);
                    setFavMenu(newFavs);
                  }
                }}
              />
            </li>
          </ul>
          <div className="flex items-center gap-1">
            <p className="text-xs">한줄 설명 입니다.</p>
            <Icon
              icon="heroicons:question-mark-circle"
              width={14}
              className="cursor-pointer"
              onClick={() => {}}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Breadcrumbs;
