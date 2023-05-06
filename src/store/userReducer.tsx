// userReducer.ts

const initialState = {
  users: [
    { id: 1, name: "lam", age: 18 },
    { id: 2, name: "huhu", age: 19 },
    { id: 3, name: "haha", age: 20 },
  ], // danh sách người dùng ban đầu
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "DEl":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
