import axios from "axios";
import { useRouter } from "next/router";

export default function Home(props) {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/validate-user", {
        username: event.target.elements.username.value,
        password: event.target.elements.password.value,
      })
      .then((response) => {
        window.localStorage.setItem("user", JSON.stringify(response.data));
        props.setUser(response.data);
        router.push("dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input type="text" id="username" name="username"></input>
        <p>Password</p>
        <input type="text" id="password" name="password"></input>
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
