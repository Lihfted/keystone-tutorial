import HexRow from '../comps/hexagons/hex'
import HexRowClass from '../comps/hexagons/hexClass'
import HexRowD3 from '../comps/hexagons/testHex'
import cssHex from '../comps/hexagons/cssHex'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

export default function Home() {
  return (
    <>
    
      <Head>
        <title>About Page</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
        {/* <h1 className={styles.title}>Hex</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
 */}
        
      <div>
        <HexRow />
        <HexRowClass   />
        
        <HexRowD3 ></HexRowD3>
         
         <cssHex></cssHex>
        <Link href="/ninjas/">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
