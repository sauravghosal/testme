import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function TestingHistory() {
    return (
        <div>
        <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>

        </Head>
       
            <h1>Testing History</h1>
            
            <div className="col">
            <div className="card">
                <a>Save Test History</a>
            </div>
            <br></br>
            <br></br>
                <div className="card m-3">
                    <div className={styles.history}>
                        <div className="card-body p-0 ">
                            <div className="card-header border-secondary">
                                <h5>Week 10/5/2020</h5>
                            </div>
                            <div className="card-text bg-warning">
                                <ul >
                                    <li>Status: Positive</li>
                                    <li>Updated: 10/7/2020</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card m-3">
                    <div className={styles.history}>
                        <div className="card-body p-0">
                            <div className="card-header border-secondary">
                                <h5>Week 10/5/2020</h5>
                            </div>
                            <div className="card-text bg-warning">
                                <ul >
                                    <li>Status: Positive</li>
                                    <li>Updated: 10/7/2020</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card m-3">
                    <div className={styles.history}>
                        <div className="card-body p-0">
                            <div className="card-header border-secondary">
                                <h5>Week 10/5/2020</h5>
                            </div>
                            <div className="card-text bg-warning">
                                <ul >
                                    <li>Status: Positive</li>
                                    <li>Updated: 10/7/2020</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            

            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
             <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
        </div>

    )
}