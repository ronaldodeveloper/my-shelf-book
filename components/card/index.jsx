"use client"

import styles from "./card.module.scss";
import Image  from 'next/image';


export default function Card({ title, image, author, year, ratings }) {
    
    return (
        <div className={styles.cardDefault}>
            <Image src={`/image/${image}`} alt={`image from the book: ${title}`} className={styles.cardDefault_image}  width={124} height={170}/>
            <h3 className={styles.cardDefault_title}>{title}</h3>
            <p className={styles.cardDefault_author}>
                <span>{author}</span>
                <span className={styles.cardDefault_year}>{year}</span>
            </p>
            <p className={styles.cardDefault_ratings}>{ratings ==5? ratings: `${ratings}/5`}</p>
        </div> 
    )
}