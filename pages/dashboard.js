
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Dashboard() {
    return (
        <div>
            <Head> 
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            </link>
            </Head>
            <h1>Dashboard</h1>
            <div className = {styles.Dashboard}>
            <div className="col">
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
                    <center><buttons id={styles.mybtn}>Show barcode</buttons></center>
                                {/* <img alt="barcode"></img>  */}
                </div>
                    <center> <buttons id={styles.mybtn}><Link href="/newtest">
                    <a>+ New Test</a>
                        </Link></buttons></center>
            </div> 
            </div> 
            </div>
    )
}



            {/* <div className = {styles.Header}>
                <div className = {styles.Title}>
                    <h1>Dashboard</h1>
                </div>
            </div>
            <div className = {styles.newTest}>
            <li>
                <buttons id={styles.mybtn}><Link href="/newtest">
                    <a>+ New Test</a>
                </Link></buttons>
            </li>
           </div>
        <div>
        <div className={styles.cardBodyDash}>
                    <h1>Most Recent Test</h1>
                    <h5 className={styles.cardTitleDash}>Week 10/5/2020</h5>
                    <ul className={styles.cardTextDash}>
                        <li>Status: Positive</li>
                        <li>Updated: 10/7/2020</li>
                    </ul>
                    <buttons id={styles.mybtn}>Show barcode</buttons>
                    <img alt="barcode"></img> 
        //         {/* </div>
        // </div> */}