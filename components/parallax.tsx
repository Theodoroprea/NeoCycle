import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../styles/Parallax.module.scss";
import Navbar from "./navbar";

interface ParallaxProps {
  page: string;
}

export default function Parallax(props: ParallaxProps) {
  const [background, setBackground] = useState(30);
  const parallaxRef = useRef(null);
  const mountain4 = useRef(null);
  const mountain3 = useRef(null);
  const mountain2 = useRef(null);
  const mountain1 = useRef(null);
  const sky = useRef(null);
  const water = useRef(null);
  const container = useRef(null);
  const grad = useRef(null);
  // const nav = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "2000 bottom",
          scrub: true,
          pin: true,
        },
      });
      tl.to(
        mountain1.current,
        {
          y: "-=25",
        },
        0
      );
      tl.to(
        mountain2.current,
        {
          y: "-=60",
        },
        0
      );
      tl.to(
        mountain3.current,
        {
          y: "-=100",
        },
        0
      );
      tl.to(
        mountain4.current,
        {
          y: "-=110",
        },
        0
      );
      tl.to(
        sky.current,
        {
          y: "-=2",
        },
        0
      );
      tl.to(
        water.current,
        {
          y: "-=120",
        },
        0
      );
      tl.to(
        grad.current,
        {
          y: "-=120",
        },
        0
      );
      tl.to(
        container.current,
        {
          y: "+350%",
          opacity: 0,
        },
        0
      );
      return () => ctx.revert();
    });
  });

  const ConditionalTitleComponent = () => {
    if (props.page === "home") {
      return (
        <div ref={container} className={styles.container}>
          <div className={styles.title}>
            <h1 className={styles.neocycle}>NeO</h1>
            <h1 className={styles.neocycle}>Cycle</h1>
          </div>
          <Navbar page={props.page} />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Page Not Found</h1>
          <p>We couldn't find the page you're looking for.</p>
        </div>
      );
    }
  };

  return (
    <div className={styles.parallaxContainer}>
      <div ref={parallaxRef} className={styles.parallax}>
        <img ref={mountain1} className={styles.mountain1} src="/mtn1.png" />
        <img ref={mountain2} className={styles.mountain2} src="/mtn2.png" />
        <img ref={mountain3} className={styles.mountain3} src="/mtn3.png" />
        <img ref={mountain4} className={styles.mountain4} src="/mtn4.png" />
        <img ref={sky} className={styles.sky} src="/sky.png" />
        <div ref={grad} className={styles.gradient} />
        <img ref={water} className={styles.water} src="/water.png" />
      </div>
      <ConditionalTitleComponent />
    </div>
  );
}
