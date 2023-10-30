import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateuser } from "./features/users/userSlice";

const App = () => {
  const [user, setUser] = useState({ name: "", username: "" });
  const [newUserName, setNewUserName] = useState("");
  const userList = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const userAdd = () => {
    dispatch(addUser(user));
    setUser(user);
  };

  return (
    <>
      <div className="App">
        <div className="addUser">
          <input
            type="text"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="Name..."
          />
          <input
            type="text"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Username..."
          />
          <button onClick={userAdd}>Add User</button>
        </div>
        <div className="displayUsers">
          {userList.map((userListItem) => (
            <div key={userListItem.id} className="">
              <h1>{userListItem.name}</h1>
              <h1>{userListItem.username}</h1>
              <input
                type="text"
                onChange={(e) => setNewUserName(e.target.value)}
                placeholder="New Username..."
              />
              <button
                onClick={() =>
                  dispatch(
                    updateuser({ id: userListItem.id, username: newUserName })
                  )
                }
              >
                Update Username
              </button>
              <button
                onClick={() => dispatch(deleteUser({ id: userListItem.id }))}
              >
                Delete user
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
