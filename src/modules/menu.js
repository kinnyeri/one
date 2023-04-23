import menuData from "../assets/data_body.json";
/* 액션 타입 선언 */
const ADD_PARENT_MENU = "menu/ADD_PARENT_MENU";
const ADD_CHILD_MENU = "menu/ADD_CHILD_MENU";

/* 액션 생성 함수 선언 */
export const addParentMenu = ({ id, name, description, path }) => ({
  type: ADD_PARENT_MENU,
  menu: {
    id,
    name,
    description,
    path,
  },
});
export const addChildMenu = (p_id, id, name, description, path) => ({
  type: ADD_PARENT_MENU,
  p_id,
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
  childMenus: menu.childMenus.map((child) => ({
    id: child.id,
    name: child.name,
    description: child.description,
    path: child.path,
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
