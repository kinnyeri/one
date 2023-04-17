import styled from "styled-components";
import MENUS from "../data";
import { useState } from "react";
import { useCallback } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false); // false
  const [selected, setSelected] = useState(-1);

  const handleMenuStatus = useCallback((status, index = -1) => {
    setSelected(index);
    setIsOpen(status);
  }, []);
  return (
    <Container>
      {MENUS.map((menu, index) => (
        <MenuContainer
          key={menu.id}
          onMouseEnter={() => handleMenuStatus(true, index)}
          onMouseLeave={() => handleMenuStatus(false)}
        >
          <MenuItem>{menu.name}</MenuItem>
          {isOpen && (
            <ChildMenusContainer
              style={{
                borderTopColor: isOpen && selected == index && "red",
              }}
            >
              {menu.childMenus.map((child) => (
                <MenuItem key={child.id}>{child.name}</MenuItem>
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
