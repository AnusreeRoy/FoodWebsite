import styles from "../styles/test.module.css";
import Link from "next/link";
import React from 'react'

function Footer() {
  return (
    <div>
        <ul>
            <li><Link href="/">Facebook</Link></li>
               <li> <Link href="/">Instagram</Link></li>
               <li> <Link href="/">twitter</Link></li>
             </ul>
             <ul className={styles.ul2}>
             <p>Get Help</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Do not sell or share my personal information</p></ul>
            <ul className={styles.ul3}>
            <p >This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            <p >© 2023 DeliEats Inc.</p></ul>
       
    </div>
  )
}

export default Footer