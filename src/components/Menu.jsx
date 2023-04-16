import styled from "styled-components";
import MENUS from "../data";
import { useState } from "react";
import { useCallback } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false); // false
  const handleMenuStatus = useCallback((status, click = false) => {
    if (click && !status) return;
    setIsOpen(status);
  }, []);
  return (
    <Container>
      {MENUS.map((menu) => (
        <MenuContainer
          onMouseDown={() => handleMenuStatus(!isOpen, true)} // 필요 없나..?
          onMouseEnter={() => handleMenuStatus(true)}
          onMouseLeave={() => handleMenuStatus(false)}
        >
          <MenuItem>{menu.name}</MenuItem>
          {isOpen && (
            <ChildMenusContainer>
              {menu.childMenus.map((child) => (
                <MenuItem>{child.name}</MenuItem>
              ))}
            </ChildMenusContainer>
          )}
        </MenuContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, auto));
`;
const MenuContainer = styled.div`
  width: 100%;
  background-color: navy;
  color: grey;
`;
const ChildMenusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const MenuItem = styled.div`
  height: 5vh;
  text-align: center;
  line-height: 5vh;
`;
export default Menu;
