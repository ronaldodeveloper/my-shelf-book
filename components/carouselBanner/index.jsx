"use client"

import styles from "./carouselBanner.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Banner from "@/components/banner";


export default function Carousel({data}) {
    // console.log(data)
    
    return (
        <Swiper 
        className={`${styles.carousel} carouselBanner`}
        spaceBetween={16}
        slidesPerView={1}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        {
          data && data.map((banner, index) => {
            return (
            <SwiperSlide key={`item-${index}`}>
              <Banner title={banner.title} text={banner.text} author={banner.author} bgGradient={`bgGradient_${index}`}/>
            </SwiperSlide>
          )}
        )
        }
      </Swiper>
    )
}