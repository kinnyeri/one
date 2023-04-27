import menuData from "../assets/data_body.json";
/* 액션 타입 선언 */
const CHANGE_DISPLAY_LOGOUT = "menu/CHANGE_DISPLAY_LOGOUT";
const CHANGE_DISPLAY_USER = "menu/CHANGE_DISPLAY_USER";
const CHANGE_DISPLAY_ADMIN = "menu/CHANGE_DISPLAY_ADMIN";

/* 액션 생성 함수 선언 */
export const changeDisplayLogout = () => ({
  type: CHANGE_DISPLAY_LOGOUT,
  menu: {
    id,
    name,
    description,
    path,
  },
});
export const changeDisplayUser = () => ({
  type: CHANGE_DISPLAY_USER,
  menu: {
    id,
    name,
    description,
    path,
  },
});
export const changeDisplayAdmin = () => ({
  type: CHANGE_DISPLAY_ADMIN,
  menu: {
    id,
    name,
    description,
    path,
  },
});

/* 초기 상태 선언 */
const initialState = menuData.map((menu) => ({
  id: menu.id,
  name: menu.name,
  description: menu.description,
  path: menu.path,
  displayStatus: menu.displayStatus,
  childMenus: menu.childMenus.map((child) => ({
    id: child.id,
    name: child.name,
    description: child.description,
    path: child.path,
    displayStatus: child.displayStatus,
  })),
}));

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_PARENT_MENU:
      return state.concat(action.menu);
    case ADD_CHILD_MENU:
      let newState = initialState.map((p) => {
        if (p.id === p_id)
          return {
            ...p,
            childMenus: [...childMenus, action.menu],
          };
        else p;
      });
      return newState;
    default:
      return state;
  }
}
