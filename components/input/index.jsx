"use client"

import styles from "./input.module.scss";
import { useState} from "react";

export default function Input({ labelText, typeText, placeholderText, nameText, }) {

    const [urlEye, setUrlEye] = useState("/image/eye-open.svg");
    const [isPassword, setIsPassword] = useState(false);
    

    function toggleEye(element) {
        element.preventDefault();
        setUrlEye(urlEye == "/image/eye-open.svg" ? "/image/eye-close.svg" : "/image/eye-open.svg");
        setIsPassword(!isPassword);
    }

    
    return (
        <div className={`${styles.inputContainer} ${typeText == "password" && styles.InputPassword}`}>
           <label htmlFor={nameText} className={styles.inputLabel}>{labelText}</label>
           <input type={typeText == "password" ? (isPassword ? "text" : "password") : typeText} placeholder={placeholderText} name={nameText} className={styles.inputElement}/>
           <button className={styles.inputIcon} onClick={toggleEye}>
                    <img src={urlEye} alt={'eye'} />
           </button>
        </div>
    )
}