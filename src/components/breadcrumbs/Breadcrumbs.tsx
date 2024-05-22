import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import useTabMenu from "../../hooks/useTabMenu";
import { FavMenuType, favMenuTypeState } from "../../states/layout/layoutAtom";

function Breadcrumbs({ activeTab }: { activeTab: string }) {
  const [favMenu, setFavMenu] = useRecoilState<FavMenuType>(favMenuTypeState);
  const { findTitle } = useTabMenu();

  const [isHide, setIsHide] = useState<boolean | undefined>(false);
  const [title, setTitle] = useState<Array<string>>([]);

  useEffect(() => {
    setTitle(findTitle(activeTab));
  }, [activeTab]);

  return (
    <>
      {title.length && !isHide ? (
        <div className="flex space-x-3">
          <ul className="flex items-center space-x-2 text-sm">
            <li className="flex gap-1 text-primary-500">
              <NavLink to="/home/dashboard" className="text-lg">
                <Icon icon="heroicons-outline:home" />
              </NavLink>
              <span className="text-lg text-secondary-500">
                <Icon icon="heroicons:chevron-right" />
              </span>
            </li>
            {title.map((item, i) => (
              <li
                key={i}
                className={`flex gap-1 ${
                  title.length - 1 !== i ? "text-slate-400" : "text-primary-500"
                }
                `}
              >
                <button type="button" className="capitalize">
                  {item}
                </button>
                {title.length - 1 !== i && (
                  <span className="text-lg text-secondary-500">
                    <Icon icon="heroicons:chevron-right" />
                  </span>
                )}
              </li>
            ))}
            <span
              className="relative text-slate-400 cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center"
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
            >
              {favMenu.find((item) => item.href === activeTab) ? (
                <Icon
                  icon="heroicons:star-20-solid"
                  className="text-xl leading-[1] cursor-pointer text-[#FFCE30]"
                />
              ) : (
                <Icon
                  icon="heroicons:star"
                  className="text-xl leading-[1] cursor-pointer opacity-40 dark:text-white"
                />
              )}
            </span>
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Breadcrumbs;
