/* 액션 타입 선언 */
const CHANGE_STATUS = "status/CHANGE_STATUS";

/* 액션 생성 함수 선언 */

export const changeStatus = (newStatus) => ({
  type: CHANGE_STATUS,
  status: newStatus,
});

/* 초기 상태 선언 */
const initialState = "LOGOUT";

export default function status(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STATUS:
      return action.status;
    default:
      return state;
  }
}
