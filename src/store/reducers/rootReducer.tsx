const initialState = {
  users: [
    { id: 1, name: "lam", age: 18 },
    { id: 2, name: "xin chào tất cả các bạn", age: 19 },
    { id: 3, name: "haha when you cry", age: 20 },
  ], // danh sách người dùng ban đầu
};

const rootReducer = (state = initialState, action?: any) => {
  return state;
};

export default rootReducer;
