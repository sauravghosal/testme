import styles from "../styles/Home.module.css";

export default function Card(props) {
  return (
    <div className="card m-3">
      <div className={styles.history}>
        <div className="card-body p-0 ">
          <div className="card-header border-secondary">
            <h5>{props.testWeek}</h5>
          </div>
          {props.tests.map((test) => {
            let color, result;
            if (test.result == 0) {
              result = "Negative";
              color = "bg-light";
            } else if (test.result == 1) {
              result = "Positive";
              color = "bg-warning";
            } else {
              result = "Pending";
              color = "bg-secondary";
            }
            return (
              <div className={`card-text ${color}`}>
                <ul>
                  <li>Status: {result}</li>
                  <li>Date Tested: {test.date.toDateString()}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
