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
    // 첫 진입시 로그아웃 상태로 초기화
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
