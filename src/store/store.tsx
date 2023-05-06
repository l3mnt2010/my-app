// import { configureStore } from "@reduxjs/toolkit";  // giúp chúng ta setup store nhanh hơn
// import { RootState } from './store';

//  với js ta sẽ export nó luôn tại đây:
// export const store = configureStore({
//    reducer : {

//    },
// })

//còn trường hợp đối với typesc thì chúng ta cần phải định dạng phần type cho chúng:

// import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({
//   reducer: {},
// });

// // chúng ta cần phải xuất ra kiểu type của RootState và AppDispath :

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispath = typeof store.dispatch;

// cách sử dụng có vẻ như giống với cách ta tạo useContext

// đối với cũ thì không thể mutiate data trực tiếp mà phải sao ra một value mới để return còn redux toolkit có thể

// cách cũ cần reducer và action bây giờ chỉ cần slice là sẽ kết hợp được cả hai cùng một lúc
// map state to props chúng ta sẽ có thể sử dụng dữ liệu đó vào trong pages

// // store.ts
// import { createStore } from "redux";
// import userReducer from "./userReducer";

// const store = createStore(userReducer);

// export default store;

// chúng ta cần phải map duwxw liệu của reddux và reacjs bằng connect
