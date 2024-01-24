import styles from "./History.module.css";

// Icons

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { FaCss3 } from "react-icons/fa";

//Components
import Paragraph from "./Paragraph";
import ButtonHistory from "./buttonHistory";

function History() {
  return (
    <div className={styles.container}>
      <Paragraph />
      <div className={styles.list}>
        <ul>
          <div>
            <li>
              <FaReact className={styles.icon} />
              <p>React</p>
            </li>
          </div>
          <div>
            <li>
              <FaNodeJs className={styles.icon} />
              <p>Node.Js</p>
            </li>
          </div>
          <div>
            <li>
              <GrMysql className={styles.icon} />
              <p>MySql</p>
            </li>
          </div>
          <div>
            <li>
              <IoLogoJavascript className={styles.icon} />
              <p>Javascript</p>
            </li>
          </div>
          <div>
            <li>
              <DiMongodb className={styles.icon} />
              <p>MongoDb</p>
            </li>
          </div>

          <div>
            <li>
              <FaCss3 className={styles.icon} />
              <p>Css</p>
            </li>
          </div>
        </ul>
      </div>
    <ButtonHistory />
    </div>
  );
}

export default History;
