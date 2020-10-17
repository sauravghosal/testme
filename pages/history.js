import Card from "../components/Card";
import Button from "react-bootstrap/Button";

const testingHistory = [
  { date: new Date("10/1/2020"), result: 0 },
  { date: new Date("10/5/2020"), result: 1 },
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

export default function History() {
  return (
    <div>
      <h1>Testing History</h1>
      <div className="col">
        {Object.entries(testingHistoryGroupedByDate).map((val) => {
          console.log(val);
          return <Card testWeek={val[0]} tests={val[1]} />;
        })}
      </div>
      <Button variant="primary">
        <i className="fa fa-download"></i> Save Testing History
      </Button>
    </div>
  );
}
