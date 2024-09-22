"use client"

import styles from "./carousel.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from "@/components/card";


export default function Carousel({data}) {
    // console.log(data)
    
    return (
        <Swiper 
        className={styles.carousel}
        spaceBetween={16}
        slidesPerView={6.5}
        freeMode={true}
        // grabCursor={true}
        // onSlideChange={() => console.log('')}
        // onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          0: {
            slidesPerView: 2.5,
          },
          576: {
            slidesPerView: 3.5,
          },
          768: {
            slidesPerView: 4.5,
          },
          992: {
            slidesPerView: 4.2,
          },
          1200: {
            slidesPerView: 5.5,
          },
          1366: {
            slidesPerView: 6.2,
          },
          1440: {
            slidesPerView: 6.5,
          },
          
        }}
      >
        {
          data && data.map((book, index) => {
            return (
            <SwiperSlide key={`item-${index}`}>
              <Card title={book.title}  author={book.author} year={book.publishDate.year}  ratings={book.ratings} image={book.urlImage}/>
            </SwiperSlide>
          )}
        )
        }
      </Swiper>
    )
}