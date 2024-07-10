import useMenu from "../../../hooks/useMenu";

function TopMenu() {
  const { menus, selectedMenu, setSelectedMenu } = useMenu();

  return (
    <div className="flex justify-start flex-grow gap-6">
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
    </div>
  );
}

export default TopMenu;
