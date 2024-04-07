"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles/Images.module.scss";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
const logo = "./logo.png";

export default function Home() {
  return (
    <div>
      <Parallax
        pages={3}
        style={{ top: "0", left: "0" }}
        className={styles.animation}
      >
        <ParallaxLayer offset={0} speed={0.2}>
          <div
            className={`${styles.animation_layer} ${styles.parallax} ${styles.sky}`}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3}>
          <div
            className={`${styles.animation_layer} ${styles.parallax} ${styles.mountain_one}`}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div
            className={`${styles.animation_layer} ${styles.parallax} ${styles.mountain_two}`}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div
            className={`${styles.animation_layer} ${styles.parallax} ${styles.mountain_three}`}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.55}>
          <div
            className={`${styles.animation_layer} ${styles.parallax} ${styles.mountain_four}`}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.6}>
          <div
            className={`${styles.animation_layer} ${styles.parallax} ${styles.water}`}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.05} speed={0.25} factor={1}>
          <img src={logo} className={styles.logo} />
          <Navbar />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={0.6}
          factor={1}
          className={styles.gradient}
        >
          <h1>Our mission Component</h1>
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={1.5}
          speed={1}
          factor={1.5}
          style={{ backgroundImage: `url(${cave})`, backgroundSize: "cover" }}
        /> */}
      </Parallax>
    </div>
  );
}
