"use client"

import styles from "./search.module.scss";
import { useState} from "react";

export default function Search({ }) {

    const [urlEye, setUrlEye] = useState();
    

    function filter(element) {
        console.log(element)
    }

    
    return (
        <div className={`${styles.inputContainer}`}>
           <select name="" id="">
            {
                [1,2,3].map((e) => <option key={e} value={e}>{e}</option> )
            }
           </select>
           <input type={"search"} placeholder={placeholderText} name={nameText} className={styles.inputElement}/>
        </div>
    )
}