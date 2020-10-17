import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home() {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user")));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/validate-user", {
        username: event.target.elements.username.value,
        password: event.target.elements.password.value,
      })
      .then((response) => {
        window.localStorage.setItem("user", JSON.stringify(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {console.log(user)}
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label for="password">Password</label>
        <input type="password" id="password" name="password" required />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
