import menuData from "../assets/data_body.json";

/* 액션 타입 선언 */
const CHANGE_DISPLAY_LOGOUT = "menu/CHANGE_DISPLAY_LOGOUT";
const CHANGE_DISPLAY_USER = "menu/CHANGE_DISPLAY_USER";
const CHANGE_DISPLAY_ADMIN = "menu/CHANGE_DISPLAY_ADMIN";

/* 액션 생성 함수 선언 */
export const changeDisplayLogout = () => ({
  type: CHANGE_DISPLAY_LOGOUT,
  hide: [1, 5, 16, 24, 31, 36, 46],
});
export const changeDisplayUser = () => ({
  type: CHANGE_DISPLAY_USER,
  hide: [36, 46],
});
export const changeDisplayAdmin = () => ({
  type: CHANGE_DISPLAY_ADMIN,
  hide: [],
});

/* 초기 상태 선언 */
const initialState = menuData.reduce(
  (cur, menu, idx) => {
    return {
      ...cur,
      [menu.id]: {
        name: menu.name,
        description: menu.description,
        path: menu.path,
        displayStatus: menu.id === 49 ? "SHOW" : "HIDE",
        next: idx + 1 < menuData.length ? menuData[idx + 1].id : null,
        childMenus: menu.childMenus.reduce(
          (childCur, child, cidx) => {
            return {
              ...childCur,
              [child.id]: {
                name: child.name,
                description: child.description,
                path: child.path,
                displayStatus: child.displayStatus,
                next:
                  cidx + 1 < menu.childMenus.length
                    ? menu.childMenus[cidx + 1].id
                    : null,
              },
            };
          },
          { head: { next: menu.childMenus[0].id } }
        ),
      },
    };
  },
  { head: { next: menuData[0].id } }
);

/* 모듈 */
let hided = [1, 5, 16, 24, 31, 36, 46];
const changeState = (state, hide) => {
  const newState = state;
  hided.forEach((el) => {
    newState[el].displayStatus = "SHOW";
  });
  hided = [];
  hide.forEach((el) => {
    hided = [...hided, el];
    newState[el].displayStatus = "HIDE";
  });
  return { ...newState };
};
export default function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DISPLAY_LOGOUT:
      return changeState(state, action.hide);
    case CHANGE_DISPLAY_USER:
      return changeState(state, action.hide);
    case CHANGE_DISPLAY_ADMIN:
      return changeState(state, action.hide);
    default:
      return state;
  }
}
