import "../styles/globals.css";
import Head from "next/head";
import Navbar from "react-bootstrap/Navbar";

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
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          TestMe
        </Navbar.Brand>
      </Navbar>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
