import styles from "./AboutContainer.module.scss";
import kathy1 from "../../public/img/kathy1.jpg";
import { motion } from "framer-motion";
function AboutContainer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["page-1"]}>
          <h1 className={styles.intro}>US based developer</h1>
          <p>( for now )</p>
        </div>
        <div className={styles["page-2"]}>
          <motion.div
            className={styles["picture-container"]}
            initial={{
              opacity: 0,
              x: "100%",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 2,
              },
            }}
            viewport={{ once: true }}
          >
            <img src={kathy1} />
          </motion.div>
        </div>
        <div className={styles["page-3"]}>
          <motion.div
            className={styles["info-container"]}
            initial={{
              opacity: 0,
              x: "-100%",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 2,
              },
            }}
            viewport={{ once: true }}
          >
            <p>
              Experienced global traveler with an expanded worldview, frequently
              challenged to live outside of her comfort zone.
            </p>
            <p>
              Driven to perform in both individual and collaborative settings in
              order to become a full-stack developer for the purpose of creating
              a more accessible online experience.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default AboutContainer;
