import { useDispatch, useSelector } from "react-redux";
import menuData from "./assets/data_body.json";
import { Menu, ButtonBox } from "./components";
import "./index.css";
import { addChildMenu, addParentMenu } from "./modules/menu";

function App() {
  console.log(menuData);

  const menus = useSelector((state) => state.menu);
  console.log(menus);
  console.log(status);
  // init(menuData);
  // console.log(menus);
  return (
    <div>
      <Menu></Menu>
      <ButtonBox></ButtonBox>
    </div>
  );
}

export default App;
