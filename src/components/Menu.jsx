import styled from "styled-components";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import { useSelector } from "react-redux";

const Menu = () => {
  const menus = useSelector((state) => state.menu);
  const status = useSelector((state) => state.status);
  const [isOpen, setIsOpen] = useState(false); // false
  const [selected, setSelected] = useState(-1);

  const handleMenuStatus = useCallback((status, index = -1) => {
    setSelected(index);
    setIsOpen(status);
  }, []);

  const makeChildMenu = useCallback((childMenus) => {
    let res = [];
    for (
      let now = childMenus.head.next;
      now != null;
      now = childMenus[now].next
    ) {
      const child = childMenus[now];
      if (child.displayStatus === "HIDE") continue;
      res.push(<MenuItem key={now}>{child.name}</MenuItem>);
    }
    return res;
  }, []);

  const makeMenu = useCallback(() => {
    let res = [];
    for (let now = menus.head.next; now != null; now = menus[now].next) {
      const menu = menus[now];
      if (menu.displayStatus === "HIDE") continue;
      res.push(
        <MenuContainer
          key={now}
          onMouseEnter={() => handleMenuStatus(true, now)}
          onMouseLeave={() => handleMenuStatus(false)}
        >
          <MenuItem>{menu.name}</MenuItem>
          {isOpen && (
            <ChildMenusContainer
              style={{
                borderTopColor: isOpen && selected == now && "red",
              }}
            >
              {makeChildMenu(menu.childMenus)}
            </ChildMenusContainer>
          )}
        </MenuContainer>
      );
    }
    return res;
  }, [selected]);

  return <Container>{makeMenu()}</Container>;
};

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10%, auto));
`;
const MenuContainer = styled.div`
  background-color: navy;
  color: grey;
`;
const ChildMenusContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid navy;
`;
const MenuItem = styled.div`
  height: 5vh;
  text-align: center;
  line-height: 5vh;
  &:hover {
    color: white;
  }
`;
export default Menu;
