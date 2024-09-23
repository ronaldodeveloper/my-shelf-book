"use client"

import Image from "next/image";
import styles from "./page.module.scss";
import { books } from "../data/books.js"
import Card from "@/components/card";
import CarouselBanner from "@/components/carouselBanner";
import CarouselNewArrival from "@/components/carouselNewArrival";
import Header from "@/components/header";
import Carousel from "@/components/carousel";
import Search from "@/components/inputSearch";
import DateTime from "@/components/datetime";
import { useEffect, useState} from "react";
import Profile from "@/components/profile";


export default function Home() {

  const [bookSelected, setBookSelected] = useState([]);
  const [hasSearch, setHasSearch] = useState(false);

  const getBookSelected= (data , searchText)=>{
    setBookSelected(data)
    setHasSearch(searchText)
  }
 
  
//   useEffect(()=>{
 
//   },[])

  const TodaysQuote= [
    {
      "author": "Walt Disney",
      "title": "Today’s Quote",
      "text": "There is more treasure in books than in all the pirate’s loot on Treasure Island."
    },
    {
      "author": "Walt Disney",
      "title": "Today’s Quote",
      "text": "There is more treasure in books than in all the pirate’s loot on Treasure Island."
    },
    {
      "author": "Walt Disney",
      "title": "Today’s Quote",
      "text": "There is more treasure in books than in all the pirate’s loot on Treasure Island."
    },
    {
      "author": "Walt Disney",
      "title": "Today’s Quote",
      "text": "There is more treasure in books than in all the pirate’s loot on Treasure Island."
    },
  ]

  return ( 
    <>
      <div className={"detalhesTopo"}></div>
      <Header />
      <main className={"main"}>
        <section className={`${styles.container} ${styles.container_search}`}>
          <Search  books={books} getBookSelected={getBookSelected}/>
          <DateTime/>
          <Profile/>
        </section>
        <section className={`${styles.container} ${styles.container_new}`}>
          <CarouselBanner  data={TodaysQuote}/>
          <div className={styles.carouselNewContainer}>
             <h3 className={styles.carouselNewContainer_title}>New Arrivals</h3>
             <CarouselNewArrival data={books} isNewArrival={true}/>
          </div>
        </section>

        <section className={`${styles.sectionCarousel}`}>
          <h1 className={styles.title}>Good Morning</h1>
          <p className={styles.subtitle}>Recommended for You</p>
          <Carousel data={ bookSelected.length > 0 ? bookSelected : books }/>
          <p className={styles.subtitle}>Recent Readings</p>
          <Carousel data={books} />
          <Carousel data={books} />
        </section>
      </main>
    </>
  );
}
