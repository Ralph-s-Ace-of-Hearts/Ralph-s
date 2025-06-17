import React, { useState } from "react";
import Menu from "./Menu";
import Admin from "./Admin";

const MenuManager = () => {
  const [menu, setMenu] = useState({
    appetizers: [],
    entrees: [],
    drinks: [],
    desserts: [],
  });

  const addMenuItem = (category, item) => {
    setMenu((prevMenu) => ({
      ...prevMenu,
      [category]: [...prevMenu[category], item],
    }));
  };

  return (
    <div>
      <Admin addMenuItem={addMenuItem} />
      <Menu menu={menu} />
    </div>
  );
};

export default MenuManager;