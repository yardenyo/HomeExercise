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

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "/users.php",
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        },
        JSON.stringify({
          Username: data.Username,
          Email: data.Email,
          Password: data.Password,
          Birthdate: data.Birthdate,
          Phone: data.Phone,
          URL: data.URL,
        })
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChange = (event) => {
    const newData = { ...data };
    newData[event.target.id] = event.target.value;
    setData(newData);
    console.log(newData);
  };

  return (
    <div>
      <form action="/" method="post">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="Username"
          name="username"
          onChange={(e) => handleChange(e)}
          value={data.Username}
        ></input>
        <br></br>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="Email"
          name="email"
          onChange={(e) => handleChange(e)}
          value={data.Email}
        ></input>
        <br></br>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="Password"
          name="password"
          onChange={(e) => handleChange(e)}
          value={data.Password}
        ></input>
        <br></br>
        <label htmlFor="birthdate">Birthdate:</label>
        <input
          type="date"
          id="Birthdate"
          name="birthdate"
          onChange={(e) => handleChange(e)}
          value={data.Birthdate}
        ></input>
        <br></br>
        <label htmlFor="phone number">Phone number:</label>
        <input
          type="text"
          id="Phone"
          name="phonenumber"
          onChange={(e) => handleChange(e)}
          value={data.Phone}
        ></input>
        <br></br>
        <label htmlFor="URL">URL:</label>
        <input
          type="text"
          id="URL"
          name="URL"
          onChange={(e) => handleChange(e)}
          value={data.URL}
        ></input>
        <br></br>
        <input type="submit" value="Submit" onClick={handleSubmit}></input>
      </form>
    </div>
  );
}

export default AddUser;
