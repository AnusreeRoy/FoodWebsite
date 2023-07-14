import React from 'react'
import styles from "../styles/test.module.css";
function Login() {
  return (
    <div className={styles.loginpg}>
 <div className={styles.box}>
<div className={styles.boximg}>
  </div>
  <div className={styles.input}>
    <label for="Email">Email</label>
    <input type="text" placeholder="Email Address"/>
    <label for="password">Password</label>
    <input type="text" placeholder="password"/>
</div>
<div className={styles.button}>
  <button>Login</button>
</div>
 </div>
    </div>
  )
}

export default Login