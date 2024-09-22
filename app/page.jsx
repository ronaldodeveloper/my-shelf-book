"use client"

import Image from "next/image";
import styles from "./page.module.scss";
import { books } from "../data/books.js"
import Card from "@/components/card";
import Header from "@/components/header";
import Carousel from "@/components/carousel";
import Search from "@/components/inputSearch";
import { useEffect, useState} from "react";


export default function Home() {

  const [bookSelected, setBookSelected] = useState([]);

  const getBookSelected= (data)=>{
    setBookSelected(data)
  }
  
  console.log(bookSelected)
  
  // useEffect(()=>{
 
  // },[bookSelected])

  return ( 
    <>
      <div className={"detalhesTopo"}></div>
      <Header />
      <main className={"main"}>
        <section className={`${styles.container}`}>
          <Search  books={books} getBookSelected={getBookSelected}/>
        </section>
        <section className={`${styles.sectionCarousel}`}>
          <h1 className={styles.title}>Good Morning</h1>
          <p className={styles.subtitle}>Recommended for You</p>
          <Carousel data={ bookSelected.length > 0 ? bookSelected: books } />
          <p className={styles.subtitle}>Recent Readings</p>
          <Carousel data={books} />
          <Carousel data={books} />
        </section>
      </main>
    </>
  );
}
