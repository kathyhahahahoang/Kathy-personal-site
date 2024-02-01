import styles from "./ProjectContainer.module.scss";
import felix from "../public/img/felix.jpg";
import cha from "../public/img/cha.jpg";
import kai from "../public/img/kai.jpg";
import bi from "../public/img/bi.jpg";
import jk from "../public/img/jk.jpg";
import jungwon from "../public/img/jungwon.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

function ProjectContainer() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onLeave: (self) => {
        self.scroll(1);
        ScrollTrigger.update();
      },
      onLeaveBack: (self) => {
        self.scroll(ScrollTrigger.maxScroll(window) - 1);
        ScrollTrigger.update();
      },
    });
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.project} src={felix} />
      <img className={styles.project} src={cha} />
      <img className={styles.project} src={kai} />
      <img className={styles.project} src={jungwon} />
      <img className={styles.project} src={bi} />
      <img className={styles.project} src={jk} />
    </div>
  );
}

export default ProjectContainer;