"use client"

import Image from "next/image";
import styles from "./page.module.scss";
import { books } from "../data/books.js"
import Card from "@/components/card";
import Header from "@/components/header";
import Carousel from "@/components/carousel";

export default function Home() {

  return ( 
    <>
      <div className={"detalhesTopo"}></div>
      <Header />
      <main className={"main"}>
      <section className={`${styles.sectionCarousel}`}>
        <h1 className={styles.title}>Good Morning</h1>
        <p className={styles.subtitle}>Recommended for You</p>
        <Carousel  data={books}/>
        <p className={styles.subtitle}>Recent Readings</p>
        <Carousel  data={books}/>
        <Carousel  data={books}/>
      </section>
      </main>
    </>
  );
}
