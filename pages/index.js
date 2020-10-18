import axios from "axios";

export default function Home(props) {
  const [user, setUser] = React.useState({});

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
      <img src="/splash.gif" alt = "gif"></img>
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input type="text" id="username" name="username"></input>
        <p>Password</p>
        <input type="password" id="password" name="password"></input>
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
