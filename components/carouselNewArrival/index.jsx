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
            slidesPerView: 2.5,
          },
          576: {
            slidesPerView: 3.5,
          },
          768: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 4.2,
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

