
import Head from 'next/head'
import styles from '../styles/global.css'
import Link from 'next/link'

export default function Dashboard() {
    return (
        <div class>
        <h1>Dashboard</h1>

        <button href="/newtest">+ New Test</button>
        <h1>Most Recent Test</h1>
        <div>
            <p>Time:</p>
            <p>Date:</p>
            <img alt="barcode"></img>
        </div>
        </div>
    )
}