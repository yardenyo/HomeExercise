import axios from "../api/users";
import { useState } from "react";

function AddUser() {
  const [data, setData] = useState({
    Username: "",
    Email: "",
    Password: "",
    Birthdate: "",
    Phone: "",
    URL: "",
  });

  const handleSubmit = () => {
    axios
      .post("/users.php", {
        Username: data.Username,
        Email: data.Email,
        Password: data.Password,
        Birthdate: data.Birthdate,
        Phone: data.Phone,
        URL: data.URL,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  return (
    <div>
      <form action="/" method="post">
        <label htmlFor="username">Username:</label>
        <input
          onClick={(e) => handleChange(e)}
          value={data.Username}
          type="text"
          id="Username"
          name="username"
        ></input>
        <br></br>
        <label htmlFor="email">Email:</label>
        <input
          onClick={(e) => handleChange(e)}
          value={data.Email}
          type="text"
          id="Email"
          name="email"
        ></input>
        <br></br>
        <label htmlFor="password">Password:</label>
        <input
          onClick={(e) => handleChange(e)}
          value={data.Password}
          type="text"
          id="Password"
          name="password"
        ></input>
        <br></br>
        <label htmlFor="birthdate">Birthdate:</label>
        <input
          onClick={(e) => handleChange(e)}
          value={data.Birthdate}
          type="text"
          id="Birthdate"
          name="birthdate"
        ></input>
        <br></br>
        <label htmlFor="phone number">Phone number:</label>
        <input
          onClick={(e) => handleChange(e)}
          value={data.Phone}
          type="number"
          id="Phone"
          name="phonenumber"
        ></input>
        <br></br>
        <label htmlFor="URL">URL:</label>
        <input
          onClick={(e) => handleChange(e)}
          value={data.URL}
          type="text"
          id="URL"
          name="URL"
        ></input>
        <br></br>
        <input type="submit" value="Submit" onClick={handleSubmit}></input>
      </form>
    </div>
  );
}

export default AddUser;
