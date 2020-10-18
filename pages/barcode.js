import Card from "../components/Card";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Link from 'next/link'
// import barcodImage from '../images/bar-code.jpg';


export default function barcode() {
    // const barcodeIm = require('../images/bar-code.jpg');
    return (
        <div>
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
        Menu
        </button>
        <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
          <button class="dropdown-item" type="button"><Link href="/dashboard">
          <a>Dashboard</a></Link></button>
          <button class="dropdown-item" type="button"><Link href="/history">
          <a>Your History</a></Link></button>
          <button class="dropdown-item" type="button"><Link href="https://health.gatech.edu/coronavirus/health-alerts">
          <a>Resources</a></Link></button>
          </div>
        </div>
      </Navbar> 
        <center><h1>Your Barcode:</h1></center>
        <br></br>
        <div className="col">
        {/* <img src={process.env.PUBLIC_URL + '/bar-code.jpg'}/>
        ​<picture>
        </picture> */}
        <center><img src="/barcodeImage.png" alt = "Image of Barcode"/></center>
    </div>
    </div>
  );
}