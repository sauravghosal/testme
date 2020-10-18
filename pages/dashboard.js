import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";

export default function Dashboard() {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
      </Head>
      <body>
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
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Menu
            </button>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
              <button class="dropdown-item" type="button">
                <Link href="/dashboard">
                  <a>Dashboard</a>
                </Link>
              </button>
              <button class="dropdown-item" type="button">
                <Link href="/history">
                  <a>Your History</a>
                </Link>
              </button>
              <button class="dropdown-item" type="button">
                <Link href="https://health.gatech.edu/coronavirus/health-alerts">
                  <a>Resources</a>
                </Link>
              </button>
            </div>
          </div>
        </Navbar>
        <div className={styles.Dashboard}></div>
        <h1>Dashboard</h1>
        <div className={styles.Dashboard}>
          <div class="col">
            <div className="card">
              <h5>Most Recent Test</h5>
            </div>
            <br></br>
            <br></br>
            <div className="card m-3">
              <div className="card-body p-0 ">
                <div className="card-header border-secondary">
                  <h5>Week 10/5/2020</h5>
                </div>
                <div className="card-text bg-status">
                  <ul>
                    <li>Status: Pending</li>
                    <br></br>
                    <li>Updated: 10/7/2020</li>
                  </ul>
                  <br></br>
                </div>
              </div>
              <br></br>
              <center>
                <Button variant="primary" size="lg" block id={styles.mybtn2}>
                  <i class="fa fa-barcode" aria-hidden="true"></i>{" "}
                  <Link href="/barcode">
                    <a className="text-white"> Show Barcode</a>
                  </Link>
                </Button>
              </center>
              {/* <img alt="barcode"></img>  */}
              <br></br>
            </div>
            <br></br>
            <br></br>
            <center>
              <Button variant="primary" size="lg" block id={styles.mybtn}>
                <i class="fa fa-plus" aria-hidden="true"></i>
                <Link href="https://mytest.gatech.edu/">
                  <a className="text-white"> New Test</a>
                </Link>
              </Button>
            </center>
            <br></br>
            <br></br>
            <div>
              <center>
                <Button variant="primary" size="lg" block id={styles.mybtn}>
                  <i class="fa fa-bar-chart" aria-hidden="true"></i>
                  <Link href="/history">
                    <a className="text-white"> My Test History</a>
                  </Link>
                </Button>
              </center>
            </div>
            <br></br>
            <br></br>
            <div>
              <center>
                <Button variant="primary" size="lg" block id={styles.mybtn}>
                  <i class="fa fa-users" aria-hidden="true"></i>
                  <Link href="https://health.gatech.edu/coronavirus/health-alerts">
                    <a className="text-white"> Community</a>
                  </Link>
                </Button>
              </center>
            </div>
            <br></br>
            <br></br>
            <div>
              <center>
                <Button variant="primary" size="lg" block id={styles.mybtn}>
                  <i class="fa fa-plus" aria-hidden="true"></i>
                  <Link href="https://health.gatech.edu/coronavirus/operations-status">
                    <a className="text-white"> Resources</a>
                  </Link>
                </Button>
              </center>{" "}
            </div>
            <br></br>
            <br></br>
          </div>
        </div>
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
