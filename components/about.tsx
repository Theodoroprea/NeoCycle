import styles from "../styles/AboutUs.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>What is NeoCycle?</h2>
      <p className={styles.description}>
        Neocycle is a net zero company dedicated to ensuring no wetsuit ends up
        in the landfill. we strive to come up with creative and innovative ways
        to up-cycle the neoprene into products that contribute to more fun in
        the sun. We believe that the neoprene from old wetsuits is still a
        useful material for various products and we plan to capitalize on those
        traits.
      </p>

      <div className={styles.team}>
        <h2>Meet the team!</h2>
        <div className={styles.teamMembers}>
          <div className={styles.container}>
            <div className={styles.teamMember}>
              <img className={styles.img} src="/Waibs.png" alt="Angus" />
            </div>
            <div className={styles.memberInfo}>
              <h3>Matthew</h3>
              <h4>CEO</h4>
              <p>cant see his peen, crazy bush</p>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.teamMember}>
              <img className={styles.img} src="/Angus.png" alt="Angus" />
            </div>
            <div className={styles.memberInfo}>
              <h3>Angus</h3>
              <h4>CFO</h4>
              <p>his mumi gey</p>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.teamMember}>
              <img className={styles.img} src="/Theo.png" alt="Angus" />
            </div>
            <div className={styles.memberInfo}>
              <h3>Theodor</h3>
              <h4>CTO</h4>
              <p>cool kid</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
