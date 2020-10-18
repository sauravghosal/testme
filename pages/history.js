import Card from "../components/Card";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getSunday(d) {
  d = new Date(d);
  var day = d.getDay(),
    diff = d.getDate() - day;
  return new Date(d.setDate(diff));
}

export default function History(props) {
  let html2pdf;
  console.log(props);

  const testingHistoryGroupedByDate = props.user.testingHistory
    .sort((test1, test2) => new Date(test2.date) - new Date(test1.date))
    .reduce((acc, test) => {
      const yearWeek = `Week of ${getSunday(test.date)
        .toString()
        .substring(0, 15)}`;
      if (!acc[yearWeek]) {
        acc[yearWeek] = [];
      }
      acc[yearWeek].push({ date: test.date, result: test.result });
      return acc;
    }, {});

  React.useEffect(() => {
    html2pdf = require("html2pdf.js");
  }, []);

  const handleClick = () => {
    const element = document.getElementById("testing-history");
    var opt = {
      margin: 1,
      filename: "testing-history.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    // New Promise-based usage:
    html2pdf().from(element).set(opt).save();
  };

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
      <div id="testing-history">
        <h1>Testing History</h1>
        <div className="col">
          {Object.entries(testingHistoryGroupedByDate).map((val) => {
            return <Card testWeek={val[0]} tests={val[1]} />;
          })}
        </div>
      </div>
      <Button variant="primary" onClick={handleClick}>
        <i className="fa fa-download"></i> Save Testing History
      </Button>
    </div>
  );
}
