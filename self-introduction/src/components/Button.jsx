import { FaFileDownload } from "react-icons/fa";

import React, { useContext } from "react";
import { MyContext } from "../Context";

import styles from './About.module.css'

function Button() {
  const { language, setLanguage } = useContext(MyContext);

  if (language == "brazil") {
    return (
      <div className={styles.button}>
        <button>
          Curriculo <FaFileDownload />
        </button>
      </div>
    );
  } else {
    return (
      <div className={styles.button}>
        <button>
          Curriculum <FaFileDownload />
        </button>
      </div>
    );
  }
}

export default Button;
