import styles from '../styles/Home.module.css'
import Head from 'next/head'
// import theDownloadButton from '../images/downloadButton.png';

export default function TestingHistory() {
    return (
        <div>
        <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>

        </Head>
       
            <h1>Testing History</h1>
            
            <div className="col">
            <div className="card m-3">
                <div className="card-body bg-primary p-3">
                <img src={theDownloadButton}></img>
                    <div className="card-text text-white">
                    
                        <a>Save Test History</a>
                    </div>
                </div>
                
            </div>
            <br></br>
            <br></br>
                <div className="card m-3">
                    <div className={styles.history}>
                        <div className="card-body p-0 ">
                            <div className="card-header border-secondary">
                                <h5>Week 10/12/2020</h5>
                            </div>
                            <div className="card-text bg-warning">
                                <ul >
                                    <li>Status: Positive</li>
                                    <li>Updated: 10/14/2020</li>
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
                            <div className="card-text bg-secondary">
                                <ul >
                                    <li>Status: Pending</li>
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
                                <h5>Week 9/28/2020</h5>
                            </div>
                            <div className="card-text bg-light">
                                <ul >
                                    <li>Status: Negative</li>
                                    <li>Updated: 9/29/2020</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card m-3">
                    <div className={styles.history}>
                        <div className="card-body p-0">
                            <div className="card-header border-secondary">
                                <h5>Week 9/21/2020</h5>
                            </div>
                            <div className="card-text bg-danger">
                                <ul >
                                    <li>Status: No Test</li>
                                    <li>Updated: --</li>
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