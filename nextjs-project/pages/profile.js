import React, { useState } from 'react'
import styles from "../styles/test.module.css";
import Nav2 from '@/components/Nav2';
import Head from 'next/head';
function profile() {
  
  return (
    <div>
      <Head> 
      <title>DeliEats: Profile</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="description"content="Food Website Profile Page"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
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