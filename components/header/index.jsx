"use client"

import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen]= useState(false)

    useEffect(()=>{
        if(!isOpen){
            document.documentElement.style.overflow = 'auto';
            document.body.scroll = "yes";
        }else{
            document.documentElement.style.overflow = 'hidden';
            document.body.scroll = "no";
        }
    },[isOpen])
    
    return ( 
            <header className={styles.header}>
                <img src="/image/logo.svg" alt="logo image my book shelf" className={styles.logo}/>
                <button className={`${styles.btnMobile} ${!isOpen? '': styles.open}`} onClick={()=>{setIsOpen(!isOpen)}}>
                    <span className={styles.btnMobile_line}></span>
                    <span className={styles.btnMobile_line}></span>
                    <span className={styles.btnMobile_line}></span>
                </button>
                <div className={`${styles.header_content} ${!isOpen? '': styles.open}`}>
                    <nav className={styles.navegation}>
                        <Link href="/home" className={styles.link}> <span className="icone-home"></span> <span>Home</span></Link>
                        <Link href="/search" className={styles.link}> <span className="icone-search"></span> <span>Search</span></Link>
                        <Link href="/my-shelf" className={styles.link}> <span className="icone-bookshelf"></span> <span>My Shelf</span> </Link>
                        <Link href="/Contribute" className={styles.link}> <span className="icone-contribute"></span> <span>Contribute</span> </Link>
                    </nav>
                    <div className={styles.navegationAux}>
                        <Link href="/about" className={styles.link}> <span>About</span></Link>
                        <Link href="/support" className={styles.link}> <span>Support</span> </Link>
                        <Link href="/terms-condition" className={styles.link}> <span>Terms & Condition</span> </Link>
                    </div>
                </div>
            </header>
    )
}