import { ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { MenuNav } from "../../components/Menu/MenuNav";
import { BurgerMenu } from "./BurgerMenu";

export const Menu = (): ReactElement => {
  return (
    <div>
      <MenuNav />
    </div>
  );
};
