import { useDispatch, useSelector } from "react-redux";
import { Menu, ButtonBox } from "./components";
import "./index.css";
import { changeDisplayLogout } from "./modules/menu";
import { useEffect } from "react";

function App() {
  const menus = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const logout = () => dispatch(changeDisplayLogout());

  useEffect(() => {
    logout();
  }, []);

  return (
    <div>
      <Menu></Menu>
      <ButtonBox></ButtonBox>
    </div>
  );
}

export default App;
