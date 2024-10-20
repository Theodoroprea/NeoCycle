import { useEffect, useRef } from "react";
import styles from "../styles/AboutUs.module.scss";

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <h2>What is NeoCycle?</h2>
      <p className={styles.description}>
        Neocycle is a net zero company dedicated to ensuring no wetsuit ends up
        in the landfill. We strive to come up with creative and innovative ways
        to up-cycle the neoprene into products that contribute to more fun in
        the sun. We believe that the neoprene from old wetsuits is still a
        useful material for various products and we plan to capitalize on those
        traits.
      </p>

      <div className={styles.team}>
        <h2>Meet the team!</h2>
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <div className={styles.imgContainer}>
              <img className={styles.img} src="/Waibs.png" alt="Waibs" />
            </div>
            <div className={styles.memberInfo}>
              <h3>Matthew</h3>
              <h4>CEO</h4>
              <p>
                Born and raised on the west coast of British Columbia, the ocean
                has always been a haven for me. Surfing and fishing has had a
                strong influence on my passion for sustainability.
                <br /> <br /> Engaging with the ocean and the life in and around
                it motivates me to preserve everything that makes this coastline
                what it is.
              </p>
            </div>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.imgContainer}>
              <img className={styles.img} src="/Angus.png" alt="Angus" />
            </div>
            <div className={styles.memberInfo}>
              <h3>Angus</h3>
              <h4>CEO</h4>
              <p>
                Living on Vancouver Island for years, I've become deeply
                ingrained in its unique environment, from fixing pipes as a
                plumber to chasing waves as a hobbyist surfer. <br /> <br />{" "}
                Amid island life, I've become environmentally conscious. Fueled
                by love for this place, I'm on a sustainability journey. Through
                wetsuit recycling, I protect my home environment, one suit at a
                time.
              </p>
            </div>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.imgContainer}>
              <img className={styles.img} src="/Theo.png" alt="Theo" />
            </div>
            <div className={styles.memberInfo}>
              <h3>Theo</h3>
              <h4>CTO</h4>
              <p>
                Born on the west coast of British Columbia but raised in Paris,
                France, I returned to BC at 16, where the rare and diverse
                ecosystems of Vancouver Island ignited my passion for the ocean
                and its surrounding nature. <br /> <br /> It was amidst these
                landscapes that I found not only inspiration but also a sense of
                peace, sparked by eye-opening adventures with friends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
