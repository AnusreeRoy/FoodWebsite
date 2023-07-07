import React from 'react'
import styles from "../styles/test.module.css";
import Link from "next/link";
function Navbar() {
  return (
    <div><nav>
    <ul className={styles.ul}>
      <button className={styles.login}>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </button>
      <button className={styles.signup}>
        <li>
          <Link href="/signup">Signup</Link>
        </li>
      </button>
    </ul>
  </nav> 
  </div>
  )
}

export default Navbar