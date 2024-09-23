"use client"

import styles from "./carouselNewArrival.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from "@/components/card";


export default function Carousel({data, isNewArrival}) {
    // console.log(data)
    
    return (
        <Swiper 
        className={styles.carousel}
        spaceBetween={16}
        slidesPerView={6.5}
        freeMode={true}
        breakpoints={{
          0: {
            slidesPerView: 2.2,
          },
          576: {
            slidesPerView: 3.1,
          },
          992: {
            slidesPerView: 3.5,
          },
          1200: {
            slidesPerView: 4.5,
          }
        
        }}
      >
        {
         data &&  data.filter((book) => book.newArrival).map((book, index) => {
            return (
              <SwiperSlide key={`item-${index}`}>
                <Card image={book.urlImage} isNewArrival={isNewArrival} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    )
}

