import React from 'react'
import Image from 'next/image'
import styles from "../styles/test.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import SimpleImageSlider from "react-simple-image-slider";

export default function Slideshow(){
  // Need array of images
  const images= [
    "/coverimg.jpg",
    "/cover3.jpg",
    "/cover4.jpg",
  ];
  return(
    <div >
      <SimpleImageSlider className={styles.slideshow}
      // width={500}
      // height={250}
      images={images}
      showNavs={true}
      showBullets={true}
      />
    </div>
  )
}

