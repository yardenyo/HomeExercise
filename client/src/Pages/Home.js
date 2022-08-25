import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/users";
import "./Home.css";

function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/users.php")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleClick() {
    navigate("/add");
  }

  const deleteUser = (Username) => {
    axios
      .delete(`/users.php?username=${Username}`)
      .then((res) => {
        setUsers(users.filter((u) => u.username !== Username.username));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h2>Users table</h2>
      <button className="btn" onClick={handleClick}>
        Add User
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.Username}</td>
              <td>{user.Email}</td>
              <td>
                <button
                  className="btn"
                  onClick={() => deleteUser(user.Username)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
