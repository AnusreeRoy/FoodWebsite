import React from "react";
import styles from "../styles/test.module.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
function index() {
  return (
    <>
      <div className={styles.head}>
        <header className={styles.header}>
          <h1 className={styles.h1}>DeliEats</h1>    
          <Navbar/>   
        </header>
      </div>
      <div className={styles.coverimg}>
        <h1 className={styles.h1tag}>We know You Love Food</h1>
        <p>Order your favorite food items in just one click!</p>
       <SearchBar/>
      </div>
      <div className={styles.cover}>
      <div className={styles.anothercover}></div>
        <div className={styles.covertext}><h1>Explore Your Favorite Dishes!</h1> 
      </div>
      </div>
      <div className={styles.cover2}>
        <h1>Order from anywhere</h1>
      </div>
      <div >
        <div>
      <footer className={styles.footer}>
      <h1 className={styles.footerh1}>DeliEats</h1>
      <Footer/></footer>
      </div>
      <div className={styles.foot}>
      </div>
      </div> 
    </>
  );
}
export default index;
