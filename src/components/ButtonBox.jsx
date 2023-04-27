import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../modules/status";

const ButtonBox = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);

  const loginUser = () => dispatch(changeStatus("USER"));
  const loginAdmin = () => dispatch(changeStatus("ADMIN"));
  const logout = () => dispatch(changeStatus("LOGOUT"));

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
