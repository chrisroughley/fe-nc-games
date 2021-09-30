import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../user";
import { getUsers } from "../utils/api";

const Users = () => {
  const [userList, setUserList] = useState([]);
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    getUsers().then((response) => {
      console.log(response);
      setUserList(response);
    });
  }, []);

  const handleSubmit = (event, selectedUser) => {
    if (selectedUser.username)
      setUser({
        username: selectedUser.username,
        name: selectedUser.name,
        avatar: selectedUser.avatar_url,
      });
    event.preventDefault();
    history.goBack();
  };
  console.log(userList);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {userList.map((user) => {
          return (
            <li key={user.username}>
              <button
                value={user}
                onClick={(event) => {
                  handleSubmit(event, user);
                }}
              >
                {user.username}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Users;
