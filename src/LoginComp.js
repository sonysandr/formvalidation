import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoggedUserPage from "./pages/LoggedUserPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LoginComp() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const findErrors = () => {
    const errors = [];
    if (!userName || !password) errors.push("All fields must be filled");

    return errors;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const errors = findErrors();
    errors.length ? setMessage(errors) : navigate("/loggeduserpage");
    // setMessage(errors.length ? errors : null);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h2>Login page</h2>
      <label htmlFor="username">User Name</label>
      <input
        type="text"
        id="demo"
        name="username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <input type="submit" value="submit" />
      <br />
      {message}
    </form>
  );
}
