import HexCSS from '../comps/hexagons/cssHex'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

export default function Home() {
  var hexs = [];

  return (
    <>
      <Head>
        <title>MFU Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <Link href="/ninjas/"><a className={styles.btn}>See Ninja Listing</a></Link>

      <div style={{ 'text-align': 'center', background: "gray" }}>

        <HexCSS message={"this is working"} ></HexCSS>

      </div>
    </>
  )
}

