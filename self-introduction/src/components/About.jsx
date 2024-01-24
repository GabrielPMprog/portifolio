import styles from "./About.module.css";
import profileImage from "../Images/gabriel.png";

//Icons
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

//Components
import Button from "./Button";

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fullstack Developer</h1>
      <div className={styles.image}>
        <img src={profileImage} alt="Gabriel Paiva de Medeiros" />
      </div>
      <h1 className={styles.name}>Gabriel Paiva de Medeiros</h1>
      <div className={styles.list}>
        <ul>
          <div className={styles.itemList}>
            <li>
              <a href="https://www.instagram.com/gabriel.paivamedeiros/">
                <FaInstagram className={styles.icon}> </FaInstagram>
              </a>
              <p>Instagram</p>
            </li>
          </div>
          <div className={styles.itemList}>
            <li>
              <a href="https://github.com/GabrielPMprog">
                <FaGithub className={styles.icon}> </FaGithub>
              </a>
              <p>GitHub</p>
            </li>
          </div>
          <div className={styles.itemList}>
            <li>
              <a href="https://www.linkedin.com/in/gabriel-paiva-de-medeiros-98667b266/">
                <FaLinkedin className={styles.icon}> </FaLinkedin>
              </a>
              <p>Linkedin</p>
            </li>
          </div>
        </ul>
      </div>

      <Button />

    </div>
  );
}

export default About;
