import { FaLocationArrow } from "react-icons/fa6";


import React, { useContext } from "react";
import { MyContext } from "../Context";

import styles from './About.module.css'

function ButtonHistory() {
  const { language, setLanguage } = useContext(MyContext);

  if (language == "brazil") {
    return (
        <div className={styles.button}>
        <button>
          Projetos
          <FaLocationArrow />{" "}
        </button>
      </div>
    );
  } else {
    return (
        <div className={styles.button}>
        <button>
          Projects
          <FaLocationArrow />{" "}
        </button>
      </div>
    );
  }
}

export default ButtonHistory;
