import "../styles/globals.css";
import Head from "next/head";
import Navbar from "react-bootstrap/Navbar";
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        />
      </Head>
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
        <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {/* <i class="fa fa-bars" aria-hidden="true"></i> */}
        Menu
        </button>
        <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
          <button class="dropdown-item" type="button">Dashboard</button>
          <button class="dropdown-item" type="button">Your History</button>
          <button class="dropdown-item" type="button">Resources</button>
          </div>
        </div>
      </Navbar>
      <Component {...pageProps} />
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </div>
  );
}

export default MyApp;
