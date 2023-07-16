import React from 'react'
import styles from "../styles/test.module.css";
import Link from 'next/link';
function Login() {
  return (
 <div className={styles.box}>
<div className={styles.boximg}>
<h1 className={styles.loginh1}>DeliEats</h1>
  </div>
  <div className={styles.input}>
    <label for="Email">Email</label>
    <input type="text" placeholder=""/>
    <label for="password">Password</label>
    <input type="password" placeholder=""/>
</div>
<div className={styles.button}>
  <button><Link href="/"></Link>Login</button>
</div>
<div className={styles.signuplink}>
  <p>{"Don't Have an account yet?"} <Link className={styles.signupl} href="/signup">Signup</Link></p>
</div>
 </div>
   
  )
}

export default Login