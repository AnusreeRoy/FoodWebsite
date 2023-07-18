import React from 'react'
import styles from "../styles/test.module.css";
import Nav2 from '@/components/Nav2';
function profile() {
  return (
    <div>
        <div className={styles.head}>
        <header className={styles.header}>
          <h1 className={styles.h1}>DeliEats</h1>    
          <Nav2/>   
        </header>
      </div>
    </div>
  )
}

export default profile