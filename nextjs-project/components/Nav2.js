import React from 'react'
import Link from 'next/link';
import styles from "../styles/test.module.css";
import { BiSolidUser, BiToggleLeft } from "react-icons/bi";

function Nav2() {
  return (
    <div>
        <nav className={styles.drop}>
        <div className={styles.dropdown}>
            <div className={styles.dropbtn}><BiSolidUser/></div>
                <ul className={styles.dropcont}>
                <li><Link className={styles.links} href="/">Profile Info</Link></li>
               <li><Link className={styles.links}  href="/">Order History</Link></li>
                <li><Link className={styles.links}  href="/">Vouchers</Link></li>
                </ul>  
            </div>
            <button className={styles.logout}>
          <Link className={styles.log} href="/login" alt="">Logout</Link>
      </button>
  </nav> </div>
  )
}

export default Nav2