"use client"

import styles from "./profile.module.scss";
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Profile({ }) {


    return (
        <div className={styles.profileContainer}>
          <img src="/image/avatar.png" alt="avatar" className={styles.profileAvatar}/>
          <p className={styles.profileName}>
            {`Kenson`}
             <img src="/image/seta-select.svg" alt="" />
          </p>
          <div className={styles.profileContentLinks}>
            <Link href="/profile" className={styles.link}>Profile</Link>
            <Link href="/favourite" className={styles.link}>Favourite</Link>      
            <Link href="/payments" className={styles.link}>Payments</Link>      
            <Link href="/logout" className={styles.link}>Logout</Link>      
          </div>
        </div>
    )
}