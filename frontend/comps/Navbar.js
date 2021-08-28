import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Menu.module.css'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/"><a>
        <Image src="/logo.png" alt="site logo" width={128} height={77} />
        </a></Link>
      </div>

      <input id="_MenuToggle" className={styles.navInput} type="checkbox"/>
      <label id={styles.navToggleButton} htmlFor="_MenuToggle">
        <span className={styles.nav_toggle}>
              <span className={styles.menuX}></span>
              <div className={styles.textMenu}></div>
        </span>
      </label>
      <ul id={styles.hamburgerMenu}>
        <li><Link href='/about'><a>About</a></Link></li>
        <li><Link href="/ninjas/"><a>Ninja Listing</a></Link></li>
        <li><Link href='/contact'><a>Contact</a></Link></li>
      </ul>

    </nav>
  );
}
 
export default Navbar;