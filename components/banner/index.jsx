"use client"

import styles from "./banner.module.scss";

export default function Card({ title, text, author, bgGradient }) {
    
    return (
        <div className={`${styles.banner} ${styles[bgGradient]}`}>
           <h2 className={styles.title}>{title}</h2>
           <p className={styles.text}>{text}</p>
           <p className={styles.author}>{`- ${author}`}</p>
        </div> 
    )
}