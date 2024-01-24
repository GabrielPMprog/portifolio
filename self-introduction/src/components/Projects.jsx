import styles from "./Project.module.css";

// Images
import portifolio from "../Images/portifolio.png";
import thought from "../Images/thought.png";

function Projects() {
  return (
    <div className={styles.projectsMain}>
      <div className={styles.projectContainer}>
        <h1>Projetos</h1>
        <div className={styles.projects}>
          <div className={styles.portifolioProject}>
            <img src={portifolio} alt="portifolio project" />
            <div className={styles.actions}>
              <a href="">Ver repositório</a>
              <a href="" className={styles.protifolioProjectLink}>
                Projeto{" "}
              </a>
            </div>
          </div>
          <div className={styles.thoughtsProject}>
            <img src={thought} alt="portifolio project" />
            <div className={styles.actions}>
              <a href="">Ver repositório</a>
              <a href="">Projeto </a>
            </div>
          </div>
          <div className={styles.getapetProject}>
          <img src={thought} alt="portifolio project" />
            <div className={styles.actions}>
              <a href="">Ver repositório</a>
              <a href="">Projeto </a>
            </div>
          </div>
          <div className={styles.nlwProject}>
          <img src={thought} alt="portifolio project" />
            <div className={styles.actions}>
              <a href="">Ver repositório</a>
              <a href="">Projeto </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
