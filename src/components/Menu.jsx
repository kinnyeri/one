import styled from "styled-components";
import MENUS from "../data";
import { useState } from "react";
import { useCallback } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false); // false
  const [selected, setSelected] = useState(-1);

  const handleMenuStatus = useCallback((status, click = false, index = -1) => {
    if (click && !status) return;
    setSelected(index);
    setIsOpen(status);
  }, []);
  return (
    <Container>
      {MENUS.map((menu, index) => (
        <MenuContainer
          onMouseDown={() => handleMenuStatus(!isOpen, true)} // 필요 없나..?
          onMouseEnter={() => handleMenuStatus(true, false, index)}
          onMouseLeave={() => handleMenuStatus(false)}
        >
          <MenuItem>{menu.name}</MenuItem>
          {isOpen && (
            <ChildMenusContainer
              style={{
                borderTop: isOpen && selected == index && "1px solid red",
              }}
            >
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
`;
const MenuItem = styled.div`
  height: 5vh;
  text-align: center;
  line-height: 5vh;
`;
export default Menu;
