import React from 'react'
import { Swiper, SwiperSlide,  } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';



function HeroSection() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation={true}
      className='hidden sm:block  h-[500px]  sm:mt-24 md:mt-6'
    >
      <SwiperSlide className='flex justify-center'>
        <img className='w-[100%] h-full' src="/images/indian-1283789_1280.jpg" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide className='flex justify-center'>
        <img className='w-[100%]  h-full blur-sm' src="/images/indian-bride-8457513_1280.jpg" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide className='flex justify-center '>
        <img className='w-[100%] h-full' src="/images/homeless.jpg" alt="Slide 3" />
      </SwiperSlide>
      
    </Swiper>
  )
}

export default HeroSection