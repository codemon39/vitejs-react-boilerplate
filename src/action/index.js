export const addList = (data) => ({
  type: "ADD_TASK",
  payloads: { ...data, check: false },
});
export const editList = (data, id) => ({
  type: "EDIT_TASK",
  payloads: data,
  id: id,
});
export const deleteList = (id) => ({
  type: "DELETE_TASK",
  id: id,
});
export const checkList = (id) => ({
  type: "CHECK_TASK",
  id: id,
});

export const modalVisable = (id) => ({
  type: "MODAL",
  id: id,
});
