import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";

import styles from "./Flag.module.css";


import React, {useContext} from "react";
import { MyContext } from '../Context'

function Flag() {
  const { language, setLanguage } = useContext(MyContext);
 
  function changeEnglish() {
    setLanguage("english");
    console.log(language);
  }

  function changeBrazil() {
    setLanguage("brazil");
    console.log(language);
  }

  return (
    <div className={styles.flag}>
      <button onClick={changeBrazil}>
        {" "}
        <GiBrazilFlag />{" "}
      </button>
      <button onClick={changeEnglish}> 
        {" "}
        <LiaFlagUsaSolid />{" "}
      </button>

    </div>
  );
}

export default Flag;
