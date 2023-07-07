import React from 'react'
import Link from "next/link";
import styles from "../styles/test.module.css";
function SearchBar() {
  return (
    <div className={styles.search}>
        <input className={styles.inputbox} type="text" placeholder="Search.."></input>
         <button className={styles.searchbutton}>
         <Link href="/">Go</Link>
        </button>
    </div>
  )
}

export default SearchBar