import Card from "../components/Card";
import Button from "react-bootstrap/Button";
import dynamic from "next/dynamic";

const testingHistory = [
  { date: new Date("10/1/2020"), result: 0 },
  { date: new Date("10/5/2020"), result: 1 },
  { date: new Date("3/23/1999"), result: 0 },
  { date: new Date("10/8/2020"), result: 0 },
  { date: new Date("10/10/2020"), result: 1 },
  { date: new Date("10/17/2020"), result: 2 },
  { date: new Date("10/30/2020"), result: 1 },
];

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

const testingHistoryGroupedByDate = testingHistory.reduce((acc, test) => {
  const yearWeek = `Week of ${getSunday(test.date)}`;
  if (!acc[yearWeek]) {
    acc[yearWeek] = [];
  }
  acc[yearWeek].push({ date: test.date, result: test.result });
  return acc;
}, {});

function History() {
  let html2pdf;

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
      jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
    };
    // New Promise-based usage:
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div id="testing-history">
      <h1>Testing History</h1>
      <div className="col">
        {Object.entries(testingHistoryGroupedByDate).map((val) => {
          return <Card testWeek={val[0]} tests={val[1]} />;
        })}
      </div>
      <Button variant="primary" onClick={handleClick}>
        <i className="fa fa-download"></i> Save Testing History
      </Button>
    </div>
  );
}

export default dynamic(() => Promise.resolve(History), {
  ssr: false,
});
