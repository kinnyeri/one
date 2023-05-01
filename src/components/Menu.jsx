import styled from "styled-components";
import { useState } from "react";
import { useCallback } from "react";
import { useSelector } from "react-redux";

const Menu = () => {
  const menus = useSelector((state) => state.menu); // 메뉴 데이터 상태

  const [isOpen, setIsOpen] = useState(false); // 드롭다운 상태
  const [selected, setSelected] = useState(-1); // 현재 마우스가 위치하고 있는 상태

  const handleMenuStatus = useCallback((status, index = -1) => {
    // 메뉴 드롭다운 및 포커스 상태 변경
    setSelected(index);
    setIsOpen(status);
  }, []);

  const makeChildMenu = useCallback((childMenus) => {
    // sub메뉴 컴포넌트 생성
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
    // 메뉴 컴포넌트 생성
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
  }, [menus, selected]);

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
