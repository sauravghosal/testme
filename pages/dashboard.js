
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Dashboard() {
    return (
        <html lang="en">
            <Head> 
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            </link>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
            </Head>
            <body>
                <div className = {styles.Dashboard}></div>
                    <h1>Dashboard</h1>
                <div className = {styles.Dashboard}>
                <div class="col">
                <div className="card">
                    <a>Most Recent Test</a>
                </div>
                <br></br>
                <br></br>
                    <div className="card m-3">
                        <div className="card entire">
                            <div className="card-body p-0 ">
                                <div className="card-header border-secondary">
                                    <h5>Week 10/5/2020</h5>
                                </div>
                                <div className="card-text bg-status">
                                    <ul >
                                        <li>Status: Pending</li>
                                        <li>Updated: 10/7/2020</li>
                                    </ul>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                <br></br>
                        <center><buttons id={styles.mybtn}>Show barcode</buttons></center>
                                    {/* <img alt="barcode"></img>  */}
                    </div>
                    <br></br>
                <br></br>
                        <center> <buttons id={styles.mybtn}><Link href="/newtest">
                        <a>+ New Test</a>
                            </Link></buttons></center>
                            <br></br>
                <br></br>
                            <div>
                                <center><buttons id={styles.mybtn}><Link href="/newtest">
                                <a>+ New Test</a>
                                </Link></buttons></center> 
                            </div>
                            <br></br>
                <br></br>
                            <div><center><buttons id={styles.mybtn}><Link href="/newtest">
                                <a>+ New Test</a>
                                </Link></buttons></center> 
                            </div>
                            <br></br>
                <br></br>
                            <div><center><buttons id={styles.mybtn}><Link href="/newtest">
                        <a>+ New Test</a>
                            </Link></buttons></center> </div>
                            <br></br>
                <br></br>
                            <div><center><buttons id={styles.mybtn}><Link href="/newtest">
                        <a>+ New Test</a>
                            </Link></buttons> </center></div>
                </div> 
                </div> 
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
            </body> 
            </html>
    )
}