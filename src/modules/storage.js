export const saveLibrary = (todoListLibrary) => {
  localStorage.setItem("userTodoListData", JSON.stringify(todoListLibrary));
};

export const loadLibrary = () => {
  const savedData = localStorage.getItem("userTodoListData");
  return savedData ? JSON.parse(savedData) : [];
};
