import styles from "../styles/test.module.css";
import Link from "next/link";
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';
import{
  faTwitter,
  faInstragram,
  faFacebook
}from '@fortawesome/free-solid-svg-icons'
library.add(
  faTwitter,
  faInstragram,
  faFacebook
)
function Footer() {
  return (
    <div>
        <ul>
            <li><Link href="/"><FontAwesomeIcon icon={facode} style={{width:'40px'}}/></Link></li>
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