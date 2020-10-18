import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

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
      <center>
        <Navbar bg="light">
        <Navbar.Brand href="/dashboard">
          <img
            alt="testme logo"
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          TestMe
        </Navbar.Brand>
      </Navbar>
      {/* {console.log(user)} */}
      <div className ="pl-5 ml-5">
      <img src="/splash.gif" alt = "gif"></img>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Username</h3>
        <input type="text" id="username" name="username"></input>
        <br></br>
        <h3 className ="mt-3">Password</h3>
        <input type="password" id="password" name="password"></input>
        <br></br>
        <br></br>
        <input className = "bg-primary p-1 text-white" type="submit" value="Submit"></input>
      </form>
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <p><b>Note:</b> To test this out without creating an account, use username: covidFreeStudent with password: georgiaTech</p>
      </center>
    </div>
  );
}
