import { useState } from "react";
import useMenu from "../../../hooks/useMenu";

function TopMenu() {
  const { menus, selectedMenu, setSelectedMenu } = useMenu();
  const [selected, setSelected] = useState<null | number>(null);
  const [isHovering, setIsHovering] = useState(false);
  const testMenu = [
    {
      name: "고객관리",
    },
    {
      name: "사업관리",
    },
    {
      name: "신청관리",
    },
    {
      name: "계정관리",
    },
    {
      name: "DB정보관리",
    },
    {
      name: "신용심사",
    },
  ];

  return (
    <>
      <div
        className="flex gap-6 py-[10px]"
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        {menus.map((menu, index) => (
          <button
            key={index}
            className={`${
              selectedMenu?.name === menu.name
                ? "text-primary-800 border-b border-primary-800"
                : "text-white"
            } text-sm break-keep`}
            onClick={() => setSelectedMenu(menu)}
          >
            <p>{menu.name}</p>
          </button>
        ))}
        <div
          className={`${
            isHovering
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } duration-300 absolute top-[41px] bg-white shadow-lg rounded-b-[10px] z-20 py-2 px-6 space-x-6 items-center`}
        >
          {testMenu.map((menu, index) => (
            <button
              key={index}
              className={`${
                selected === index ? "text-primary-800" : "text-custom-black"
              } text-sm break-keep font-medium`}
              onClick={() => setSelected(index)}
            >
              <p>{menu.name}</p>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default TopMenu;
