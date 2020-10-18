import Card from "../components/Card";
import Button from "react-bootstrap/Button";
// import barcodImage from '../images/bar-code.jpg';


export default function barcode() {
    // const barcodeIm = require('../images/bar-code.jpg');
    return (
      <div>
        <center><h1>Your Barcode:</h1></center>
        <div className="col">
        {/* <img src={process.env.PUBLIC_URL + '/bar-code.jpg'}/>
        ​<picture>
        <img src={barcodeIm} />
        </picture> */}
        <p>Insert barcode here</p>
    </div>
    </div>
  );
}