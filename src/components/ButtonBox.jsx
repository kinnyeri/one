import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../modules/status";
import {
  changeDisplayAdmin,
  changeDisplayLogout,
  changeDisplayUser,
} from "../modules/menu";
import { useEffect } from "react";

const ButtonBox = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status); // 로그인 상태

  // 로그인시 상태 변경 함수
  const loginUser = () => {
    dispatch(changeStatus("USER"));
  };
  const loginAdmin = () => {
    dispatch(changeStatus("ADMIN"));
  };
  const logout = () => {
    dispatch(changeStatus("LOGOUT"));
  };

  // 상태 변경시 접근 가능 메뉴 변경
  useEffect(() => {
    switch (status) {
      case "LOGOUT":
        dispatch(changeDisplayLogout());
        break;
      case "USER":
        dispatch(changeDisplayUser());
        break;
      case "ADMIN":
        dispatch(changeDisplayAdmin());
        break;
    }
  }, [status]);

  return status === "LOGOUT" ? (
    <div style={{ position: "fixed", bottom: 400 }}>
      <button onMouseDown={loginUser}>LOGIN</button>
      <button onMouseDown={loginAdmin}>ADMIN</button>
    </div>
  ) : (
    <div style={{ position: "fixed", bottom: 400 }}>
      <button onMouseDown={logout}>{status} LOGOUT</button>
    </div>
  );
};
export default ButtonBox;
