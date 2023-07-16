import React from 'react'
import styles from "../styles/test.module.css";
import Link from 'next/link';
import Head from 'next/head';
function signup() {
  return (
    <>
    <Head> 
      <title>DeliEats: Signup</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="description"content="Food Website Signup Page"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
    <div className={styles.signupbox}>
         <div className={styles.signupform}>
         <form>
  <label for="fname">First name:</label>
  <input type="text" placeholder="First name"/>< br/>
  <label for="lname">Last name:</label>
  <input type="text"placeholder="Last name"/>
  <label for="Email">Email:</label>
    <input type="text" placeholder="Email Address"/>
    <label for="password">Password:</label>
    <input type="password" placeholder="password"/>
    <label for="number">Phone number:</label>
    <input type="number" placeholder="phone number"/>
    <button className={styles.verify}>Verify</button><br/>
    <label for="number">Verification Code:</label>
    <input type="number" placeholder="code"/>
    <div className={styles.signupbutton}>
  <button><Link href="/"></Link>Signup</button>
</div>
<div className={styles.loginlink}>
  <p>{"Already Have an account?"} <Link className={styles.loginl} href="/login">Login</Link></p>
</div>
</form>   
</div>
 </div>
 </>
  )
}

export default signup