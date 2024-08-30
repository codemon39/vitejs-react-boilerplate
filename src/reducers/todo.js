const INITIAL = {
  list: [],
  modal: false,
  id: undefined,
};
const tasks = (state = INITIAL, action) => {
  switch (action.type) {
    case "MODAL":
      return {
        ...state,
        modal: state.modal === false ? true : false,
        id: action.id,
      };
    case "ADD_TASK":
      return {
        ...state,
        list: [...state.list, action.payloads],
      };
    case "DELETE_TASK":
      return {
        ...state,
        list: state.list.filter((_, index) => index !== action.id),
      };
    case "EDIT_TASK":
      return {
        ...state,
        list: state.list.map((todo, index) =>
          index === action.id ? action.payloads : todo
        ),
      };
    case "CHECK_TASK":
      return {
        ...state,
        list: state.list.map((todo, index) =>
          index === action.id ? { ...todo, check: !todo.check } : todo
        ),
      };

    default:
      return state;
  }
};
export default tasks;
