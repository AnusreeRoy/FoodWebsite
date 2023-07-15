import React from 'react'
import Login from '@/components/Login'
import styles from "../styles/test.module.css"
import Head from "next/head";
function login() {
  return (
    <>
    <Head> 
      <title>DeliEats: Login</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="description"content="Food Website Login Page"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
    <div className={styles.loginpg}>
      <Login/>  
    </div>
    </>
    
  )
}

export default login