import { useDispatch, useSelector } from "react-redux";
import menuData from "./assets/data_body.json";
import { Menu } from "./components";
import "./index.css";
import { addChildMenu, addParentMenu } from "./modules/menu";
import { useCallback } from "react";

function App() {
  console.log(menuData);

  const menus = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const onParentCreate = (parent) => dispatch(addParentMenu(parent));
  const onChildCreate = (child) => dispatch(addChildMenu(child));

  const init = useCallback((data) => {
    console.log("init");
    data.forEach((menu) => {
      onParentCreate({
        id: menu.id,
        name: menu.name,
        description: menu.description,
        path: menu.path,
      });
      // menu.childMenus.forEach((child) => {
      //   onChildCreate({
      //     p_id: menu.id,
      //     id: child.id,
      //     name: child.menu,
      //     description: child.description,
      //     path: child.path,
      //   });
      // });
    });
  }, []);

  console.log(menus);
  // init(menuData);
  // console.log(menus);
  return (
    <div>
      <Menu></Menu>
    </div>
  );
}

export default App;
