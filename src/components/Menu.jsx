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

  // useEffect(()=>{
  //   if(status === "LOGOUT")
  // },[status]);

  return (
    <Container>
      {menus.reduce((cur, menu, index) => {
        if (menu.displayStatus === "SHOW")
          return [
            ...cur,
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
                  {menu.childMenus.reduce((chidCur, child) => {
                    if (child.displayStatus === "SHOW")
                      return [
                        ...chidCur,
                        <MenuItem key={child.id}>{child.name}</MenuItem>,
                      ];
                    else return chidCur;
                  }, [])}
                </ChildMenusContainer>
              )}
            </MenuContainer>,
          ];
        else return cur;
      }, [])}
    </Container>
  );
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
