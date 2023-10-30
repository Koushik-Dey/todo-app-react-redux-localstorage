import { createSlice, nanoid } from "@reduxjs/toolkit";

const users =
  localStorage.getItem("users") !== null
    ? JSON.parse(localStorage.getItem("users"))
    : [];

const initialState = {
  users: users,
};

export const userSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addUser: (state, action) => {
      //write code for adding a user
      state.users.push({
        id: nanoid(),
        name: action.payload.name,
        username: action.payload.username,
      });
      localStorage.setItem("users", JSON.stringify(state.users));
    },

    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);

      localStorage.setItem("users", JSON.stringify(state.users));
    },

    updateuser: (state, action) => {
      state.users.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });

      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
});

export const { addUser, deleteUser, updateuser } = userSlice.actions;

export default userSlice.reducer;
